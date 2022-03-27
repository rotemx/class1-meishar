const promisifiedSetTimeoutEven = (cb, seconds) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const value = cb();
			if (!(value % 2))
			{
				resolve(value);
			} else
			{
				reject({status: 'value is not even', value})
			}
			
		}, seconds * 1000)
	})
}

let prom = promisifiedSetTimeoutEven(() => 88, 3);

prom
	.then(data => {
		console.log('resolved value is ' + data);
		return data * 10;
	})
	.then(data => {
		console.log('new data is ' + data);
	})
	.catch(err => console.error('error!', err));
