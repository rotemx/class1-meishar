function objectToArray(obj)
{
	
	if (typeof obj !== "object")
	{
		return Array.isArray(obj) ? obj : []
	}
	
	let result = [];
	
	for (let prop in obj)
	{
		if (typeof obj[prop] === 'object')
		{
			result = [...result, ...objectToArray(obj[prop])]
			// result = result.concat(objectToArray(obj[prop]))         //equivalent
		} else
		{
			result.push([prop, obj[prop]])
		}
	}
	return result;
}

let obj2 = {
	name: 'Rotem',
	dog : {
		name : 'yoyo',
		color: {
			name: 'white',
			len: {
				cm: 2
			}
			
		}
	}
}

console.log(objectToArray(obj2));

