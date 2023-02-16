
const images=$(".wraper .images img");
//initiat slider
var sliderid=setInterval(slide,1000);
var count=0;
//slider function that loops for each element
function slide(){
    images.css({"z-index":0});
    if(count>images.length-1){
        count=0
    }
    images.eq(count++).css({"z-index":1})
}
console.log(sliderid);

var toggle=true;
// create toggle button
$(".stop").on("click",function(){
    console.log("click");
    if(toggle){ //clear if running
        clearInterval(sliderid)
        toggle=false;
    }else{//continue if stopped
        sliderid=setInterval(slide,1000);
        toggle=true;
    }
    console.log(sliderid);
})


/* second task */

//toggle slide up and down
$(".card img").on("click",function(){
    console.log("asdasd");
    $(this).closest(".card").children("p").slideToggle()
})