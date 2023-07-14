exports.handler = async function (event, context) {
	console.log("hello world")
	var code = event.queryStringParameters.code
	return {
		statusCode: 200,
		body: code,
		//statusCode: 302,
		//headers: {
		//      Location: "https://www.google.com/"
      		//},
	}
}