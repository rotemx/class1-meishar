globalThis.name = "I am the window";
const myObj2 = {
    name: "obj2",
}

const myObj = {
    name: "Rotem",

    getName(param, param2) { //method (regular function)
        console.log(this.name); //this:myObj;
        const myArrowFn = () => console.log(this.name + ' ' +  param + ' ' +  param2)
        console.log(myArrowFn());
    },
    getNameArrow: () => {
        console.log(this.name)
    }
}

let paramArray = ['param2', 'param3'];

myObj.getName.apply(myObj2, paramArray);
myObj.getName.call(myObj2, ...paramArray);  //equivalent
//

