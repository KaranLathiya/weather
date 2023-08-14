// console.time("run")
// // let url="https://kontests.net/api/v1/all"
// // let response=fetch(url)
// // response.then((v)=>{
// //     return v.json()
// // }).then((v)=>{
// //     console.log(v)
// // })
let CITIES=["Kolkata","Delhi","Mumbai","Rajkot","Ahmedabad","Pune","Lucknow","Punjab","Rajasthan","Karnataka"]

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef8e0b172emshe3188eed9970996p1b3f19jsn94ddbee112b9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// let w=weather_data();
//      function weather_data (){ 
//         var move=-1;
//         for(let i=0;i<CITIES.length;i++){ 
//      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+CITIES[i], options)
// 	.then(response => response.json())
// 	.then(
//          (response)=>{console.log(response)
//           move+=1;
//         let div=document.getElementById('add');
//         div.innerHTML+=`<div class="card ab" style="width: 18rem;">
//         <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
//         <div class="card-body">
//           <h5 class="card-title">${CITIES[move]}</h5>
//           <p class="card-text">HUMIDITY:${response.humidity}</p>
//           <p class="card-text">TEMPERATURE:${response.temp}</p> 
//           <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
//           <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
//           <p class="card-text">WIND SPEED:${response.wind_speed}</p>
//         </div>
//       </div>
//   ` 

//   })
// 	.catch(err => console.error(err));
// }
// console.timeEnd("run")
// } 
let p1= async(a)=>{ return new Promise((resolve,reject)=>{
  let responsee= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+a, options)
   
   responsee.then((response)=>{
     return response.json()
 }).then((response)=>{
     console.log(response)
     let div=document.getElementById('add');
             div.innerHTML+=`<div class="card ab" style="width: 18rem;">
             <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
             <div class="card-body">
               <h5 class="card-title">${a}</h5>
               <p class="card-text">HUMIDITY:${response.humidity}</p>
               <p class="card-text">TEMPERATURE:${response.temp}</p> 
               <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
               <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
               <p class="card-text">WIND SPEED:${response.wind_speed}</p>
             </div>
           </div>
       ` 
       resolve(a)
 })
 })}
//  let p2= async()=>{ return new Promise((resolve,reject)=>{
//   let responsee= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+CITIES[1], options)
   
//    responsee.then((response)=>{
//      return response.json()
//  }).then((response)=>{
//      console.log(response)
//      let div=document.getElementById('add');
//              div.innerHTML+=`<div class="card ab" style="width: 18rem;">
//              <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
//              <div class="card-body">
//                <h5 class="card-title">${CITIES[1]}</h5>
//                <p class="card-text">HUMIDITY:${response.humidity}</p>
//                <p class="card-text">TEMPERATURE:${response.temp}</p> 
//                <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
//                <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
//                <p class="card-text">WIND SPEED:${response.wind_speed}</p>
//              </div>
//            </div>
//        ` 
//        resolve(9090)
//  })
//  })}
//  let p3= async()=>{ return new Promise((resolve,reject)=>{
//   let responsee= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+CITIES[2], options)
   
//    responsee.then((response)=>{
//      return response.json()
//  }).then((response)=>{
//      console.log(response)
//      let div=document.getElementById('add');
//              div.innerHTML+=`<div class="card ab" style="width: 18rem;">
//              <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
//              <div class="card-body">
//                <h5 class="card-title">${CITIES[2]}</h5>
//                <p class="card-text">HUMIDITY:${response.humidity}</p>
//                <p class="card-text">TEMPERATURE:${response.temp}</p> 
//                <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
//                <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
//                <p class="card-text">WIND SPEED:${response.wind_speed}</p>
//              </div>
//            </div>
//        ` 
//        resolve(9090)
//  })
//  })}
//  let p4= async()=>{ return new Promise((resolve,reject)=>{
//   let responsee= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+CITIES[3], options)
   
//    responsee.then((response)=>{
//      return response.json()
//  }).then((response)=>{
//      console.log(response)
//      let div=document.getElementById('add');
//              div.innerHTML+=`<div class="card ab" style="width: 18rem;">
//              <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
//              <div class="card-body">
//                <h5 class="card-title">${CITIES[3]}</h5>
//                <p class="card-text">HUMIDITY:${response.humidity}</p>
//                <p class="card-text">TEMPERATURE:${response.temp}</p> 
//                <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
//                <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
//                <p class="card-text">WIND SPEED:${response.wind_speed}</p>
//              </div>
//            </div>
//        ` 
//        resolve(9090)
//  })
//  })}
//  let p5= async()=>{ return new Promise((resolve,reject)=>{
//   let responsee= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+CITIES[4], options)
   
//    responsee.then((response)=>{
//      return response.json()
//  }).then((response)=>{
//      console.log(response)
//      let div=document.getElementById('add');
//              div.innerHTML+=`<div class="card ab" style="width: 18rem;">
//              <!-- <img src="" class="card-img-top" alt="IMAGE HERE"> -->
//              <div class="card-body">
//                <h5 class="card-title">${CITIES[4]}</h5>
//                <p class="card-text">HUMIDITY:${response.humidity}</p>
//                <p class="card-text">TEMPERATURE:${response.temp}</p> 
//                <p class="card-text">MIN-TEMPERATURE:${response.min_temp}</p>
//                <p class="card-text">MAX-TEMPERATURE:${response.max_temp}</p>
//                <p class="card-text">WIND SPEED:${response.wind_speed}</p>
//              </div>
//            </div>
//        ` 
//        resolve(9090)
//  })
//  })}    
  let run=async()=>{
  console.time("run")
                let a1= p1(CITIES[0])   
        let a2= p1(CITIES[1])
        let a3= p1(CITIES[2])
        let a4= p1(CITIES[3])
        let a5= p1(CITIES[4])
        let a6= p1(CITIES[5])   
        let a7= p1(CITIES[6])
        let a8= p1(CITIES[7])
        let a9= p1(CITIES[8])
        let a10= p1(CITIES[9])
        let final=await Promise.all([a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])
        console.log(final)
console.timeEnd("run")
      }
        let z= run()

//  p1.then((value)=>{
//     console.log(value)
//  })

