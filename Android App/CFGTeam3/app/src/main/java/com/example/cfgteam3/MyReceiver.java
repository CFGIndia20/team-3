package com.example.cfgteam3;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.telephony.SmsMessage;
import android.util.Log;
import android.widget.Toast;

public class MyReceiver extends BroadcastReceiver {

    private static final String SMS_RECEIVED="android.intent.Telephony.SMS_RECEIVED";
    private static final String TAG="SmsBroadcastReceiver";
    String msg="",phoneno="";

    @Override
    public void onReceive(Context context, Intent intent)
    {
        if(intent.getAction()==SMS_RECEIVED)
        {
            Bundle dataBundle=intent.getExtras();
            if(dataBundle!=null)
            {
                Object[] mypdu=(Object[])dataBundle.get("pdus");
                final SmsMessage[] message=new SmsMessage[mypdu.length];
                for (int i=0 ; i<mypdu.length ; i++)
                {
                    if(Build.VERSION.SDK_INT>=Build.VERSION_CODES.M)
                    {
                        String format=dataBundle.getString("format");
                        message[i]=SmsMessage.createFromPdu((byte[])mypdu[i],format);
                    }
                    else
                    {
                        message[i]=SmsMessage.createFromPdu((byte[])mypdu[i]);
                    }
                    msg=message[i].getMessageBody();
                    phoneno=message[i].getOriginatingAddress();
                }
                Log.e("Recieved","Message"+msg+"\nPhone No.:"+phoneno);
            }
        }
    }
}
