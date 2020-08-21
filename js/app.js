window.onload = function () {

let body = document.body;

let title = document.createElement("h1");
title.innerHTML="keydown";
body.appendChild(title);


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