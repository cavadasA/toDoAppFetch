import { useEffect } from "react/cjs/react.production.min";

export function Fetcher() {
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(res => res.json())
			.then(answer => console.log(answer));
	});
}
