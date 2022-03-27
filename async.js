// single-thread

// synchronous code:
console.log('before');
console.log('after');


// asynchronous code APIs:
setInterval(()=>{

}, 1000);

setTimeout(()=>{
	console.log('future');
}, 3000);

// XHR HTTP request = AJAX = fetch
//user events - click / hover / doubleClick

// fetch = 3 second - hangs UI!
