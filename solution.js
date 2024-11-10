// let usd = 9;
// let madr = 1/9;
// let eur = 10.80:

function convertir() {
  let mt = document.getElementById("montant").value;
  let choix = document.getElementById("conversion").value;
  let choix1 = document.getElementById("1").value;
  let choix2 = document.getElementById("2").value;
  let choix3 = document.getElementById("3").value;
  let choix4 = document.getElementById("4").value;
  let res = document.getElementById("res");
  let v;
  switch (choix) {
    case choix1:
      v = mt * 9;
      res.innerHTML = Number(v);
      break;

    case choix2:
      v = mt / 9;
      res.innerHTML = Number(v);
      break;

    case choix3:
      v = mt * 10.8;
      res.innerHTML = Number(v);
      break;

    case choix4:
      v = mt / 10.8;
      res.innerHTML = Number(v);
      break;
  }
}
