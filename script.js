
//document.querySelectorAll(".text").style.color="blue";
 //document.body.getElementsByClassName('text').style.color="blue";
// const button=document.getElementById("changeTextButton");
// button.addEventListener('button',function(){
//     const element=document.getElementById("header");
//     element.textContent="text changed";
// })



const button=document.getElementById("changeTextButton");
const heading=document.getElementById("header");
const para = document.getElementsByClassName("text");
const items=document.getElementsByClassName("list-item");
button.addEventListener('click',()=>{
    
    // 1) Change the text of the heading

    heading.textContent="Text changed";

// 2) Change the text color of all paragraphs with the class text to blue.

    for(let p=0;p<para.length;p++){
        para[p].style.color="blue";
    }

//    3) Log the text content of each li element to the console.
// 4) Change the background color of the first li element to yellow.

    for(let i=0;i<items.length;i++){
        console.log(items[i].textContent);
        items[i].style.color="green";
    }
    
    // 5) Change the text color of all li elements to green. 

    document.querySelector(".list-item").style.backgroundColor="yellow";

})