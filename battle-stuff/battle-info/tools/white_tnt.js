function wboom() {
  cords[pos + 10] = 'f'
  cords[pos + 9] = 'f'
  cords[pos + 11] = 'f'
  cords[pos + 1] = 'f'
  cords[pos - 10] = 'f'
  cords[pos - 11] = 'f'
  cords[pos - 12] = 'f'
  cords[pos - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "white"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "black"
    }
  }
}
function wboomo() {
  cords[los + 10] = 'f'
  cords[los + 9] = 'f'
  cords[los + 11] = 'f'
  cords[los + 1] = 'f'
  cords[los - 10] = 'f'
  cords[los - 11] = 'f'
  cords[los - 12] = 'f'
  cords[los - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "white"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "black"
    }
  }
}
