const reponse = await fetch("http://localhost:5678/api/works");
const work = await reponse.json();
console.log(work);

function generationWorks(work){ 
for (let i = 0; i < work.length; i++) {

const figure = work[i];
const divgallerie = document.querySelector('.gallery');
const gallerieElement= document.createElement('figure')

const imageUrlElement = document.createElement("img");
imageUrlElement.src = figure.imageUrl;
const titleElement = document.createElement("figcaption");
titleElement.innerText = figure.title;



divgallerie.appendChild(gallerieElement);
gallerieElement.appendChild(imageUrlElement);
gallerieElement.appendChild(titleElement);
 }
 }
generationWorks(work); 

const boutonAll = document.querySelector('.All');
boutonAll.addEventListener('click',function(){
   document.querySelector('.gallery').innerHTML= "";
    return generationWorks(work);
})

const boutonEfface = document.querySelector(".efface");
    boutonEfface.addEventListener('click', function(){
           document.querySelector('.gallery').innerHTML = ""; 
    })

const boutonprojet = document.querySelector('.objet');
boutonprojet.addEventListener("click",function () {
    const projet=work.filter(function(projets){
        return projets.categoryId===1;
    });
    console.log(projet);
    document.querySelector('.gallery').innerHTML= "";
    generationWorks(projet);
});
const boutonApart =  document.querySelector('.appart')
boutonApart.addEventListener('click',function(){
    const appart=work.filter(function(apparts){
          return apparts.categoryId===2;
    });
    console.log(appart);
    document.querySelector(".gallery").innerHTML= "";
    generationWorks(appart);
});

const boutonHotel = document.querySelector('.hotel');
boutonHotel.addEventListener('click',function(){
    const hotel=work.filter(function(hotels){
        return hotels.categoryId===3;
    });
    console.log(hotel);
    document.querySelector(".gallery").innerHTML = "";
    generationWorks(hotel);
});

// premier modal
let modal= null 

const openModal= function(e) {
    e.preventDefault();
    const target= document.querySelector(e.target.getAttribute('href')) 
    target.style.display= null;
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal',"true")
    modal = target
    modal.addEventListener('click',closeModal)
    modal.querySelector('.js-close-modal').addEventListener('click',closeModal)
    modal.querySelector('.js-stop-modal').addEventListener('click',stopPropagation)
}

const closeModal=  function(e){
    if(modal === null) return
    e.preventDefault()
    modal.style.display="none";
    modal.setAttribute('aria-hidden',"true")
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click',closeModal)
    modal.querySelector('.js-close-modal').removeEventListener('click',closeModal)
    modal.querySelector('.js-stop-modal').removeEventListener('click',stopPropagation)

    modal=null
}
const stopPropagation = function (e){
    e.stopPropagation()
}
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click',openModal)
});
window.addEventListener('keydown',function(e){
    if(e.key === "Escape"){
        closeModal(e)
    }
})
// 
function generationphoto(work){ 
    for (let i = 0; i < work.length; i++) {
    
    const article = work[i];
    const divgallerie = document.querySelector('.photo');
    const gallerieElement= document.createElement('article')
    
    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = article.imageUrl;
    const titleElement = document.createElement("figcaption");
    titleElement.innerText = "editer";
    const insereIcon = document.createElement('i')
    insereIcon.classList.add('fa-solid' ,'fa-trash-can');
    
    
    
    divgallerie.appendChild(gallerieElement);
    gallerieElement.appendChild(imageUrlElement);
    gallerieElement.appendChild(titleElement);
    gallerieElement.appendChild(insereIcon)
     }
     }
    generationphoto(work);
// Recuperation du token
const user=window.localStorage.getItem("user");
console.log(user)
// Recuperation du token
const monToken=window.localStorage.getItem("token");
console.log(monToken)
// localStorage.setItem('token',JSON.stringify('token'))
if(user && monToken){
    const barrerLogin =document.querySelector('#login')
    barrerLogin.addEventListener('click', function(){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    })
    barrerLogin.innerText = "LogOUT"
    const barrerBouton =document.querySelector('.boutons')
    barrerBouton.style.display="none";
    document.querySelectorAll('.js-modal').forEach(a=>{
        a.style.display= 'block'
        a.addEventListener('click', openModal)
    })
    // const afficherModale =document.querySelector('.js-modale')
    // afficherModale.style.display="block";
    const topTop = document.querySelector('.topp')
     topTop.style.display= "block";   
    

    
}

