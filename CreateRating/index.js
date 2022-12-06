const util = require('util');
const request = require('request');
const { v4:uuidv4 } = require('uuid');
const promiseReq= util.promisify(request);

module.exports = async function (context, req, outputDocument) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.body);

    // get parameters
    const userId = req.body.userId;
    const productId = req.body.productId;

    // check getProduct, getUser
    var optionsProd = {
        "method": "GET",
        "url": "https://serverlessohproduct.trafficmanager.net/api/GetProduct?productId=" + productId
    };
    const responseProd = await promiseReq(optionsProd);
    // check Result
    if (responseProd.body) {
        res_json = JSON.parse(responseProd.body);
        if (res_json.productId == productId) {
            context.log(responseProd.Prodbody);
        }      
    }
    else {
        context.log("not valid product. " + responseProd.body);
    }

    var optionsUser = {
        "method": "GET",
        "url": "https://serverlessohproduct.trafficmanager.net/api/GetUser?userId" + userId
    }
    const responseUser = await promiseReq(optionsUser);
    // check Result
    if (responseUser.body) {
        res_json = JSON.parse(responseUser.body);
        if (res_json.userId == userId) {
            context.log(response.body);
        }      
    }
    else {
        context.log("not valid User. " + responseUser.body);
    }    

    const json_data = req.body;
    //json_data.timestamp = "2022-12-05T09:00:00";
    json_data.id = uuidv4();
    json_data.timestamp = new Date().toUTCString();

    context.log(uuidv4());
    context.log(new Date().toUTCString());

    context.log(json_data);

    context.bindings.outputDocument = JSON.stringify(json_data);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(json_data)
    };
}
