function revealHistory(){
    let realIntro = document.getElementsByClassName("real-intro")
    let listOfPage = document.getElementsByClassName("list-of-page") 

    for (let element of realIntro) {
        element.style.filter = "none";
    }

    for (let element of listOfPage) {
        element.style.filter = "none";
    }
}


function change (element) {
  var style = element.style;
  style.color = "#fff"
}

function changeToBlack(element) {
  element.style.color = "#fb9902";
}

function submitQuiz() {
  var score = 0;
  var totalQuestions = 10;

  // Question 1
  if (document.querySelector('input[name="q1"]:checked')?.value === "Paleolithic Era") {
      score++;
  }
  // Question 2
  if (document.querySelector('input[name="q2"]:checked')?.value === "Horseback Riding and Metalworking") {
      score++;
  }
  // Question 3
  if (document.querySelector('input[name="q3"]:checked')?.value === "Turkestan") {
      score++;
  }
  // Question 4
  if (document.querySelector('input[name="q4"]:checked')?.value === "13th Century") {
    score++;
  }
  // Question 5
  if (document.querySelector('input[name="q5"]:checked')?.value === "Kenesary Kasymov") {
    score++;
  }
  // Question 6
  if (document.querySelector('input[name="q6"]:checked')?.value === "The Russian Revolutions") {
    score++;
  }
  // Question 7
  if (document.querySelector('input[name="q7"]:checked')?.value === "Devastating Famine") {
    score++;
  }
  // Question 8
  if (document.querySelector('input[name="q8"]:checked')?.value === "Yurt") {
    score++;
  }
  // Question 9
  if (document.querySelector('input[name="q9"]:checked')?.value === "Tribal") {
    score++;
  }
  // Question 10
  if (document.querySelector('input[name="q10"]:checked')?.value === "Uly Zhuz") {
    score++;
  }

  var result = document.getElementById("result");
  result.innerHTML = "<h2>Your score: " + score + "/" + totalQuestions + "</h2>";
}


// ANIMATION
let sections = document.querySelectorAll('section')
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop -180
    let height = sec.offsetHeight

    if(top >= offset && top < offset + height) {
      sec.classList.add('show-animate')
    }
    else {
      sec.classList.remove('show-animate')
    }
  })
}