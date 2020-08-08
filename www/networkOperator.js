/*
 * Cordova Network Provoder Plugin for Android
 * Cordova 3.0.0
 * Email: velonirinamihaja[at]gmail[dot]com
 * Author: Mihaja Velonirina
 * Date: 08/08/2020
 */


function networkProvider() {}


networkProvider.prototype.getNetworkProviderList = function(successCallback, failureCallback) {
	return cordova.exec(
		successCallback,
		failureCallback,
		'networkProvider',
		'getNetworkProviderList',
		[]);
}




// Installation constructor that binds networkProvider to window
networkProvider.install = function() {
	if (!window.plugins) {
	  window.plugins = {};
	}
	window.plugins.networkProvider = new networkProvider();
	return window.plugins.networkProvider;
  };
  
  cordova.addConstructor(networkProvider.install);

