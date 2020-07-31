"use strict"



 // prix 1kg de fruit dans des constante


const BANANE=2.00;
const MANGUE=4.98;
const ANANAS=2.20;
const POIRE=2.49;
const POMME=2.89;
const RAISIN=3.99;
const FRAISE=6.99;
const PECHE=3.99;
const ABRICOT=5.95;
const ORANGE=1.95;


// réduction


const REDUCTION_MANGUE=0.75; // 25%
const REDUCTION_ABRICOT=0.70; // 30%
const REDUCTION_BANANE=0.90; // 10%
const REDUCTION_FRAISE=0.85; // 15%


// création d'un array contenant les livraisons créé par la fonctions envoyerFormulaire()


let prix;
let total=0;
let quantité;


// création des variables qui contiendront les objets utilisés ci-dessous


let objectFruits={
    Banane :BANANE,
    Mangue : MANGUE,
    Ananas : ANANAS,
    Poire : POIRE,
    Pomme : POMME,
    Raisin : RAISIN,
    Fraise : FRAISE,
    Pêche : PECHE,
    Abricot : ABRICOT,
    Orange : ORANGE,
}


let objectFormulaire={
    Nom : undefined,
    Prénom : undefined,
    Produit : undefined,
    Quantité : undefined,
    Prix : undefined,
    Adresse : undefined,
    Mail : undefined,
    MessageSupplémentaire : undefined,
};


// création d'un array qui va contenir les livraison


let arrayLivraison=[];


// fonction réduction qui est executer dans la fonction envoyer formulaire


function réduction(){

    if(document.getElementById("prodInput").value=="mangue" && quantité >= 3){
        prix*=REDUCTION_MANGUE;
    }
    else if(document.getElementById("prodInput").value=="abricot" && quantité >= 10){
        prix*=REDUCTION_ABRICOT
    }
    else if(document.getElementById("prodInput").value=="banane" && quantité >= 6){
        prix*=REDUCTION_BANANE
    }
    else if(document.getElementById("prodInput").value=="fraise" && quantité >= 2){
        prix*=REDUCTION_FRAISE
    }
}


/* cette fonction me permet de récuperer la value de chaqu'un des champs et de les insérer dans un object */


function envoyerFormulaire(){

    let nom=document.getElementById("nomInput").value;

    let prénom=document.getElementById("prénomInput").value;
    
    let produit=document.getElementById("prodInput").value;
    
    quantité=document.getElementById("quantInput").value;

    if(document.getElementById("prodInput").value=="pomme"){
        prix=POMME*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="poire"){
        prix=POIRE*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="fraise"){
        prix=FRAISE*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="pêche"){
        prix=PECHE*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="abricot"){
        prix=ABRICOT*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="banane"){
        prix=BANANE*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="raisin"){
        prix=RAISIN*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="ananas"){
        prix=ANANAS*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="mangue"){
        prix=MANGUE*Number(quantité)
    }
    else if(document.getElementById("prodInput").value=="orange"){
        prix=ORANGE*Number(quantité)
    }


    réduction();


    total+=Number(prix) // addition du prix de la commande envoyer A CHANGER !!

    
    document.getElementById("total").innerHTML=total.toFixed(2) // affichage du total
         
    let adresse=document.getElementById("adresseInput").value;
    
    let mail=document.getElementById("mailInput").value;
    
    let messageSupplémentaire=document.getElementById("messageSuppInput").value;
        
        if(nom=="" || prénom=="" || produit=="" || quantité=="" || adresse=="" || mail=="" ){

            alert("veuillez complétez tout les champs !!");

        }
        else{
  

            objectFormulaire.Nom=nom;
            objectFormulaire.Prénom=prénom;
            objectFormulaire.Produit=produit;
            objectFormulaire.Quantité=quantité;
            objectFormulaire.Prix=prix.toFixed(2)+" €";
            objectFormulaire.Adresse=adresse;
            objectFormulaire.Mail=mail;
            objectFormulaire.MessageSupplémentaire=messageSupplémentaire;

            arrayLivraison.push(objectFormulaire) // insertion de l'object créé via le formulaire dans l'array pour permettre plus tard a une autre fonction et a un boutton de pouvoir supprimer deslivraison

            let indice=Object.keys(objectFormulaire);

            let ligne="";

            for(let f in arrayLivraison){

            var tr = "<tr id=" + f + ">";
            
            for ( let i=0; i<indice.length;i++) {

                tr += "<td>"+arrayLivraison[f][indice[i]]+"</td>";

            }

            tr+="<td><button id="+f+" type="+"button"+" onclick="+"supprimerCommande()"+">supprimer</button></td></tr>";
            ligne+=tr;
        }

            document.getElementById("corpsTableau").innerHTML=ligne;

        }
}






// FONCTION SUPPRIMER UNE LIGNE DE COMMANDE



function supprimerCommande (){


}



//
// TERMINER !!  correction non effectué
//

//  FONCTION LISTE DES PRIX

// execute cette onction au lancement de la page

function listerPrix(){

    let tableau="<table id="+"'tableauPrix'"+"><thead><th id="+"'fruit'"+">Fruit</th><th id="+prix+">Prix</th></thead><tbody id="+"'corpsTableauPrix'"+">";

    let indice=Object.keys(objectFruits);

    for(let f=0;f<indice.length;f++){

        tableau+="<tr>";
        tableau+="<td>"+indice[f]+"</td><td>"+objectFruits[indice[f]]+" €"+"</td>";
        tableau+="</tr>";

    }

    tableau+="</tbody></table>";
    document.getElementById("listePrix").innerHTML+=tableau;

}

// FONCTION AFFICHER LE TOTAL EN DESSOUS DU TABLEAU ( permet d'afficher 0.00 au lancement de la page)

function afficherTotal(){

document.getElementById("total").innerHTML=total.toFixed(2) // permet d'afficher 0.00 au lancement de la page au niveau du prix total en dessous du tableau

}