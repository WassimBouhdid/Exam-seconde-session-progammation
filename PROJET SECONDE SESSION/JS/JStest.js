"use strict"

 // prix 1kg de fruit dans des constante

const BANANE=2.00
const MANGUE=4.98
const ANANAS=2.20
const POIRE=2.49
const POMME=2.89
const RAISIN=3.99
const FRAISE=6.99
const PECHE=3.99
const ABRICOT=5.95
const ORANGE=1.95

// création d'un array contenant les livraisons créé par la fonctions envoyerFormulaire()


let identifiant = 0;
let nom;
let prénom;
let produit;
let quantité;
let prix=0;
let adresse;
let mail;
let messageSupplémentaire;

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

let arrayLivraison=[]


/* cette fonction me permet de récuperer la value de chaqu'un des champs et de les insérer dans un object */

function envoyerFormulaire(){

    nom=document.getElementById("nomInput").value;
        //console.log(nom)
    prénom=document.getElementById("prénomInput").value;
        // console.log(prénom)
    produit=document.getElementById("prodInput").value;
       // console.log(produit);
       // console.log(typeof produit); 
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

    prix=prix.toFixed(2)

        // console.log(prix)
        // console.log(Number(quantité)*BANANE)
    adresse=document.getElementById("adresseInput").value;
        //console.log(adresse)
    mail=document.getElementById("mailInput").value;
        //console.log(mail)
    messageSupplémentaire=document.getElementById("messageSuppInput").value;
        
        if(nom=="" || prénom=="" || produit=="" || quantité=="" || adresse=="" || mail=="" ){

            alert("veuillez complétez tout les champs !!");

        }
        else{

            identifiant++;

            //console.log(messageSupplémentaire)
            //alert("test")  

            objectFormulaire.Nom=nom;
            objectFormulaire.Prénom=prénom;
            objectFormulaire.Produit=produit;
            objectFormulaire.Quantité=quantité;
            objectFormulaire.Prix=prix+" €";
            objectFormulaire.Adresse=adresse;
            objectFormulaire.Mail=mail;
            objectFormulaire.MessageSupplémentaire=messageSupplémentaire;

            arrayLivraison.push(objectFormulaire) // insertion de l'object créé via le formulaire dans l'array pour permettre plus tard a une autre fonction et a un boutton de pouvoir supprimer deslivraison

            let indice=Object.keys(objectFormulaire);

            let ligne="";

            var tr = "<tr id=" + identifiant + ">";
            
            for ( let i=0; i<indice.length;i++) {

                tr += "<td>"+objectFormulaire[indice[i]]+"</td>";

            }

            tr+="<td><button id="+"supprimer"+" type="+"button"+" onclick="+supprimerCommande()+">supprimer</button></td></tr>";
            ligne+=tr;

            document.getElementById("corpsTableau").innerHTML+=ligne;

        }
}

function supprimerCommande (){
    let patate
}


/* TERMINER !!! il reste plus qu'à corriger les erreurs potentielles */

//  FONCTION LISTE DES PRIX


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