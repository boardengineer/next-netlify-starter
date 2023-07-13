exports.handler = async function (event, context) {
	const key = process.env.TWITCH_API_CLIENT_SECRET
	const secret = Buffer.from(key, 'base64')
	const user_id = event.body.user_id

	function errorHandler(error) {
    console.log("ERROR:", error);
    /* Error! return the error with statusCode 400 */
    return {
      statusCode: 400,
      body: JSON.stringify(error, null, 2),
    };
  }

	if(!user_id){
		errorHandler("No user_id!")
	}


	const payload = {
		'exp': Date.now() + 1000 * 60 * 60 * 24 * 30,
		'user_id': user_id,
		'role': 'external',
		'chanel_id': user_id,
		'pubsub_perms': {
			send: [
				'broadcast'
			]
		}
	}

	const token = jwt.sign(payload, secret)

	return {
		statusCode: 200,
		body: token,
	}

}