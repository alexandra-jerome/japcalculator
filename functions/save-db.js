const faunadb = require("faunadb"); /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function(event, context) {
  if(event.httpMethod == "OPTIONS"){
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({message: "OK"}),
    }
  }
  const data = JSON.parse(event.body);
  console.log("Function `todo-create` invoked", data);
  const todoItem = {
    data: data,
  };
  /* construct the fauna query */
  return client
    .query(q.Create(q.Ref("classes/todos"), todoItem))
    .then((response) => {
      console.log("success", response);
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
