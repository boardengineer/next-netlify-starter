exports.handler = async function (event, context) {
	console.log("hello world")
	return {
		//statusCode: 200,
		//body: "hello",
		statusCode: 302,
		"Location": "google.com",
	}
}