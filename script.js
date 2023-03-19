function scrollToTop(){
    window.scrollTo(0,0);

}

// CHANGE COLOR THEME

function changeStyle(){
  var element = document.getElementById("home");
  element.style.backgroundColor = "#00FF00";
}

function changeColor(color) { 
  var innerDiv = document.querySelector("#home");
  var titles = document.querySelectorAll("h2");
  var cards = document.querySelectorAll(".card");
  var rounds = document.querySelectorAll(".sale");
  var signs = document.querySelectorAll(".symbol");
  var numbers = document.querySelectorAll(".amount");
  var buttons = document.querySelectorAll(".priceButton");
  
  innerDiv.style.background = color; 

  titles.forEach(title => {
    title.style.color = color;
  });

  cards.forEach(card => {
    card.style.background = color;
    card.style.color = "white";
  });

  rounds.forEach( round=> {
    round.style.background = color;
    round.style.color = "white";
    round.style.border= color;
  });
  
  signs.forEach(sign => {
    sign.style.color = color;
  });

  numbers.forEach(number => {
    number.style.color = color;
  });

  buttons.forEach( button=> {
    button.style.background = color;
    button.style.color = "white";
    button.style.border= color;
  }); 
}
