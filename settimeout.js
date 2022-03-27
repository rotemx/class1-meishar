console.log('before');
const anonymous2 = ()=>{console.log('data is here');}
// fetch('url').then(anonymous2);
(() => console.log('EIFE'))()

setTimeout(() => console.log('future'), 5000)

console.log('after');


// Event loop

// 1.main
// 2. anonymous1
// 3. anonymous2
