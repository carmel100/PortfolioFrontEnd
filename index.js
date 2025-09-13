/*
 const buttonAbout = document.querySelector('.btn-1')

 const sentenceAbout = document.querySelector('.commentProfil')

  buttonAbout.addEventListener('click',() =>{

     if (sentenceAbout.style.display === '') {

    sentenceAbout.style.display = 'block'

    sentenceAbout.style.marginBlockEnd = '30px'
    
     buttonAbout.textContent = 'Reduire'
     
  }

  else {

    sentenceAbout.style.display =''

    sentenceAbout.style.marginBlockEnd = ''

    buttonAbout.textContent = 'Voir plus'
  }
  })

   const navBar = document.querySelector('.navBar')


document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navBar.style.backgroundColor = '#323035e3'; // couleur quand on scrolle
  } else {
    navBar.style.backgroundColor = ''; // transparent en haut de la page
  }
})


window.addEventListener('load', () => {
  const textChange = document.querySelector('.roleProfil');
  const roles = ['DEVELOPPEUR FULLSTACK', 'DEVELOPPEUR FRONTEND', 'DEVELOPPEUR BACKEND'];
  let index = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentRole = roles[index];

    if (!deleting) {
      // Écriture caractère par caractère
      textChange.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        deleting = true; // On commence à supprimer
        setTimeout(typeEffect, 1500); // petite pause avant suppression
        return;
      }
    } else {
      // Suppression caractère par caractère
      textChange.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        index = (index + 1) % roles.length; // texte suivant
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100); // vitesse suppression/écriture
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 2000, // vitesse de l’animation
    once: false,     // ✅ joue l’animation une seule fois et garde l’état final
    mirror: false   // ❌ évite que l’élément disparaisse quand on remonte
  });
});


 const burgerButton = document.querySelector('.hamburger')

 const flexMotion = document.querySelector('.flex-motion')

 const secondPoint = document.querySelector('.second-point')

 const elementP = document.querySelectorAll('.elementUnderline')



     burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('is-active');
  secondPoint.classList.toggle('open');
});
      
const mq = window.matchMedia("(max-width: 827px)");

mq.addEventListener("change", (e) => {
  if (!e.matches) {
    // Si on passe en desktop
    burgerButton.classList.remove('is-active');
    secondPoint.classList.remove('open');
//    elementP.forEach((d) => d.addEventListener('click',() => d.style.display = 'block'))
  } else {
    // Si on repasse en mobile → cacher menu tant que pas de clic
    secondPoint.style.display = "";
  //  elementP.forEach((d) => d.addEventListener('click',() => d.style.display = ''))

  }
});

elementP.forEach((d) => {
  d.addEventListener("click", () => {
    if (secondPoint.classList.contains("open")) {
      burgerButton.classList.remove("is-active"); // fermer aussi l’anim burger
      secondPoint.classList.remove("open");       // fermer le menu
    }
  });
})

    

 const formButton =  document.querySelector('.margeForm')

formButton.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nom = document.querySelector('#nom').value;
  const prenom = document.querySelector('#prenom').value;
  const email = document.querySelector('#email').value;
  const telephone = document.querySelector('#telephone').value;
  const message = document.querySelector('#message').value;


  try {
    const response = await fetch('https://portfoliobackend-asio.onrender.com', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nom, prenom, email, telephone, message })
    });

    const data = await response.json();
    console.log("Réponse serveur :", data);

  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
  }
});*/


 const buttonAbout = document.querySelector('.btn-1')

 const sentenceAbout = document.querySelector('.commentProfil')

  buttonAbout.addEventListener('click',() =>{

     if (sentenceAbout.style.display === '') {

    sentenceAbout.style.display = 'block'

    sentenceAbout.style.marginBlockEnd = '30px'
    
     buttonAbout.textContent = 'Reduire'
     
  }

  else {

    sentenceAbout.style.display =''

    sentenceAbout.style.marginBlockEnd = ''

    buttonAbout.textContent = 'Voir plus'
  }
  })

   const navBar = document.querySelector('.navBar')


document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navBar.style.backgroundColor = '#323035e3'; // couleur quand on scrolle
  } else {
    navBar.style.backgroundColor = ''; // transparent en haut de la page
  }
})


window.addEventListener('load', () => {
  const textChange = document.querySelector('.roleProfil');
  const roles = ['DEVELOPPEUR FULLSTACK', 'DEVELOPPEUR FRONTEND', 'DEVELOPPEUR BACKEND'];
  let index = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentRole = roles[index];

    if (!deleting) {
      // Écriture caractère par caractère
      textChange.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        deleting = true; // On commence à supprimer
        setTimeout(typeEffect, 1500); // petite pause avant suppression
        return;
      }
    } else {
      // Suppression caractère par caractère
      textChange.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        index = (index + 1) % roles.length; // texte suivant
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100); // vitesse suppression/écriture
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 2000, // vitesse de l’animation
    once: false,     // ✅ joue l’animation une seule fois et garde l’état final
    mirror: false   // ❌ évite que l’élément disparaisse quand on remonte
  });
});


 const burgerButton = document.querySelector('.hamburger')

 const flexMotion = document.querySelector('.flex-motion')

 const secondPoint = document.querySelector('.second-point')

 const elementP = document.querySelectorAll('.elementUnderline')



     burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('is-active');
  secondPoint.classList.toggle('open');
});
      
const mq = window.matchMedia("(max-width: 827px)");

mq.addEventListener("change", (e) => {
  if (!e.matches) {
    // Si on passe en desktop
    burgerButton.classList.remove('is-active');
    secondPoint.classList.remove('open');
//    elementP.forEach((d) => d.addEventListener('click',() => d.style.display = 'block'))
  } else {
    // Si on repasse en mobile → cacher menu tant que pas de clic
    secondPoint.style.display = "";
  //  elementP.forEach((d) => d.addEventListener('click',() => d.style.display = ''))

  }
});

elementP.forEach((d) => {
  d.addEventListener("click", () => {
    if (secondPoint.classList.contains("open")) {
      burgerButton.classList.remove("is-active"); // fermer aussi l’anim burger
      secondPoint.classList.remove("open");       // fermer le menu
    }
  });
})

  const Toast = document.querySelector('.Toast')

function showToast(message, type = "info") {
  Toast.style.display = "flex";
  Toast.children[0].textContent = message;

  // si tu veux différencier les styles (vert pour success, rouge pour failure)
  Toast.className = `Toast ${type}`;

  setTimeout(() => {
    Toast.style.display = "none";
    Toast.children[0].textContent = "";
    Toast.className = "Toast"; // reset des classes
  }, 3000);
}


  

 const formButton =  document.querySelector('.margeForm')

formButton.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nom = document.querySelector('#nom').value;
  const prenom = document.querySelector('#prenom').value;
  const email = document.querySelector('#email').value;
  const telephone = document.querySelector('#telephone').value;
  const message = document.querySelector('#message').value;


try {
  const response = await fetch('https://portfoliobackend-asio.onrender.com', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nom, prenom, email, telephone, message })
  });

  // Si le serveur renvoie une erreur HTTP (ex: 400, 500)
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();
  console.log("Réponse serveur :", data);

  showToast("Success", "success");

} catch (error) {
  console.error("Erreur lors de l'envoi :", error);

  showToast("Failure", "error");
}

});


