function api(url) {
	try {
		console.time("fetch");
		const res = await fetch(url);
		
		if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
		
		const data = await res.json();
		console.timeEnd("fetch");
		
		console.log(data);
	} catch (e) { throw new Error(e) }
}

export default api;