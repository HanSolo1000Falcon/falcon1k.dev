import main from './main.html';
import notfound from './notfound.html';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		if (url.pathname === '/.well-known/discord') {
			return new Response('dh=1ee52f325dede87e81931f9fe4b6fc5a7effa045', {
				status: 200,
				headers: {
					'Content-Type': 'text/plain',
				}
			})
		}

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
