let randomNumber1=Math.floor(Math.random()*6)+1;

let randomDiceImage = "dice"+randomNumber1+".png";

let randomImageSource = "images/" + randomDiceImage;

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomImageSource2 ="images/dice"+randomNumber2+".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);