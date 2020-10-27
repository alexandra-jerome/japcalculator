exports.handler = async function(event, context) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Hello" }),
    };
  };
  