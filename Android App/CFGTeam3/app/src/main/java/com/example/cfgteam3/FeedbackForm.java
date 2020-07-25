package com.example.cfgteam3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.hsalf.smileyrating.*;

import java.sql.*;

public class FeedbackForm extends AppCompatActivity {

    private static final String TAG = "FeedbackForm";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_feedback_form);

        Button Submit = (Button) findViewById(R.id.Submit);
        int r1,r2,r3,r4,r5;
        r1=r2=r3=r4=r5=3;
        SmileyRating a1 = (SmileyRating) findViewById(R.id.a1);
        a1.setSmileySelectedListener(new SmileyRating.OnSmileySelectedListener() {
            @Override
            public void onSmileySelected(SmileyRating.Type type)
            {
                int r1 = type.getRating();
            }
        });
        SmileyRating a2 = (SmileyRating) findViewById(R.id.a2);
        a2.setSmileySelectedListener(new SmileyRating.OnSmileySelectedListener() {
            @Override
            public void onSmileySelected(SmileyRating.Type type)
            {
                int r2 = type.getRating();
            }
        });
        SmileyRating a3 = (SmileyRating) findViewById(R.id.a3);
        a3.setSmileySelectedListener(new SmileyRating.OnSmileySelectedListener() {
            @Override
            public void onSmileySelected(SmileyRating.Type type)
            {
                int r3 = type.getRating();
            }
        });
        SmileyRating a4 = (SmileyRating) findViewById(R.id.a4);
        a4.setSmileySelectedListener(new SmileyRating.OnSmileySelectedListener() {
            @Override
            public void onSmileySelected(SmileyRating.Type type)
            {
                int r4 = type.getRating();
            }
        });
        SmileyRating a5 = (SmileyRating) findViewById(R.id.a5);
        a5.setSmileySelectedListener(new SmileyRating.OnSmileySelectedListener() {
            @Override
            public void onSmileySelected(SmileyRating.Type type)
            {
                int r5 = type.getRating();
            }
        });
        Submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try
                {
                    Class.forName("com.mysql.jdbc.Driver");
                    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/cfg", "root", "");
                    Statement stmt = conn.createStatement();
                    stmt.execute("insert into feedback values ('"+r1+","+r2+","+r3+","+r4+","+r5+","+"')");
                    conn.close();
                }
                catch (Exception e)
                {}
                openThankYou();
            }
        });
    }
    public void openThankYou()
    {
        Intent intent = new Intent(this,ThankYou.class);
        startActivity(intent);
    }
}
