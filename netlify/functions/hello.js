exports.handler = async function (event, context) {
	console.log("hello world")
	return {
		statusCode: 200,
		body: event,
		//statusCode: 302,
		//headers: {
		//      Location: "https://www.google.com/"
      		//},
	}
}