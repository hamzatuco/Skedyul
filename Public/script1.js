

/*Kod za prikazivanje dodatnih informacija o školama */

/*Dugmadi*/
const dugmeTravnik = document.getElementById('dugmeTravnik');
const dugmeTravnik1 = document.getElementById('dugmeTravnik1');
const dugmeVakuf = document.getElementById('dugmeVakuf');

const zatvoriTravnik = document.getElementById('zatvoriTravnik');
const zatvoriTravnik1 = document.getElementById('zatvoriTravnik1');
const zatvoriVakuf = document.getElementById('zatvoriVakuf');

/*Div tagovi*/
const viseTravnik = document.getElementById('viseTravnik');
const viseTravnik1 = document.getElementById('viseTravnik1');
const viseVakuf = document.getElementById('viseVakuf');


const DodajProf = document.getElementById('Dodaj-Raspored-Profesor');
const DodajKab = document.getElementById('Dodaj-Raspored-Profesor');

/*Prikazi*/

dugmeTravnik.onclick = function () {viseTravnik.style.display = "block";};
dugmeTravnik1.onclick = function () {viseTravnik1.style.display = "block";};
dugmeVakuf.onclick = function () {viseVakuf.style.display = "block";};

zatvoriTravnik.onclick = function () {viseTravnik.style.display = "none";};
zatvoriTravnik1.onclick = function () {viseTravnik1.style.display = "none";};
zatvoriVakuf.onclick = function () {viseVakuf.style.display = "none";};


