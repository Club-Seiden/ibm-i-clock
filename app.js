/*jshint node:true*/



var body_parser = require('body-parser');

var express = require('express');
// setup middleware
var app = express();
app.use(express.static(__dirname));
app.use("/js", express.static(__dirname+"/js"));
app.use("/img", express.static(__dirname+"/img"));
app.use("/css", express.static(__dirname+"/css"));

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 60618);
// Start server
app.listen(port, function () {
  console.log('Running on port %d', port)
});
