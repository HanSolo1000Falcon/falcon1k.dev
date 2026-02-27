import main from './main.html';
import notfound from './notfound.html';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		if (!url.pathname || url.pathname === '/') {
			return new Response(main, {
				status: 200,
				headers: {
					'Content-Type': 'text/html'
				}
			});
		}

		return new Response(notfound, {
			status: 200,
			headers: {
				'Content-Type': 'text/html'
			}
		});
	},
};
