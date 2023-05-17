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
// Recuperation du token
const user=window.localStorage.getItem("user");
// Recuperation du token
const monToken=window.localStorage.getItem("token");
// localStorage.setItem('token',JSON.stringify('token'))
if(user && monToken){
    const barrerLogin =document.querySelector('#login')
    barrerLogin.innerText = "LogOUT"
    barrerLogin.addEventListener('click', function(){
        window.localStorage.removeItem('user');

        console.log('hello')
    })
    const barrerBouton =document.querySelector('.boutons')
    barrerBouton.style.display="none";
    const afficherModal =document.querySelector('.js-modal')
    afficherModal.style.display="block";
    const afficherModale =document.querySelector('.js-modale')
    afficherModale.style.display="block";
    const topTop = document.querySelector('.topp')
     topTop.style.display= "block";   
    

    
}
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
// Deuxieme modale
let modale = null;
const openModale=function(e){
    e.preventDefault()
    const targete=document.querySelector(e.target.getAttribute('href'))
    targete.style.display=null
    targete.removeAttribute('aria-hidden')
    targete.setAttribute('aria-modal','true')
    modale=targete
    modale.addEventListener('click',closemodale)
    modale.querySelector('.js-modal-close').addEventListener('click',closemodale)
    modale.querySelector('.js-stop').addEventListener('click',stopPropagatio)
}

const closemodale= function(e){
    if(modale===null) return
    e.preventDefault()
    modale.style.display='none'
    modale.setAttribute('aria-hidden','true')
    modale.removeAttribute('aria-modal')
    modale.removeEventListener('click',closemodale)
    modale.querySelector('.js-modal-close').removeEventListener('click',closemodale)
    modale.querySelector('.js-stop').removeEventListener('click',stopPropagatio)
    modale=null
}

const stopPropagatio =  function(e){
    e.stopPropagation()
}
document.querySelectorAll('.js-modale').forEach(a =>{
    a.addEventListener('click',openModale)
})

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
    // Troisiéme modale

let modal3= null 

const openModal3= function(e) {
    e.preventDefault();
    const target3= document.querySelector(e.target3.getAttribute('href')) 
    target3.style.display= null;
    target3.removeAttribute('aria-hidden')
    target3.setAttribute('aria-modal',"true")
    modal3 = target3
    modal3.addEventListener('click',closeModal3)
    modal3.querySelector('.js-close3-modal').addEventListener('click',closeModal3)
    modal3.querySelector('.js-stop3-modal').addEventListener('click',stopPropagation3)
}

const closeModal3=  function(e){
    if(modal3 === null) return
    e.preventDefault()
    modal3.style.display="none";
    modal3.setAttribute('aria-hidden',"true")
    modal3.removeAttribute('aria-modal')
    modal3.removeEventListener('click',closeModal3)
    modal3.querySelector('.js-close3-modal').removeEventListener('click',closeModal3)
    modal3.querySelector('.js-stop3-modal').removeEventListener('click',stopPropagation3)

    modal3=null
}
const stopPropagation3 = function (e){
    e.stopPropagation3()
}
document.querySelectorAll('.js-modal3').forEach(a => {
    a.addEventListener('click',openModal3)
});
window.addEventListener('keydown',function(e){
    if(e.key === "Escape"){
        closeModal3(e)
    }
})
    // 
    //suppression d'un element

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
