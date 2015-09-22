var configForDevelopment = {
	providers: {
		google: {
      // TODO Replace with your own auth config!
			clientId: '110616868555-0itd3opbefd2bi77975c6tclaqm7nea2.apps.googleusercontent.com'
		}
	}
};

var configForProduction = {
	providers: {
		google: {
      // TODO Replace with your own auth config!
			clientId: '110616868555-0itd3opbefd2bi77975c6tclaqm7nea2.apps.googleusercontent.com'
		}
	}
};
var config ;
if (window.location.hostname==='localhost') {
	config = configForDevelopment;
}
else{
	config = configForProduction;
}

export default config;
