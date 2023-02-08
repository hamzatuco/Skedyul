
/* Rasporedivanje casova konstante */

class Raspored {
  constructor(profIDD, profesor, predmet, brojCasova, kabinet){
      this.profIDD = profIDD;
      this.profesor = profesor;
      this.predmet = predmet;
      this.brojCasova = brojCasova;
      this.kabinet = kabinet;
  }
};
let sedmicniCasovi = 0;
document.querySelector(".main-btn").style.display = "none";
document.getElementById("okvir").style.display="none";
let lista = [
];
let dani = [
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""],
  ["", "", "", "", "","",""]
];
let profIDD = 1;
let profInput = document.querySelector(".proff");
let predmet = document.querySelector(".predmet");
let brojInput = document.querySelector(".broj");
let kabinet = document.querySelector(".kabinet");

/* Rasporedivanje casova algoritam */
document.querySelector("#dodajProfRas").addEventListener("click", e=>{
    if(profInput.value !="" && predmet.value!="" && brojInput.value!="" && kabinet.value!=""){
        sedmicniCasovi+=parseInt(brojInput.value);
        if(sedmicniCasovi>=30 && sedmicniCasovi<=35) document.querySelector(".main-btn").style.display = "block";
        else document.querySelector(".main-btn").style.display = "none";
        lista.push(new Raspored(profIDD, profInput.value, predmet.value, brojInput.value, kabinet.value));
        document.querySelector(".display").innerHTML += `<div class="singleDisplay" >
        <h3>${profIDD}</h3> 
        <h3>${profInput.value}</h3> 
        <h3>${predmet.value}</h3> 
        <h3>${brojInput.value}</h3>
        <h3>${kabinet.value}</h3>
        </div>`;
        profIDD++;
        profInput.value = "";
        predmet.value = "";
        brojInput.value = "";
        kabinet.value = "";
    }
    else alert("Popunite sva polja")
});
function kraj(){
    document.querySelector(".RASPORED").style.display = "none";
    document.querySelector(".skloniOvo").style.display = "none";
    document.querySelector(".raspored").style.display = "flex";
    document.querySelector("#Dodaj-Raspored-Profesor").disabled = true;
  let kombinacije = ["00","01","02","03","04","05","06","10","11","12","13","14","15","16", "20","21","22","23","24","25","26","30","31","32","33","34","35", "36","40","41","42","43","44","45","46"]; 
  lista.forEach(e=>{
      let uneseno = 0;
      if(e.brojCasova>2){
          let split1 = e.brojCasova-2;
          while(uneseno<split1){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              if(dani[dan][cas]==""){
              dani[dan][cas] = e.profesor + " " + e.predmet;
              kombinacije.splice(tacanCas, 1);
              uneseno++;
          }
          }
          uneseno=0;
          
          let split2 = 2;
          while(uneseno<split2){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              console.log(dani[dan][cas]);
              if(dani[dan][cas]==""){dani[dan][cas] = e.profesor + " " + e.predmet;
                  kombinacije.splice(tacanCas, 1);
                  uneseno++;}
          }
              uneseno=0;
      }
      else if (e.brojCasova==2){
          while(uneseno != e.brojCasova){
              let tacanCas = Math.floor(Math.random() * kombinacije.length);
              let dan = parseInt(kombinacije[tacanCas].charAt(0));
              let cas = parseInt(kombinacije[tacanCas].charAt(1));
              if(dani[dan][cas]==""){dani[dan][cas] = e.profesor + " " + e.predmet;
                  kombinacije.splice(tacanCas, 1);
                  uneseno++;}
                  }
              uneseno=0;
      }
      else{
          let kraj = false;
          for(let i=0;i<5;i++){
              for(let j = 0;j<7;j++){
                  if(dani[i][j] === ""){
                      dani[i][j] = e.profesor + " " + e.predmet;
                      let index = kombinacije.indexOf(parseInt(i+j));
                      kombinacije.splice(index, 1);
                      kraj = true;
                      if(kraj == true) break;
                  }
              }
              if(kraj == true) break;
          }
      };
  });
  console.log(dani);
  let cas = 1;
    for(let i=0;i<5;i++){
        for(let j=0;j<7;j++){
            document.querySelector(`.c${cas}`).textContent=dani[i][j];
            cas++;
        }
    }
    cas=1;
}

