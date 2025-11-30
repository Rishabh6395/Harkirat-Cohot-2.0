
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method)
		return Response.json({
			message: "you did not send a get request"
		});
	},
};

