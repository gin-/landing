/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const ses = new aws.SES({
    region: process.env.REGION
});

// the init file is only used to populate the database the first time
const init = require('./init.js');

// declare a new express app
const app = express();
app.use(bodyParser.json());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});


AWS.config.update({ region: process.env.REGION });

// The DocumentClient class allows us to interact with DynamoDB using normal objects.
// Documentation for the class is available here: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
// var dynamoDb = new AWS.DynamoDB.DocumentClient()

/**********************
 * Send email
 *********************/

app.post('/blackbird/contacts', function (req, res) {
    console.log(req);

    const eParams = {
        Destination: {
            ToAddresses: ["ahrushko@blackbird.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Hey! What is up?"
                }
            },
            Subject: {
                Data: "Email Subject!!!"
            }
        },
        Source: "ahrushko@blackbird.com"
    };

    console.log('===SENDING EMAIL===');
    const email = ses.sendEmail(eParams, function (err, data) {
        if (err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);


            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(event);

        }
    });
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
