package com.example.cfgteam3;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class UserDetails extends AppCompatActivity {
    final int SEND_SMS_PERMISSION_REQUEST_CODE=1;

    EditText number;
    Button send;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_details);
        number=(EditText) findViewById(R.id.Phone);
        send=(Button) findViewById(R.id.Send);
        ActivityCompat.requestPermissions(UserDetails.this,new String[]{Manifest.permission.SEND_SMS,Manifest.permission.READ_SMS},PackageManager.PERMISSION_GRANTED);
    }

    public void onSend(View v)
    {
        String phoneno=number.getText().toString();
        if(checkPermission(Manifest.permission.SEND_SMS))
        {
            SmsManager smsManager=SmsManager.getDefault();
            smsManager.sendTextMessage(phoneno,null,getString(R.string.feedback_message),null,null);
            OpenMessageSent();
        }
    }

    public void OpenMessageSent()
    {
        Intent intent = new Intent(this,MessageSent.class);
        startActivity(intent);
    }

    public boolean checkPermission(String permission)
    {
        int check= ContextCompat.checkSelfPermission(this,permission);
        return (check== PackageManager.PERMISSION_GRANTED);
    }
}
