function table(){

    let table= document.getElementById('table').value; 
     
let showResult;
document.getElementById('h1').innerHTML="";
    for (  let x=1; x<=100; x++)
     {
        showResult =`${table} x ${x} = ${table*x}`;
       let result="<h3>"+showResult+"</h3>" ;
       document.getElementById('h1').innerHTML+=result;  
      
    }
}