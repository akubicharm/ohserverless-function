module.exports = async function (context, req, inputDocument) {
    context.log('JavaScript HTTP trigger function processed a request.' + req.query.ratingId);

    const ratingId = (req.query.ratingId || (req.body && req.body.ratingId));

    context.log(inputDocument);

    const org_data = inputDocument[0];
    const json_data = {
        "id": org_data.id,
        "userId": org_data.userId,
        "productId": org_data.productId,
        "timestamp": org_data.timestamp,
        "locationName": org_data.locationName,
        "rating": org_data.rating,
        "userNotes": org_data.userNotes
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(json_data)
    };
}