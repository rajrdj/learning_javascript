// document.getElementById('owl').onclick = function(){
//     alert("owl clicked" ) } 

    document.getElementById('owl').addEventListener('click', function(e){
        console.log(e);
    },false)
    //TYPEOF eVENTS , TIMESRAMP,defualtPrevented , stopPropagation,toElecment ,srcElement ,current Target
    //clent x client y , screenx, scrreny ,alat key ctrl key shifr key key code 

    //addEventlistener
    //removeEventlistener

    //attachEvent(_
  //jquer y -on

  document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked ");
    e.stopPropagation()
},false)

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked ");
},false)
  

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    if (e.target.tagName==="IMG") {
        console.log(e.target.id);
        
    }
    let removeit = e.target.parentNode;
   // removeit.parentNode.removeChild(removeit);
    removeit.remove()
})



