function calcVegosszeg(){
    let Alapar = 1000;
    let mennyiseg = document.querySelector("input[name='mennyiseg']");
    let Vegosszeg = parseInt(mennyiseg.value)*Alapar;
    alert:("Fizetendő: " + Vegosszeg + "Ft");
}

