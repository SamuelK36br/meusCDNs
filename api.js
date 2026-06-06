async function api(url, metodo) {
	try {
		const res = await fetch(url);
		
		if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
		
		const data = await res[metodo]();
		
		return data;
	} catch (e) { throw new Error(e) }
}

export default api;