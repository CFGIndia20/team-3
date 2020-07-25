package com.example.cfgteam3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MessageSent extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_sent);
        Button Finish = (Button) findViewById(R.id.Finish);
        Button Send = (Button) findViewById(R.id.Send);
        Finish.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openMainActivity();
            }
        });
        Send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openUserDetails();
            }
        });
    }
    public void openMainActivity()
    {
        Intent intent = new Intent(this,MainActivity.class);
        startActivity(intent);
    }
    public void openUserDetails()
    {
        Intent intent = new Intent(this,UserDetails.class);
        startActivity(intent);
    }
}