/* Prije i poslije algoritma naredbe */

document.querySelector("#Dodaj-Raspored-Profesor").addEventListener("click", ()=>{
    if(document.querySelector(".RASPORED").style.display == "none") document.querySelector(".RASPORED").style.display = "flex";
    else document.querySelector(".RASPORED").style.display = "none";
});

/*Dodavanje profesora konstante*/ 
let profID = 4;
const profIme = document.querySelector("#profIme");
const profNorma = document.querySelector("#profNorma");
const dodajProf = document.querySelector("#dodajProf");

/*Dodavanje profesora*/ 
dodajProf.addEventListener("click", e=>{
   if(profIme.value!= "" && profNorma.value){
    document.querySelector("#sekcija3 .Uneseno").innerHTML += `<div style ="margin-top: 10px;" class = "dodani-profesori">
    <h1 style = "margin-top: 10px;">ID:  ${profID}</h1>
    <div class = "crta"></div>
    <h1 style = "margin-top: 10px;">Ime: ${profIme.value}</h1>
    <div class = "crta"></div>
    <h1 style = "margin-top: 10px;">Broj časova u normi: ${profNorma.value}</h1>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
    </div>`;
    profID++;
    profIme.value = "";
    profNorma.value = "";
   }
   else alert("popunite sva potrebna polja");
});

/*Dodavanje kabineta konstante*/ 
const kabinetIme = document.querySelector("#kabinetIme");
const dodajKab = document.querySelector("#dodajKab");
let nekiID = 7;

/*Dodavanje kabineta*/ 
dodajKab.addEventListener("click", e=>{
   if(kabinetIme.value!= ""  && nekiID%2==1 ){
    document.querySelector("#sekcija4 .lijeviDiv").innerHTML += `<div class = "dodani-kabineti">
    <h2 style = "margin-top: 10px;">ID: ${nekiID}</h2>
    <div class = "crta"></div>
    <h2 style = "margin-top: 10px;">Naziv: ${kabinetIme.value}</h2>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
    </div>`;
    kabinetIme.value = "";
    nekiID++;
   }
   else if(kabinetIme.value!= "" && nekiID%2==0 ){
    document.querySelector("#sekcija4 .desniDiv").innerHTML += `<div class = "dodani-kabineti" style="margin-left: 20px;">
    <h2 style = "margin-top: 10px;">ID: ${nekiID}</h2>
    <div class = "crta"></div>
    <h2 style = "margin-top: 10px;">Naziv: ${kabinetIme.value}</h2>
    <div class = "crta"></div>
    <button class = "Ukloni">Ukloni</button>
  </div>`;
    kabinetIme.value = "";
    nekiID++;
   }
   else alert("popunite sva potrebna polja");
});


/* Ukloni button*/
document.querySelectorAll(".Ukloni").forEach(e=>{
e.addEventListener("click", ()=>{
    console.log(e);
    e.parentElement.remove();
})
});

/* Prva druga smjena */
let vremena = document.querySelectorAll(".vrijeme");

  document.querySelector(".switch-button-checkbox").addEventListener("change", e=>{
  vremena.forEach(e=>{
    console.log("gas");
    if(e.textContent=="8:00") e.textContent="14:00";
    else if(e.textContent=="8:50") e.textContent="14:50";
    else if(e.textContent=="9:40") e.textContent="15:40";
    else if(e.textContent=="10:40") e.textContent="16:40";
    else if(e.textContent=="11:30") e.textContent="17:30";
    else if(e.textContent=="12:20") e.textContent="18:20";
    else if(e.textContent=="14:00") e.textContent="8:00";
    else if(e.textContent=="14:50") e.textContent="8:50";
    else if(e.textContent=="15:40") e.textContent="9:40";
    else if(e.textContent=="16:40") e.textContent="10:40";
    else if(e.textContent=="17:30") e.textContent="11:30";
    else if(e.textContent=="18:20") e.textContent="12:20";

  })
})