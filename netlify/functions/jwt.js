const { Buffer } = require('node:buffer');
const jwt = require('jsonwebtoken');

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
			var userId = json.user_id

			const key = process.env.TWITCH_EXTENSION_SECRET
			const secret = Buffer.from(key, 'base64')

			var payload = {
				'exp': Date.now() + 1000 * 60 * 60,
				'user_id': userId,
				'role': 'external',
				'channel_id': userId,
				'pubsub_perms': {
					send: [
						'broadcast'
					]
				}
			} 

			var token = jwt.sign(payload, secret)

			return {
				statusCode: 200,
				body: token,
			};
		})
}