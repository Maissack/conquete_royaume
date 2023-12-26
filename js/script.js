/* Pop-up */ 

const btnContribuez = document.getElementById("btn-contribuez");
const popup = document.createElement("div");
popup.id = "popup";

const message = document.createElement("p");
message.innerText = "Seigneur, daignez choisir la somme qui convient a votre bon plaisir.";
popup.appendChild(message);

const montants = [5, 10, 20, 50, 100];
montants.forEach(montant => {
  const btnMontant = document.createElement("button");
  btnMontant.innerText = montant + " €";
  btnMontant.classList.add("montant");
  btnMontant.addEventListener("click", () => {
    alert("Les royaumes vous expriment leur gratitude pour avoir prestement contribué à la somme ci-jointe : " + montant + " €");
    popup.style.display = "none";
  });
  popup.appendChild(btnMontant);
});

document.body.appendChild(popup);

btnContribuez.addEventListener("click", () => {
  popup.style.display = "block";
});


const croix = document.createElement("span");
croix.innerHTML = "&times;";
croix.classList.add("close");
croix.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.appendChild(croix);



/* Remonter en haut */ 

// Affiche le bouton lorsque l'utilisateur a fait défiler la page de 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Remonte en haut de la page lorsque l'utilisateur clique sur le bouton
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/* Thème Sombre & Clair */ 

function toggleTheme() {
    var body = document.querySelector("body");
    body.classList.toggle("dark");
    
    var themeBtn = document.getElementById("themeBtn");
    if (body.classList.contains("dark")) {
      themeBtn.textContent = "Theme clair";
    } else {
      themeBtn.textContent = "Theme sombre";
    }
  }

  var themeSwitch = document.querySelector(".theme-switch");

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    themeSwitch.style.display = "none";
  } else {
    themeSwitch.style.display = "block";
  }
});