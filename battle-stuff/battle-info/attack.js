function atk() {
  if (pos == los){
    castmon2Hp -= (castmonAtk - castmon2Def);
    if(castmon2Hp >= 0){
      alert("you win")
      window.location = '../index.html';
    }
  }
}
function atk2() {
  if (pos == los){
    castmonHp -= (castmon2Atk - castmonDef);
    if(castmon2Hp >= 0){
      alert("you lose")
      window.location = '../index.html';
    }
  }
}
