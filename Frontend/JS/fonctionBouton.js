"use strict"


//==================VARIABLE & CONSTANTE============================================================================================================================
   

// prix 1kg de fruit dans des constantes


const prix = {

    banane: 2.00,
    mangue: 4.98,
    ananas: 2.20,
    poire: 2.49,
    pomme: 2.89,
    raisin: 3.99,
    fraise: 6.99,
    peche: 3.99,
    abricot: 5.95,
    orange: 1.95

}


// object réduction


const reduction = {

    taux: {
        mangue: 0.75,
        abricot: 0.7,
        banane: 0.9,
        fraise: 0.85,
        peche: 0.80
    },

    quantiteMin: {
        mangue: 40,
        abricot: 50,
        banane: 80,
        fraise: 60,
        peche: 70
    }

}


let total = 0; // création de la variable total qui contiendra la somme des prix 


let arrayLivraison = []; // création d'un array qui va contenir les livraisons


//==================FONCTION LANCER PAR DES EVENEMENTS ONCLICK============================================================================================================================


/**
 * 
 * cette fonction me permet de récuperer la value de chaqu'un des champs et de les insérer dans un array.
 * 
 * pas de paramètres
 * 
 */


function envoyerFormulaire() {

    
    let formulaire = {  //l'object dans le quelle on va stocker les valeur du formulaire envoyé

        nom: document.getElementById("nomInput").value,
        prénom: document.getElementById("prénomInput").value,
        numéroDeTVA: document.getElementById("numTVAInput").value,
        produit: document.getElementById("prodInput").value,
        quantité: document.getElementById("quantInput").value,
        prix,
        adresse: document.getElementById("adresseInput").value,
        mail: document.getElementById("mailInput").value,
        messageSupplémentaire: document.getElementById("messageSuppInput").value

    }

    formulaire.prix = prix[formulaire.produit] * formulaire.quantité;  // calcule du prix sans promotion

    if (reduction.taux[formulaire.produit] && formulaire.quantité > reduction.quantiteMin[formulaire.produit]) {

        formulaire.prix *= reduction.taux[formulaire.produit];

    }

    document.getElementById("total").innerHTML = total.toFixed(2);     // affichage du total 

    if (isNaN(formulaire.numéroDeTVA) || formulaire.numéroDeTVA.length != 10) {

        document.getElementById("erreurNumTVA").innerHTML = "<span id=" + "messageErreur" + ">Veuillez rentrer un numéro de TVA valide !!</span><br>";

    }
    else{
        document.getElementById("erreurNumTVA").innerHTML = "";
    }
    
    if (!(formulaire.nom.trim() && formulaire.prénom.trim() && formulaire.numéroDeTVA.trim() && formulaire.produit.trim() && formulaire.quantité.trim() && formulaire.adresse.trim() && formulaire.mail.trim())) { // vérification que tout les champs sont bien remplis

       document.getElementById("erreurChampVide").innerHTML = "<span id=" + "messageErreur" + ">Veuillez remplir tout les champs !!</span>";

    }
    else if(!(isNaN(formulaire.numéroDeTVA) || formulaire.numéroDeTVA.length != 10)){

        total += formulaire.prix;

        formulaire.prix = formulaire.prix.toFixed(2) + " €";

        arrayLivraison.push(formulaire);   // insertion de l'object créé via le formulaire dans l'array pour permettre plus tard a une autre fonction et a un boutton de pouvoir supprimer des livraisons

        let ligne = "";

        for (let i = 0; i < arrayLivraison.length; i++) {

            var tr = "<tr id=" + i + ">";    // création de la ligne du tableau qui contiendront toute les informations de la commande

            for (let f in arrayLivraison[i]) {

                tr += "<td>" + arrayLivraison[i][f] + "</td>";   // création de chaqu'une des cellules qui contiendront chaqu'une une information a propos de la commande ayant id de la ligne

            }

            tr += "<td><button id=" + arrayLivraison + " type=" + "button" + " onclick=" + "supprimerCommande(this)" + ">supprimer</button></td></tr>"; // ajout du boutton qui nous permmetra de supprimer des lignes de commande

            ligne += tr;

        }

        document.getElementById("corpsTableau").innerHTML = ligne; // insertion du tableau dans l'HTML

        document.getElementById("erreurChampVide").innerHTML = "";

        afficherTotal();

    }

}


//fonction supprimer une ligne de commande

/**
 * Fonction qui permet de supprimer une lignedu tableau des commandes et de soustraire du prix total le prix de la commande supprimé
 * 
 * @param {String} element Balise boutton sur lequel on a cliqué dans le tableau des commandes
 * 
 */

function supprimerCommande(element) {

    let ligneTable = element.parentNode.parentNode.rowIndex - 1;

    let strPrice = arrayLivraison[ligneTable].prix;

    total -= strPrice.slice(0, strPrice.length - 1);

    arrayLivraison.splice(ligneTable, 1);

    document.getElementById("corpsTableau").deleteRow(ligneTable);

    afficherTotal();

}


//==================FONCTIONAU LANCEMENT DE LA PAGE============================================================================================================================


// affiche le tableau des prix 

/**
 * 
 * permet de creer un tableau qui contiendra les fruits et leur prix respactif
 * 
 * pas de paramètres
 * 
 */

function listerPrix() {

    let tableau = "<table id=" + "'tableauPrix'" + "><thead><th id=" + "'fruit'" + ">Fruit</th><th id=" + prix + ">Prix</th></thead><tbody id=" + "'corpsTableauPrix'" + ">";

    let indice = Object.keys(prix);

    for (let f = 0; f < indice.length; f++) {

        tableau += "<tr>";
        tableau += "<td>" + indice[f] + "</td><td>" + prix[indice[f]] + " €" + "</td>";
        tableau += "</tr>";

    }

    tableau += "</tbody></table>";
    document.getElementById("listePrix").innerHTML += tableau;

}


// fonction afficher le total en dessous du tableau ( permet d'afficher 0.00 au lancement de la page)

/**
 * 
 * cette fonction permet d'afficher le total en dessous du tableau
 * 
 * pas de paramètres
 * 
 */

function afficherTotal() {

    document.getElementById("total").innerHTML = total.toFixed(2); // permet d'afficher 0.00 au lancement de la page au niveau du prix total en dessous du tableau

}