function generationphoto1(work){ 
    for (let i = 0; i < work.length; i++) {
    
    const article = work[i];
    const divgallerie = document.querySelector('.album');
    const gallerieElement= document.createElement('article')
    
    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = article.imageUrl;
    const titleElement = document.createElement("figcaption");
    titleElement.innerText = "editer";
    
    
    
    divgallerie.appendChild(gallerieElement);
    gallerieElement.appendChild(imageUrlElement);
    gallerieElement.appendChild(titleElement);
     }
     }
    generationphoto1(work);


    // Suppression des travaux à partir del'icon supprimé
let insereIcon = document.querySelectorAll(".fa-trash-can");

  console.log(insereIcon);
  
  for( let i = 0; i < insereIcon.length; i++){
  
    insereIcon[i].addEventListener('click',(event) =>{
  
      event.preventDefault();
  
      console.log(event);
  
      let id_supprimer = work[i].id;
  
      console.log(id_supprimer);
  
      let monToken =window.localStorage.getItem("token");
  
      let response = fetch(`http://localhost:5678/api/works/${id_supprimer}`,
  
        {
  
          method: "DELETE",
  
          headers: {
  
            accept: "*/*",
  
            Authorization: `Bearer ${monToken}`,
  
          },
  
        }
   
      );
  
      if (response.status == 200) {
  
        return false;
  
        // if HTTP-status is 200-299
  
        //alert("Photo supprimé avec succes");
  
        // obtenir le corps de réponse (la méthode expliquée ci-dessous)
  
      } else {
  
        alert("Echec de suppression");
  
      }
  
    })
  
  }

//   Affichage du modale pour l'ajout de photo à partir du 
// bouton ajouter au niveau du modale pour suppression des images

const boutonAjoutPhoto = document.querySelector('.ajouter');
boutonAjoutPhoto.addEventListener('click',function(e){
e.preventDefault();
const boiteModal1 = document.querySelector("#modal11");
boiteModal1.style.display="none"
const boiteModal2 = document.querySelector("#modal12");
boiteModal2.style.display="block";
})
const boiteModal2 = document.querySelector("#modal12");
boiteModal2.addEventListener('click',function(e){
    e.stopPropagation()
})

const retourPremierModal= document.querySelector('.fa-arrow-left')
retourPremierModal.addEventListener('click',function(e){
e.preventDefault();
const boiteModal1 = document.querySelector("#modal11");
boiteModal1.style.display="block"
const boiteModal2 = document.querySelector("#modal12");
boiteModal2.style.display="none";

})

const bouton2 = document.querySelectorAll('.js-close-modal').forEach(button=>button.addEventListener('click', closeModal));

// Code pour ajouter une image dans le formulaire
const blocForm= document.querySelector('#blocForm')
let titleAjouter = document.querySelector('#titre').value
let imageInput = document.querySelector("#imageInput")
let categoryAjouter = document.querySelector('#Categorie').value
let inputFile = document.querySelector("#input-file")
inputFile.onchange = function () {
    imageInput.src = URL.createObjectURL(inputFile.files[0])
}
blocForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    let imageInput = document.querySelector("#imageInput")
    let inputFile = document.querySelector("#input-file")

    inputFile.onchange = function () {
        imageInput.src = URL.createObjectURL(inputFile.files[0])
    }
    // Création d'objets formData  

    var formData = new FormData();
    let titleAjouter = document.querySelector('#titre').value
    let categoryAjouter = document.querySelector('#Categorie').value

    formData.append("image", inputFile.files[0]);
    formData.append("title", titleAjouter);
    formData.append("category",categoryAjouter);

    const monToken =window.localStorage.getItem('token')
    const answer = await fetch('http://localhost:5678/api/works/', {
        method: 'POST',
        headers: { 'Authorization' : `Bearer ${monToken}` },
        body: formData
    })
    // .then(function(res){
    //     if (res.ok){
    //         return res.json()
    //     }else{
    //         alert('Erreur dans le formulaire d\'envoi')
    //     }
    // })

})
console.log(titleAjouter)
console.log(categoryAjouter)
console.log(inputFile.value)


if (titleAjouter !== ""){
    console.log("bouton vert")
} else{
    console.log('Aucun changement')
}


const labelPhoto = document.querySelector("#ajoutPhoto")
labelPhoto.addEventListener('click', function(e){
    const imageInput = document.querySelector('#imageInput')
    imageInput.classList.remove("hidden")
})