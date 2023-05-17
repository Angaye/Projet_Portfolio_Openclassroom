// import {signup} from "../Backend/controllers/users.controller";
// signup();
// // Création de l’objet du nouvel avis.
// const formulaireAvis = document.querySelector(".sign-in-page");
//     formulaireAvis.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Création de l’objet du nouvel avis.
//     const user = {
//       email: event.target.querySelector("[name=user-email]").value,
//       password: event.target.querySelector("[name=user-password]").value,
//     };
//     // Création de la charge utile au format JSON
//     const chargeUtile = JSON.stringify(user);
//     // Appel de la fonction fetch avec toutes les informations nécessaires
//     fetch("http://localhost:5678/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: chargeUtile
//     });
  
//     });

// const barreEntrée = document.querySelector('.sign-in-form');
// barreEntrée.addEventListener('submit',recuperEntée);
// function recuperEntée(e){
//     e.preventDefault();
//     console.log('hello');
//     const formdata = new FormData(barreEntrée);
//     const email=formdata.get('email');
//     const password=formdata.get('password')
//     const newEntrée={email,password};
//     console.log("entree",newEntrée);
//     saveEntrée(newEntrée);
//     barreEntrée.reset()
    
    // const emailUser="sophie.bluel@test.tld";
    // const passwordUser = "S0phie";
    // if(newEntrée.email===emailUser && newEntrée.password===passwordUser){
    // window.location="login.html";
    // }
// }
// function saveEntrée(entree){
//   let infoUtilisateurs =JSON.parse(localStorage.getItem("infoUtilisateurs")) || []
//   infoUtilisateurs=[...infoUtilisateurs, entree]
//   localStorage.setItem("infoUtilisateurs", JSON.stringify(infoUtilisateurs))
// }


// const Url ="http://localhost:5678/api/user/login/";
// const flog = document.querySelector("#flog");
// flog.addEventListener('submit' , function(e) { 
//   e.preventDefault();
//   const user = {
//       email: e.target.querySelector(".input1").value,
//       password: e.target.querySelector(".input2").value
//   }
//   const emailOfuser = e.target.querySelector(".input1").value;
//   const passwordOfUser = e.target.querySelector(".input2").value;
  
//   const firstIdentifier = "sophie.bluel@test.tld";
//   const lastIdentifier = "S0phie";
//   const userIdentifier = { 
//       email: "sophie.bluel@test.tld",
//       password: "S0phie"
//   }
//   const payload = JSON.stringify(user)
//   fetch(Url, { 
//       method: "POST",
//       headers: {"Content-Type":"application/json"},
//       body: payload
//   }).then((res) => res.json())

//   if (JSON.stringify(user) === JSON.stringify(userIdentifier)) { 
//       window.location = "./indexban.html";
      

//        } else if (emailOfuser !== firstIdentifier){ 
//           document.querySelector("#message").classList.add('warning')

//        } else if (passwordOfUser !== lastIdentifier) { 
//           document.querySelector("#message2").classList.add('warning')
//        } else { 
//           document.querySelector('#flog').innerHTML = "Accés Refusé"
//        }
        
//   } );

// const ancor = document.createElement('a');
// ancor.href='../Frontend/index.html';
// ancor.text='Un super canard';

// const blocParent = document.querySelector('.items');
// if(blocParent !== null){

//     blocParent.appendChild(ancor);
// }

const formulaireUser = document.querySelector(".sign-in-form");
    formulaireUser.addEventListener("submit",function(event) {
    event.preventDefault();
    // Declaration des valeurs concernant l'utilisateur
    const emailUtilisation="sophie.bluel@test.tld";
    const passwordUtilisation = "S0phie";
    // Declaration de la balise contenant le mot d'erreur caché
    const inputErrorEmail=document.querySelector('.user-email-error-msg');
    const inputErrorPassword=document.querySelector('.user-password-error-msg');


    // Declaration des entrées à valeurs unique
     const email=event.target.querySelector("[name=email]").value;
    const password= event.target.querySelector("[name=password]").value;
    // Definition des données de l'utilisateur à l'entrée
    const user = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value,
    };
    const stringUser=JSON.stringify(user);
    // Enregistrement des données de l'utilisateur
    window.localStorage.setItem("user",stringUser);

    // Des données de l'utilisateur pour la verification
    const userId ={
        email: "sophie.bluel@test.tld",
     password: "S0phie"
    }
    const stringUserId=JSON.stringify(userId);
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(user);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:5678/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    }).then((res) => res.json()).then((donnee) => window.localStorage.setItem('token', donnee.token));
    if(stringUser === stringUserId){
        window.location = "../FrontEnd/index.html";  
    }
    else if(email !== emailUtilisation){
        inputErrorEmail.style.display="block"; 
    }
    else if(password !== passwordUtilisation){
        inputErrorPassword.style.display="block";
    }
    else if( password == null){
     alert("Veuillez l'email ou le passwor");
    }
    else{
        alert("Entrez les mots identifiants");  
    }
    });


    
