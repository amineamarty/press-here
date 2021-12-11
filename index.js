let mybtn = document.querySelector("button");
let Myimg = document.querySelector("img");
let myimg2 = document.querySelector("[alt='image']");
let mybtn2 = document.getElementsByClassName("btn");
mybtn.onclick = () =>{
    Myimg.style.cssText = "display:none;transition: 0.6s;";
    mybtn2[0].style.cssText = "display: inline-block;";
    mybtn.style.cssText = "display:none;";
}
mybtn2[0].onclick = () =>{
    myimg2.style.cssText = "display: inline-block;";
}