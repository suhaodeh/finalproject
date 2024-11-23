
/**clock application */

function updateClock(){
    var now =new Date();
    let hours=now.getHours();
   let minutes = now.getMinutes();
   let seconds= now.getSeconds();
   let session=document.getElementById('session');
  if(hours > 12){
    session.textContent='pm'
  }else{
    session.textContent='am'
  }
    
     document.getElementById("hours").textContent=hours.toString().padStart(2,'0');
     document.getElementById("minutes").textContent=minutes.toString().padStart(2,'0');
     document.getElementById("seconds").textContent=seconds.toString().padStart(2,'0');
    
    console.log(session) 
}

setInterval(updateClock , 1000);


/**booking form */
 
function removeclass(){
document.querySelector(".mainform").classList.remove("d-none")

}
function addclass(){
  document.querySelector(".mainform").classList.add("d-none")
}

document.querySelector(".OPEN").onclick = removeclass;
document.querySelector(".confirm").onclick = addclass;


/**BMI calculater */

var bmiform =document.querySelector(".bmi-form");
var weight=document.querySelector("#Weight").value;
var height=document.querySelector("#height").value;
const result=document.querySelector(".result");


bmiform.onsubmit = function(e){
 e.preventDefault();
 var bmiform =document.querySelector(".bmi-form");
var weight=document.querySelector("#Weight").value;
var height=document.querySelector("#height").value;
const result=document.querySelector(".result");

var BMI=(weight/((height/100)*(height/100))).toFixed(2);
if(BMI<18.5)
  result.innerHTML=`under weight:<span>${BMI}</span>`;
else if(BMI>18.6 && BMI<24.9)
  result.innerHTML=`Normal WEIGHT:<span> ${BMI} </span>`

else if(BMI>25)
  result.innerHTML=`Over weight:<span> ${BMI} </span>`

}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
slidespreview:3,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



