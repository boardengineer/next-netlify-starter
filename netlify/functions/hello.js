exports.handler = async function (event, context) {
	console.log("hello world")

	var client_id = processs.env.CLIENT_ID
	var client_secret = processs.env.CLIENT_SECRET

	console.log("hello world 1")

	var code = event.queryStringParameters.code
	var redirect_uri = "localhost:31419"

	console.log("hello world 2")

	var uri = "https://id.twitch.tv/oauth2/token"

	var body = "client_id=" + client_id + "&client_secret=" + client_secret + "&code=" + code + "&grant_type=authorization_code&redirect_uri=http://localhost:31419"

	return fetch(uri, {
		method: "POST",
		body: body,
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then((response) => response.json())
	.then((json) => {
		statusCode: 200,
		body: json,
		//statusCode: 302,
		//headers: {
		//      Location: "https://www.google.com/"
      		//},
	})

	console.log("hello world 3")
}