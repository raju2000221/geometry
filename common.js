function getElementValueById(elementValue){
    const val = document.getElementById(elementValue);
    const valu = val.value;
    const valInt = parseInt(valu);
    val.value = '';
    if(isNaN(valu)){
        alert('Please Eneter Number')
    }
    return valInt;

}

let counter = 0;
function showResult(R,k){
        counter++;
        const ele = document.getElementById('result');
        const p = document.createElement ('p');
        const btn = document.createElement('button')
         btn.style.background ='Tomato';
         btn.style.border ='none';
         btn.style.padding ='15px;'
         btn.style.color ='white'
         btn.style.borderRadius = "5px"
        

         

        const cmsq = 'cm'+'&sup2;'
        p.innerHTML = counter+'.'+'&nbsp;&nbsp;'+k+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+R+ cmsq+'&nbsp;&nbsp;&nbsp;&nbsp;';
        btn.innerHTML = 'Remove'
        btn.onclick= function(){
            p.remove();
        }
         ele.appendChild(p ); 
         p.appendChild(btn ); 
         
        
         

}
function valueShow(v,s){
        
        const ele = document.getElementById('vs');
        ele.innerText= '';
        const p = document.createElement ('p');
        const cmsq = 'cm'+'&sup2;'
        p.innerHTML = 'Area(A)'+'&nbsp;'+'='+'&nbsp;'+v+'&nbsp;'+ 'x'+'&nbsp;'+s;
         ele.appendChild(p); 
        
         

}
const cards = document.querySelectorAll('.cs');

cards.forEach(function(car){
     car.addEventListener('mouseenter',function(){
        const randomColor = getcolor();
        car.style.background = randomColor;
    })
})

function getcolor(){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
