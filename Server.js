const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));

//Sessije
app.use(session({
  secret : 'itreconnect',
  resave : true,
  saveUninitialized : true
}));

//Konekcija na bazu
const connection = mysql.createConnection({
    host:'116.203.192.158',
    user:'root',
    password:'Travnik55$',
    database:'itreboot'
});

//Rute
app.get('/usmjeri-stranicu', (req, res) => {
  res.sendFile(`${__dirname}/Views/UsmjeriAdmin.html`);
});

app.get('/poruka-admin', (req, res) => {
  res.sendFile(`${__dirname}/Views/PorukaAdmin.html`);
});

app.get('/usmjeri-stranicuSkola', (req, res) => {
  res.sendFile(`${__dirname}/Views/UsmjeriSkola.html`);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/Views/Odabir.html`);
  });

app.get('/admin-login', (req, res) => {
  res.sendFile(`${__dirname}/Views/AdminLogin.html`);
});

app.get('/pocetna-admin', (req, res) => {
  res.sendFile(`${__dirname}/Views/PocetnaAdmin.html`);
});

app.get('/pocetna-skola', (req, res) => {
  res.sendFile(`${__dirname}/Views/PocetnaSkola.html`);
});


app.get('/skola-login', (req, res) => {
  res.sendFile(`${__dirname}/Views/SkolaLogin.html`);
});

app.get('/adminlogin', (req, res) => {
  res.sendFile('/home/farukb/Desktop/Reconnect/Views/AdminLogin.html');
});





//Prijava za admina
app.post('/adminlogin', function(request, response) {
    const  user = request.body.username;
    const pass = request.body.password;

	  if (user && pass) {
      const sql = `SELECT * FROM adminlogin WHERE username = "${user}" AND password = "${pass}"`;
      
      connection.query(sql, function(error, results) {
        if (error) throw error;
        if (results.length > 0) {
        
          request.session.loggedin = true;
          request.session.username = user;
          
        
            response.redirect('/usmjeri-stranicu');
        
        } else {
          response.send('Netačan username ili password');
          

        }			
        response.end();
      });
	  } 
    else {
      response.send('Molimo vas unesite oba polja');
      response.end();
	  }
});

//Prijava za skolu
app.post('/skolalogin', function(request, response) {
  const  user = request.body.susername;
  const pass = request.body.spassword;

  if (user && pass) {
    const sql = `SELECT * FROM skolalogin WHERE susername = "${user}" AND spassword = "${pass}"`;
    
    connection.query(sql, function(error, results) {
      if (error) throw error;
      if (results.length > 0) {
      
        request.session.loggedin = true;
        request.session.username = user;

        response.redirect('/usmjeri-stranicuSkola');
      } else {
        response.send('Netačan username ili password');
      }			
      response.end();
    });
  } 
  else {
    response.send('Molimo vas unesite oba polja');
    response.end();
  }
});
  

app.listen(3000, () => {
  console.log('Server na portu 3000');
});

