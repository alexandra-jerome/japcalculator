exports.handler = async function(event, context) {
    try{
        const requestBody = JSON.parse(event.body);
        if("message" in requestBody){
            return {
                    statusCode: 200,
                    body: JSON.stringify({ "message": requestBody.message }),
                }
            };
        return {
                statusCode: 400,
                body: JSON.stringify({ "message": "Please return a message in your body" }),
        }
    } 
    catch(e){
        return {
                statusCode: 400,
                body: JSON.stringify({ message: "Please return a body with your message" }),
              };
        }
};
  