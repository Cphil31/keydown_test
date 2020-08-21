window.onload = function () {

let body = document.body;

let titre = document.createElement("h1");
titre.innerHTML="keydown";
body.appendChild(titre);


    document.addEventListener('keydown', (event) => {
        const nomTouche = event.key;
      
        if (nomTouche === 'Control') {
          // Pas d'alerte si seule la touche Control est pressée.
          return;
        }
      
        if (event.ctrlKey) {
          // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
          // event.ctrlKey peut être true si la touche Ctrl est pressée dans le même temps.
          alert(`Combinaison de ctrlKey + ${nomTouche}`);
        } else {
          alert(`Touche pressée ${nomTouche}`);
        }
      }, false);

}