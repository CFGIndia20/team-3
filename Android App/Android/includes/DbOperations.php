<?php 

	class DbOperations{

		private $con; 

		function __construct(){

			require_once dirname(__FILE__).'/DbConnect.php';

			$db = new DbConnect();

			$this->con = $db->connect();

		}
		public function userLogin($pid, $sid){
			$stmt = $this->con->prepare("SELECT * from user where PID=? and SID=?");
			$stmt->bind_param("ii",$pid,$sid);
			$stmt->execute();
			$stmt->store_result(); 
			return $stmt->num_rows > 0; 
		}

		public function getUserByPid($PID){
			$stmt = $this->con->prepare("SELECT * FROM users WHERE PID = ?");
			$stmt->bind_param("i",$PID);
			$stmt->execute();
			return $stmt->get_result()->fetch_assoc();
		}
		

		private function isUserExist($username, $email){
			$stmt = $this->con->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
			$stmt->bind_param("ss", $username, $email);
			$stmt->execute(); 
			$stmt->store_result(); 
			return $stmt->num_rows > 0; 
		}

	}