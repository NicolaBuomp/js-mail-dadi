var emails;
var container = document.getElementById('inputEmail');

emails = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

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


        } else {
            document.getElementById('accesso').innerHTML = 'Accesso Negato!';

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
            document.getElementById('vincitore').innerHTML = 'Vince giocatore uno!';


        } else if (giocatoreUno == giocatoreDue) {
            document.getElementById('vincitore').innerHTML = 'Pareggio!';

        } else {
            document.getElementById('vincitore').innerHTML = 'Vince giocatore due!';

        }
    }

)