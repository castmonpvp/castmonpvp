function trapo() {
  feld[los + 10] = 't'
  feld[los + 9] = 't'
  feld[los + 11] = 't'
  feld[los + 1] = 't'
  feld[los - 10] = 't'
  feld[los - 11] = 't'
  feld[los - 12] = 't'
  feld[los - 1] = 't'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i+1].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i+1].style.fill = "white"
    }
  }
}
function trap() {
  feld[pos + 10] = 't'
  feld[pos + 9] = 't'
  feld[pos + 11] = 't'
  feld[pos + 1] = 't'
  feld[pos - 10] = 't'
  feld[pos - 11] = 't'
  feld[pos - 12] = 't'
  feld[pos - 1] = 't'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "white"
    }
  }
}
