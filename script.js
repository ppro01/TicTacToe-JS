let turnTxt = document.querySelector("#turn");
let square = document.querySelector(".Square");
let cover = document.querySelector(".cover");
let position = document.querySelector(".ContentWrapper");
let vez = 1;
let seq = 0;
square.addEventListener("click", (e) => {
  gameFunction(e);
});
function gameFunction(e) {
  var pos = document.querySelectorAll(".opc");
  if (vez % 2 != 0 && e.target.innerText == "") {
    e.target.innerText = "X";
    turnTxt.innerText = "É a vez do O";
    vez++;
  } else if (vez % 2 == 0 && e.target.innerText == "") {
    e.target.innerText = "O";
    turnTxt.innerText = "É a vez do X";
    vez++;
  }

  if (vez > 5) {
    if (
      pos[0].innerText == pos[1].innerText &&
      pos[1].innerText == pos[2].innerText &&
      pos[0].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[3].innerText == pos[4].innerText &&
      pos[4].innerText == pos[5].innerText &&
      pos[3].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[6].innerText == pos[7].innerText &&
      pos[7].innerText == pos[8].innerText &&
      pos[6].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[0].innerText == pos[4].innerText &&
      pos[4].innerText == pos[8].innerText &&
      pos[0].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[2].innerText == pos[4].innerText &&
      pos[4].innerText == pos[6].innerText &&
      pos[2].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[0].innerText == pos[3].innerText &&
      pos[3].innerText == pos[6].innerText &&
      pos[0].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[1].innerText == pos[4].innerText &&
      pos[4].innerText == pos[7].innerText &&
      pos[1].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (
      pos[2].innerText == pos[5].innerText &&
      pos[5].innerText == pos[8].innerText &&
      pos[2].innerText != ""
    ) {
      seq = 1;
      verifyVictory();
    } else if (vez == 10) {
      verifyVictory();
    }
  }
}
function verifyVictory() {
  if (seq == 0) {
    turnTxt.innerText = "Deu velha!";
  } else if (vez % 2 == 0 && seq == 1) {
    turnTxt.innerText = "X venceu";
  } else if (vez % 2 != 0 && seq == 1) {
    turnTxt.innerText = "O venceu";
  }
  criarBotao();
  cover.classList.add("active");
}

function criarBotao() {
  let botao = document.createElement("button");
  botao.classList.add("btn");
  botao.innerText = "Recomeçar";
  botao.addEventListener("click", (e) => {
    apagarBotao(e);
  });
  position.appendChild(botao);
}

function apagarBotao(e) {
  vez = 1;
  seq = 0;
  var pos = document.querySelectorAll(".opc");
  pos.forEach((element) => {
    element.innerText = "";
  });
  turnTxt.innerText = "É a vez do X";
  position.removeChild(e.target);
  cover.classList.remove("active");
}
