async function obterDiretorio() {
	try {
		const res = await fetch("/");
		
		if (!res.ok) {
			throw new Error(`${res.status}: ${res.statusText}`);
		}
		
		const data = await res.text();
		
		p.innerHTML = data;
	} catch (e) {
		throw new Error(e);
	}
}
const p = document.createElement("p");
obterDiretorio();
document.body.appendChild(p);