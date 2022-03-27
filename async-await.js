

const myFn = async function(){
	
	//1
	
	try
	{
		let resolved_value = await fetch('https://itunes.apple.com/search?term=eminem');
		console.log(resolved_value); // this line will only run AFTER the API request is resolved.
	} catch (e) // inside async function is equivalent to Promise.catch()
	{
	}
	
	
	
	//2
	fetch('https://itunes.apple.com/search?term=eminem')
		.then(data=> {
			console.log(data); // this line will only run AFTER the API request is resolved.

				//B - will run LATER
				// there is access to DATA
		})
		.catch(err=>{})
		//.....A - WILL RUN SOONER. CANNOT USE DATA
	console.log('this command will not hang the UI.');
	
	
	// 1 and 2 are EQUIVALENT;
	
	return 707 //wrapped in promise
}

myFn().then((resolved_value)=>console.log(resolved_value));

//async keyword:
// 1. always at the function declaration
// 2. the function will wrap any returned value in a promise
// 3. you can use AWAIT keyword only inside async functions, on promise expressions
// 4. try/catch is syntactic sugar for promise.catch()
