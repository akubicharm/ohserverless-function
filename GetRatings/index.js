module.exports = async function (context, req, inputDocument) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ratingId = (req.query.userId || (req.body && req.body.userId));

    context.log(inputDocument);

    const json_data = [];

    inputDocument.forEach(function(org_data) {
        var j = {
            "id": org_data.id,
            "userId": org_data.userId,
            "productId": org_data.productId,
            "timestamp": org_data.timestamp,
            "locationName": org_data.locationName,
            "rating": org_data.rating,
            "userNotes": org_data.userNotes
        };
        json_data.push(j);
    });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(json_data)
    };
}