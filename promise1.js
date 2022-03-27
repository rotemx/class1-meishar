// promisify
// Q BlueBird


const promisifyDelayedSeven = (sec)=>{
	return new Promise(((resolve, reject) => {
		setTimeout(()=>{
		    resolve(7)
		}, sec * 1000)
	}))
}


const promisifiedSetTimeout = (cb, seconds) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
		    resolve(cb());
		}, seconds * 1000)
	})
}

promisifiedSetTimeout(()=>88, 3)
	.then(data=>{console.log('resoled value is ' + data);})
	.catch(err=>console.error(err ));
