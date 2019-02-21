import 'whatwg-fetch'; //used right away no need for var

//function to get the products from the API on the server
class HttpService {
	getProducts = () => {
		var promise = new Promise((resolve,reject) => {
			fetch('http://localhost:3004/product')
			.then(response => {
				resolve(response.json());
			})
		});
		return promise;	
	}
}

export default HttpService;
//prints to the console