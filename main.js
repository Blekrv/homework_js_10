let $firstColumn = document.querySelectorAll("table tr td:nth-of-type(1)"),
  $input = document.querySelectorAll("input"),
  $btn = document.querySelectorAll("button"),
  $form = document.querySelectorAll(".answer"),
  $res = document.querySelectorAll("table tr td div section:nth-of-type(2)");
const answ = [
  "лелека",
  "ставок",
  "чайник",
  "торт",
  "вогонь",
  "цукерка",
  "зошит",
  "вікно",
  "хліб",
  "свічка",
];
for (let i = 0; i < $btn.length; i++) {
  $btn[i].addEventListener("click", () => {
    $form[i].classList.add("hide");
    ($input[i].value.trim().toLowerCase() === answ[i]) ? trueA(i) : falseA(i)
  });
}
function trueA (i){
  $firstColumn[i].style.backgroundColor = "green";
  $res[i].classList.add("show", "true");
}
function falseA (i){
  $firstColumn[i].style.backgroundColor = "red";
  $res[i].classList.add("show", "false");
}