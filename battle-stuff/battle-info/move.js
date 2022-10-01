var x2 = 0
var y2 = 0
var los = 1
var fin2 = 1
var i = los

function ai_move2() {
  if(feld[los+1] == "f" && los%10 <  fin2%10  && los%10 != 0){
    feld[los]="d"
    los+=1;

    x2 += 10
    document.getElementById("pl2").setAttribute("x2",x2+"%")

  }else if(feld[los-10] == "f" && los%10 == fin2%10  && los2 > 10){
    feld[los]="d"
    los-=10;

    y2 -= 10
    document.getElementById("pl2").setAttribute("y2",y2+"%")

  }else if(feld[los-1] == "f" && los%10 > fin2%10  && los%10 != 1 ){
    feld[los]="d"
    los-=1;

    x2 -= 10
    document.getElementById("pl2").setAttribute("x2",x2+"%")

  }else if(feld[los+10] == "f" && los%10 == fin2%10  && los < 90){
    feld[los]="d"
    los+=10;

    y2 += 10
    document.getElementById("pl2").setAttribute("y2",y2+"%")

  }else if(feld[los+1] == "f"  && los%10 != 0){
    feld[los]="d"
    los+=1;

    x2 += 10
    document.getElementById("pl2").setAttribute("x2",x2+"%")

  }else if(feld[los-11] == "f" && los > 10){
    feld[los]="d"
    los-=11;

    y2 -= 10
    document.getElementById("pl2").setAttribute("y2",y2+"%")

  }else if(feld[los-1] == "f" && los%10 != 1){
    feld[los]="d"
    los-=1;

    x2 -= 10
    document.getElementById("pl2").setAttribute("x2",x2+"%")

  }else if(feld[los+10] == "f" && los < 90){
    feld[los]="d"
    los+=10;

    y2 += 10
    document.getElementById("pl2").setAttribute("y2",y2+"%")

  }


}
setInterval(ai_move,500)








//     if(d==1){document.query2Selector('#svg-temp-obj2').sty2le.transform= 'rotate(0deg)';
//     y2-=10
//   document.getElementById("pl2").setAttribute("y2",y2+"%")
// }else if(d==3){document.query2Selector('#svg-temp-obj2').sty2le.transform= 'rotate(180deg)'
//     y2+=10
//     x2+=10
//     document.getElementById("pl2").setAttribute("y2",y2+"%")
//     document.getElementById("pl2").setAttribute("x2",x2+"%")
//   }else if(d==4){
//       document.query2Selector('#svg-temp-obj2').sty2le.transform= 'rotate(270deg)'
//     }



setInterval(function() {
atk2()

},500)
setInterval(function() {
fin2 = Math.floor(Math.random() * 99)+1

},1000)
