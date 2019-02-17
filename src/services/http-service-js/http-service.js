import 'whatwg-fetch'; //used right away no need for var
console.log('hello');

class HttpService {
	getProducts = () => {
		fetch('http://localhost:3004/product')
		.then(response => {
			console.log(response.json());
		})
	}
}

export default HttpService;