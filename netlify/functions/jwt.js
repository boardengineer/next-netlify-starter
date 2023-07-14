exports.handler = async function (event, context) {

	var uri = "https://id.twitch.tv/oauth2/validate"

	var token = event.queryStringParameters.access_token

	return fetch(uri, {
		method: "GET",
		headers: {
			"Authorization": "Bearer " + token
		}
	})
	.then((response) => response.json())
	.then((json) => {
			console.log(JSON.stringify(json))
			return {
				statusCode: 200,
				body: "Test Body",
			};
		})
}