package com.example.cfgteam3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class AdminLogin extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_login);
        EditText PatientID =  (EditText) findViewById(R.id.LoginID);
        EditText SpaceID =  (EditText) findViewById(R.id.Password);
        Button Login = (Button) findViewById(R.id.Login);
        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
/*                connectionClass = new ConnectionClass();
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
  */              openUserDetails();
            }
        });
    }
    public void openUserDetails()
    {
        Intent intent = new Intent(this,UserDetails.class);
        startActivity(intent);
    }
}
