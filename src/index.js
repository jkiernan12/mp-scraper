console.log("Hello World!");

const papa = require('papaparse')
const fetch = require('node-fetch')

let test = fetch('https://www.mountainproject.com/user/200928904/john-kiernan/tick-export')
.then(res => console.log(res))
// .then(data => {
//   console.log(data)
//   // let myJson = papa.parse(data);
//   // console.log(myJson)
//   // myJson.data.filter(route => {
//   //   if (route[4]) {
//   //     return route[4].includes("http")
//   //   } else {
//   //     return false
//   //   }
//   //   })
//   //   .forEach((route, i) => {
//   //   getPicPage(route)
//   //   getData(route)
//   // })
//   // console.log(routeDescriptions);
// })
.catch(err => console.log(err))