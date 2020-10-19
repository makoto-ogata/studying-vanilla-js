// function promiseTest1() {
//   return new Promise((ok) => {
//     ok('プロミス１です');
//   });
// }

// console.log(promiseTest1());

// const promiseTest2 = new Promise( ok => {
//   ok('プロミス２です');
// });

// console.log(promiseTest2);

// function promiseTest3(input){
//   return new Promise(ok => {
//     ok(`プロミス${input}です`);
//   });
// }

// console.log(promiseTest3('太郎'));

// promiseチェーン

function promiseTest4(pay, seconds){
  return new Promise((ok, ng) => {
    setTimeout(() => {
      if(pay > 100){
        let change = pay - 100;
        console.log(`${seconds}秒、おつりは${change}円です`);
        ok(change);
      }
      ng('お金が足りません');
    }, seconds * 1000);
  })
}

// console.log(promiseTest4(300, 2));

// promiseTest4(180).then(change => {
//   console.log(change);
//   return promiseTest4(change);
// }).then(change =>{
//   console.log(change);
// }).catch(e => console.log(e));

promiseTest4(300, 2)
.then(change1 => promiseTest4(change1, 5))
.then(change2 => promiseTest4(change2, 3))
.catch(e => console.log(e));