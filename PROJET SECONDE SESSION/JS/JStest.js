"use strict"

 // prix 1kg de fruit

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

let nom;
let prénom;
let produit;
let quantité;
let prix;
let adresse;
let mail;
let messageSupplémentaire;

function test(){
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
}
