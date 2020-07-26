<?php 

require_once '../includes/DbOperations.php';

$response = array(); 
if($_SERVER['REQUEST_METHOD']=='POST')
{
		$db = new DbOperations(); 

		if($db->userLogin($_POST['PID'],$_POST['SID']))
		{
			$user = $db->getUserByPid($_POST['PID']);
			$response['error'] = false;
			$response['message'] = "Success";
			$response['PID'] = $user['PID'];
			$response['SID'] = $user['SID'];			
		}
		else
		{
			$response['error'] = true; 
			$response['message'] = "Invalid PID or SID";			
		}

}

echo json_encode($response);