package com.example.cfgteam3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class AdminLogin extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_login);
        TextView Invalid = (TextView) findViewById(R.id.textView3);
        EditText LoginID =  (EditText) findViewById(R.id.LoginID);
        EditText Password =  (EditText) findViewById(R.id.Password);
        Button Login = (Button) findViewById(R.id.Login);
        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (LoginID.getText().toString().equals("Admin") && Password.getText().toString().equals("Admin"))
                    openUserDetails();
                else
                    Invalid.setText("Invalid Login ID/Password!");
            }
        });
    }
    public void openUserDetails()
    {
        Intent intent = new Intent(this,UserDetails.class);
        startActivity(intent);
    }
}
