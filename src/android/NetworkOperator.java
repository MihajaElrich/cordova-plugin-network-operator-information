package com.vntechnology.cordova.plugin;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Context;
import android.media.*;

public class NetworkOperator extends CordovaPlugin {

    public static final String NPLIST = "getNetworkProviderList";
    private static final String TAG = "NetworkProvider";

    private Context context;


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        boolean actionState = true;
        context = cordova.getActivity().getApplicationContext();
       

        if (NPLIST.equals(action)) {
            try {
                // Get System TELEPHONY service reference
                TelephonyManager tManager = (TelephonyManager) getBaseContext()
                    .getSystemService(Context.TELEPHONY_SERVICE);

                // Get carrier name (Network Operator Name)
                String carrierName = tManager.getNetworkOperatorName();

                // Send a positive result to the callbackContext
                callbackContext.success(carrierName);
                
            } catch(Exception e) {
                callbackContext.error(e)
                LOG.d(TAG, "ERROR: " + e);
                actionState = false;
            }
            
        }
        
        else {
            actionState = false;
        }
        return actionState;
    }

}