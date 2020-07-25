package com.example.cfgteam3;

import android.Manifest;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import java.sql.*;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {
    ConnectionClass connectionClass;
    private static final int MY_PERMISSIONS_REQUEST_RECIEVE_SMS=0;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setAppLocale("ta");
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide();
        final EditText PatientID =  (EditText) findViewById(R.id.LoginID);
        final EditText SpaceID =  (EditText) findViewById(R.id.Password);
        Button Login = (Button) findViewById(R.id.Login);
        TextView Admin = (TextView) findViewById(R.id.Admin);
        final TextView Invalid = (TextView) findViewById(R.id.textView3);
        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.RECEIVE_SMS},MY_PERMISSIONS_REQUEST_RECIEVE_SMS);
        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                connectionClass = new ConnectionClass();
                Connection conn = connectionClass.CONN();
                try
                {
                    Statement stmt = conn.createStatement();
                    ResultSet rs = stmt.executeQuery("select * from user where PID='" + PatientID.getText() + "' and SID='" + SpaceID.getText() + "'");
                    if(rs.next())
                    {
                        openFeedbackForm();
                    }
                    else
                    {
                        Invalid.setText("Invalid Patient ID/Space ID!");
                    }
                    conn.close();
                }
                catch (Exception e)
                {
                    Invalid.setText(e.toString());
                }
                openFeedbackForm();
            }
        });
        Admin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openAdminLogin();
            }
        });
    }
    public void openAdminLogin()
    {
        Intent intent = new Intent(this,AdminLogin.class);
        startActivity(intent);
    }
    public void openFeedbackForm()
    {
        Intent intent = new Intent(this,FeedbackForm.class);
        startActivity(intent);
    }
    private void setAppLocale(String localeCode)
    {
        Resources res=getResources();
        DisplayMetrics dm=res.getDisplayMetrics();
        Configuration conf=res.getConfiguration();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            conf.setLocale(new Locale(localeCode.toLowerCase()));
        }
        else
        {
            conf.locale=new Locale(localeCode.toLowerCase());
        }
        res.updateConfiguration(conf,dm);
    }
}
