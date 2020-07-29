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

// création d'un arrayavec tout les fruits

/*let prix=[BANANE,MANGUE,ANANAS,POIRE,POMME,RAISIN,FRAISE,PECHE,ABRICOT,ORANGE]

let fruits=[banane,mangue,ananas,poire,pomme,raisin,fraise,pêche,abricot,orange]
*/ 



let identifiant = 0;
let nom;
let prénom;
let produit;
let quantité;
let prix;
let adresse;
let mail;
let messageSupplémentaire;

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

/* cette fonction me permet de récuperer la value de chaqu'un des champs et de les insérer dans un object */

function envoyerFormulaire(){

    identifiant++;

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

    nom=document.getElementById("nomInput").value
        //console.log(nom)
    prénom=document.getElementById("prénomInput").value
        // console.log(prénom)
    produit=document.getElementById("prodInput").value
        //console.log(produit)
    quantité=document.getElementById("quantInput").value
        //console.log(quantité)
    prix=document.getElementById("prixInput").value
        //console.log(prix)
    adresse=document.getElementById("adresseInput").value
        //console.log(adresse)
    mail=document.getElementById("mailInput").value
        //console.log(mail)
    messageSupplémentaire=document.getElementById("messageSuppInput").value
        //console.log(messageSupplémentaire)
        //alert("test")  

        objectFormulaire.Nom=nom
        objectFormulaire.Prénom=prénom
        objectFormulaire.Produit=produit
        objectFormulaire.Quantité=quantité
        objectFormulaire.Prix=prix+" €"
        objectFormulaire.Adresse=adresse
        objectFormulaire.Mail=mail
        objectFormulaire.MessageSupplémentaire=messageSupplémentaire

    let indice=Object.keys(objectFormulaire)

    let ligne="";

    var tr = "<tr id=" + identifiant + ">";
    
    for ( let i=0; i<indice.length;i++) {
        tr += "<td>"+objectFormulaire[indice[i]]+"</td>";
    }
    tr+="</tr>"
    ligne+=tr

    document.getElementById("tableau").innerHTML+=ligne

}

function listerPrix(){

    let tableau="<table id="+"'tableauPrix'"+"><thead><th id="+"'fruit'"+">Fruit</th><th id="+prix+">Prix</th></thead><tbody id="+"'corpsTableauPrix'"+">"

    let indice=Object.keys(objectFruits)

    for(let f=0;f<indice.length;f++){
        tableau+="<tr>"
        tableau+="<td>"+indice[f]+"</td><td>"+objectFruits[indice[f]]+" €"+"</td>"
        tableau+="</tr>"
    }

    tableau+="</tbody></table>"
    document.getElementById("listePrix").innerHTML+=tableau
}

// alert("test")
// alert("test")
// alert("test")