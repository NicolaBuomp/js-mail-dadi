var container = document.getElementById('inputEmail');

var emails = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

buttonCheck.addEventListener('click',
    function() {

        var userFound = false;
        var user = document.getElementById('email').value;

        for (var i = 0; i < emails.length && userFound === false; i++) {


            if (emails[i] == user) {
                userFound = true;
            }
        }

        if (userFound == true) {
            document.getElementById('accesso').innerHTML = 'Accesso Effettuato!';
            container.className = 'hidden';
            document.getElementById('accesso').className = 'greenColor';



        } else {
            document.getElementById('accesso').innerHTML = 'Accesso Negato!';
            document.getElementById('accesso').className = 'redColor'


        }

    }
)

// Gioco dei dadi
buttonGame.addEventListener('click',

    function() {

        var giocatoreUno = document.getElementById('giocatoreUno');
        var giocatoreDue = document.getElementById('giocatoreDue');


        giocatoreUno = Math.floor(Math.random() * 6) + 1;
        document.getElementById('giocatoreUno').innerHTML = giocatoreUno + ' -';

        giocatoreDue = Math.floor(Math.random() * 6) + 1;
        document.getElementById('giocatoreDue').innerHTML = giocatoreDue;


        if (giocatoreUno > giocatoreDue) {
            document.getElementById('vincitore').innerHTML = 'Complimenti, HAI VINTO!';
            document.getElementById('giocatoreUno').className = 'greenColor';
            document.getElementById('giocatoreDue').className = 'redColor';


        } else if (giocatoreUno == giocatoreDue) {
            document.getElementById('vincitore').innerHTML = 'Pareggio!';
            document.getElementById('giocatoreUno').className = '';
            document.getElementById('giocatoreDue').className = '';


        } else {
            document.getElementById('vincitore').innerHTML = 'HAI PERSO!';
            document.getElementById('giocatoreUno').className = 'redColor';
            document.getElementById('giocatoreDue').className = 'greenColor';

        }
    }

)