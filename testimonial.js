const people=[
    {
       pic:"c.png",
        name:"STELLA STEPHANIE",
        testimony:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores incidunt impedit obcaecati omnis molestiae. Quis nesciunt pariatur quasi, harum cupiditate officia velit deleniti officiis, dolorum iure quae vero magni quo.",
        date:"22nd May"

    },
    {
        pic:"c.png",
         name:"SHALLOM JOY",
         testimony:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores incidunt impedit obcaecati omnis molestiae. Quis nesciunt pariatur quasi, harum cupiditate officia velit deleniti officiis, dolorum iure quae vero magni quo.",
         date:"1st April"
 
     },
     {
        pic:"c.png",
         name:"CAREN OMITO",
         testimony:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores incidunt impedit obcaecati omnis molestiae. Quis nesciunt pariatur quasi, harum cupiditate officia velit deleniti officiis, dolorum iure quae vero magni quo.",
         date:"22nd December"
 
     },
     {
        pic:"c.png",
         name:"REGINA MAKENA",
         testimony:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores incidunt impedit obcaecati omnis molestiae. Quis nesciunt pariatur quasi, harum cupiditate officia velit deleniti officiis, dolorum iure quae vero magni quo.",
         date:"24th january"
 
     },
];
function creation(data){
    return`<div id="container">
    <img src="${data.pic}"/>
    <h2>${data.name}</h2>
    <P> ${data.testimony}</p>
    <date id="date"> written on${data.date}</date>
    </div>
    `;
};
let num=0;
document.getElementById("outercont").innerHTML=creation(people[num]);
function forward(){
  num++;
  if(num>=people.length){
    num=0;
  }
  document.getElementById("outercont").innerHTML=creation(people[num]);
update()};
  
  function previous(){
    num--;
    if (num<0){
        num=people.length-1;
    }
    document.getElementById("outercont").innerHTML=creation(people[num])
    ; update()
  };
  function update(){
    
   let scccs=`<nav>
    <button onclick="forward()">next</button>
    <button onclick="previous()"> previous</button>
    </nav>`
    document.getElementById("container").innerHTML +=scccs;
  };
  update();
 
  
