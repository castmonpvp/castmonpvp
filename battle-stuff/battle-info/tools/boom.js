function boomo() {
  feld[pos + 10] = 'f'
  feld[pos + 9] = 'f'
  feld[pos + 11] = 'f'
  feld[pos + 1] = 'f'
  feld[pos - 10] = 'f'
  feld[pos - 11] = 'f'
  feld[pos - 12] = 'f'
  feld[pos - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "white"
    }
  }
}
function boom() {
  feld[los + 10] = 'f'
  feld[los + 9] = 'f'
  feld[los + 11] = 'f'
  feld[los + 1] = 'f'
  feld[los - 10] = 'f'
  feld[los - 11] = 'f'
  feld[los - 12] = 'f'
  feld[los - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "white"
    }
  }
}
