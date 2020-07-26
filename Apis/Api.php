<?php
require_once('CFG.php');

try {
  $writeDB = DB::connectWriteDB();
  $readDB = DB::connectReadDB();
}
catch(PDOException $ex){
  error_log("Connection error - ".$ex , 0);
  $response = new Response();
  $response->setHttpStatusCode(500);
  $response->setSuccess(false);
  $response->addMessage('Database Connection Error');
  $response->send();
  exit;
}

if(array_key_exists("name",$_GET)) {
  $name = $_GET['name'];
  if($name=="donors"){

    $query = $readDB->prepare("select d_id, u_id, name, phone, email, security_code from donars");
    $query->execute();

    $rowCount = $query->rowCount();
    $DArray = array();

    foreach($query as $result){
      $DonorArray['Donor_id']=$result['d_id'];
      $DonorArray['Patient_id']=$result['u_id'];
      $DonorArray['Donor_name']=$result['name'];
      $DonorArray['Donor_phone']=$result['phone'];
      $DonorArray['Donor_securitycode']=$result['security_code'];
      array_push($DArray,$DonorArray);
    }
    echo json_encode($DArray);
  }
  elseif ($name=="patients") {
    $query = $readDB->prepare("select uid, unit_id, unit, admission_date, discharged_date, admission_status,name,language,center from details");
    $query->execute();
    $rowCount = $query->rowCount();
    $PArray = array();

    foreach($query as $result){
      $PatientArray['uid']=$result['uid'];
      $PatientArray['unit_id']=$result['unit_id'];
      $PatientArray['unit']=$result['unit'];
      $PatientArray['admission_date']=$result['admission_date'];
      $PatientArray['discharged_date']=$result['discharged_date'];
      $PatientArray['admission_status']=$result['admission_status'];
      $PatientArray['name']=$result['name'];
      $PatientArray['language']=$result['language'];
      $PatientArray['center']=$result['center'];
      array_push($PArray,$PatientArray);
    }
    echo json_encode($PArray);
  }
  elseif ($name=="feedback") {
    $query = $readDB->prepare("select u_id,avg(rating) as rating,unit_id,unit,center from questions,details where questions.u_id=details.uid group by questions.u_id,unit");
    $query->execute();
    $rowCount = $query->rowCount();
    $RArray = array();

    foreach($query as $result){
      $RatingArray['uid']=$result['u_id'];
      $RatingArray['average_rating']=$result['rating'];
      $RatingArray['unit']=$result['unit_id'];
      $RatingArray['unit']=$result['unit'];
      $RatingArray['center']=$result['center'];
      array_push($RArray,$RatingArray);
    }
    echo json_encode($RArray);
  }
  elseif ($name=="question") {
    $query = $readDB->prepare("select id, question from old_questions");
    $query->execute();
    $rowCount = $query->rowCount();
    $OArray = array();
    foreach($query as $result){
      $QuestionArray['id']=$result['id'];
      $QuestionArray['question']=$result['question'];
      array_push($OArray,$QuestionArray);
    }
    echo json_encode($OArray);
  }

}


 ?>
