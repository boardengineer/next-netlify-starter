exports.handler = async function (event, context) {
	var client_id = process.env.CLIENT_ID
	var client_secret = process.env.CLIENT_SECRET

	var refresh_token = event.queryStringParameters.refresh_token

	var uri = "https://id.twitch.tv/oauth2/token"

	var body = "client_id=" + client_id + "&client_secret=" + client_secret + "&refresh_token=" + refresh_token + "&grant_type=refresh_token"

	return fetch(uri + "?" + body, {
		method: "POST",
		body: body,
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	})
	.then((response) => response.json())
	.then((json) => {
			return {
				statusCode: 200,
				body: JSON.stringify(json),
			};
		})
}