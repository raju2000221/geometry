document.getElementById('btn1').addEventListener('click',function(){
    const k = 'Triangle'
     const firstvalue = getElementValueById('value1');
     const secoundvalue = getElementValueById('value2');
     const areadefault = 0.5;
     const Triangle = areadefault * firstvalue * secoundvalue ;
     showResult(Triangle,k)
})
document.getElementById('btn2').addEventListener('click',function(){
    const k = 'Rectangle'
     const firstvalu = getElementValueById('value3');
     console.log(firstvalu)
     const secoundvalue = getElementValueById('value4');
     console.log(secoundvalue)
     const Rectangle =  firstvalu * secoundvalue ;
     showResult(Rectangle,k)
})
document.getElementById('btn3').addEventListener('click',function(){
    const k = 'Parallelogram'
     const firstvalue = getElementValueById('value5');
     const secoundvalue = getElementValueById('value6');
     const Parallelogram = firstvalue * secoundvalue ;
     showResult(Parallelogram,k)
})
document.getElementById('btn4').addEventListener('click',function(){
    const k = 'Rhombus'
     const firstvalue = getElementValueById('value7');
     const secoundvalue = getElementValueById('value8');
     const areadefault = 0.5;
     const Rhombus = areadefault * firstvalue * secoundvalue ;
     showResult(Rhombus,k) 
})
document.getElementById('btn5').addEventListener('click',function(){
     const k = 'Pentagon'
     const firstvalue = getElementValueById('value9');
     const secoundvalue = getElementValueById('value10');
     const areadefault = 0.5;
     const Pentagon = areadefault * firstvalue * secoundvalue; 
     showResult(Pentagon,k)
})
document.getElementById('btn6').addEventListener('click',function(){
    const k = 'Ellipse'
     const firstvalue = getElementValueById('value11');
     const secoundvalue = getElementValueById('value12');
     const pi = 3.14;
     const Ellipse = pi * firstvalue * secoundvalue;
     console.log(Ellipse.toFixed(2)); 
    showResult(Ellipse,k)
   
})

