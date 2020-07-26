package com.example.cfgteam3;

import android.Manifest;
import android.app.ProgressDialog;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.*;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    private static final int MY_PERMISSIONS_REQUEST_RECIEVE_SMS=0;
    private ProgressDialog progressDialog;
    EditText PatientID,SpaceID;
    TextView Invalid;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setAppLocale("en");
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide();

        PatientID =  (EditText) findViewById(R.id.LoginID);
        SpaceID =  (EditText) findViewById(R.id.Password);

        Button Login = (Button) findViewById(R.id.Login);
        TextView Admin = (TextView) findViewById(R.id.Admin);
        progressDialog=new ProgressDialog(this);
        Invalid = (TextView) findViewById(R.id.textView3);

        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.RECEIVE_SMS},MY_PERMISSIONS_REQUEST_RECIEVE_SMS);
        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                login();
            }
        });
        Admin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openAdminLogin();
            }
        });
    }
    public void login()
    {
        String pid=PatientID.getText().toString().trim();
        String sid=SpaceID.getText().toString().trim();

        progressDialog.setMessage("Verifying data...");
        progressDialog.show();

        StringRequest stringRequest=new StringRequest(Request.Method.POST,
                "http://192.168.0.3/Android/v1/userLogin.php",
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progressDialog.dismiss();
                        openFeedbackForm();
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        progressDialog.hide();
                        Invalid.setText("Invalid Patient ID/Space ID!");
                    }
                }){
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String,String> params=new HashMap<>();
                params.put("PID",pid);
                params.put("SID",sid);
                return params;
            }
        };
        RequestQueue requestQueue=Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);
        openFeedbackForm();
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
