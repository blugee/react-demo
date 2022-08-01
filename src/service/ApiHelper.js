
class ApiHelper {
	static headers() {
		return {
			Accept: "application/json",
			"Content-Type": "application/json",
		};
	}

	static postAnonymous(route, params, abortController) {
		return this.xhr(route, params, null, "POST", abortController);
	}

	static xhr(route, params, token = "", verb, abortController) {
		const host = "http://wren.in:3200/api/sign-up";
		const url = `${host}${route}`;
		let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
		options.headers = ApiHelper.headers();
		if (token) {
			options.headers = {
				...options.headers
			};
		}
		return fetch(url, options)
			.then(resp => {
				if (resp.status === 401) {
					return { error: "Unauthorize!!!" };
				}
				let json = resp.json();
				if (resp.ok) {
					return json;
				}
				return json.then(err => {
					throw err;
				});
			})
			.catch(resp => {
				console.log("bad response for " + url);
				console.log(resp);
			});
	}
}

export default ApiHelper;
