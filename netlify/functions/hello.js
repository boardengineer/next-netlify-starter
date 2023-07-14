exports.handler = async function (event, context) {
	var client_id = process.env.CLIENT_ID
	var client_secret = process.env.CLIENT_SECRET

	var code = event.queryStringParameters.code
	var redirect_uri = "http://localhost:31419"

	var uri = "https://id.twitch.tv/oauth2/token"

	var body = "client_id=" + client_id + "&client_secret=" + client_secret + "&code=" + code + "&grant_type=authorization_code&redirect_uri=http://localhost:31419"

	return fetch(uri + "?" + body, {
		method: "POST",
		body: body,
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then((response) => response.json())
	.then((json) => {
			console.log("we did it!")
			console.log(JSON.stringify(json))

			var redirectParams = Object.keys(json).map(function(k) {
    				return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
			}).join('&')


			var gameURI = redirect_uri + "?" + redirectParams

			console.log(gameURI)

			return {
				statusCode: 307,
				headers: {
   					Location: redirect_uri + "?" + redirectParams
  				},
				body: "Test Body",
			};
		})
}