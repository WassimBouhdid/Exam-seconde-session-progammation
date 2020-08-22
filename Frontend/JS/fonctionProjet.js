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
 * cette fonction me permet de récuperer la value de chaqu'un des champs du formulaire et de les inserer dans un object.après ça,
 * on calcule le prix de la commande et on verifie si il y a une promotion qui doit être appliqué. On vérifie aussi si le numéro de TVA est valide
 * et si le nom et le prénom inscrit ne contient aucun numéro. Si toute les données inscritent sont correcte alors on calcule le prix total de toute les lvraisons faites
 * et on insère la livraison dans un array nommé arrayLivraison. Ensuite, on crée le tableau qui va montrée toute les livraisons inscritent.
 * 
 * pas de paramètres
 * 
 */


function envoyerFormulaire() {


    let formulaire = { //l'object dans le quelle on va stocker les valeur du formulaire envoyé

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

    formulaire.prix = prix[formulaire.produit] * formulaire.quantité; // calcule du prix sans promotion

    if (reduction.taux[formulaire.produit] && formulaire.quantité > reduction.quantiteMin[formulaire.produit]) {

        formulaire.prix *= reduction.taux[formulaire.produit];

    }

    if (vérifierNumTVA(formulaire.numéroDeTVA)) {
        
       document.getElementById("erreurNumTVA").innerText = "";
        
    } 
    else {
    
        document.getElementById("erreurNumTVA").innerText = "Veuillez rentrer un numéro de TVA valide (nombre de 10 chiffres) !!";
        
    }

    if (contientChiffres(formulaire.nom)) {
        
        document.getElementById("erreurNom").innerText = "";
        
    } 
    else {

        document.getElementById("erreurNom").innerText = "Ce champs peut-être complété qu'avec des lettres !!";

    }

    if (contientChiffres(formulaire.prénom)) {

        document.getElementById("erreurPrenom").innerText = "";

    } 
    else {

        document.getElementById("erreurPrenom").innerText = "Ce champs peut-être complété qu'avec des lettres !!";

    }

   
    if (vérifierChamps(formulaire) && vérifierNumTVA(formulaire.numéroDeTVA) && contientChiffres(formulaire.nom) && contientChiffres(formulaire.prénom)) { // vérification que tout les champs sont bien remplis

        total += formulaire.prix;

        formulaire.prix = formulaire.prix.toFixed(2) + " €";

        arrayLivraison.push(formulaire); // insertion de l'object créé via le formulaire dans l'array pour permettre plus tard a une autre fonction et a un boutton de pouvoir supprimer des livraisons

        let ligne = "";

        for (let i = 0; i < arrayLivraison.length; i++) {

            var tr = "<tr id=" + i + ">"; // création de la ligne du tableau qui contiendront toute les informations de la commande

            for (let f in arrayLivraison[i]) {

                tr += "<td>" + arrayLivraison[i][f] + "</td>"; // création de chaqu'une des cellules qui contiendront chaqu'une une information a propos de la commande ayant id de la ligne

            }

            tr += "<td><button id=" + arrayLivraison + " type=" + "button" + " onclick=" + "supprimerCommande(this)" + ">supprimer</button></td></tr>"; // ajout du boutton qui nous permmetra de supprimer des lignes de commande

            ligne += tr;

        }

        document.getElementById("corpsTableau").innerHTML = ligne; // insertion du tableau dans l'HTML

        document.getElementById("erreurChampVide").innerHTML = "";

        afficherTotal();

    } 
    else {

        document.getElementById("erreurChampVide").innerText = "Veuillez remplir tout les champs correctement !!";

    }

}


//fonction supprimer une ligne de commande

/**
 * Fonction qui permet de supprimer une lignedu tableau des commandes et de soustraire du prix total le prix de la commande supprimé.
 * 
 * @param {String} element Balise boutton sur lequel on a cliqué dans le tableau des commandes.
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
 * permet de creer un tableau qui contiendra les fruits et leur prix respactif.
 * 
 * pas de paramètres
 * 
 */

function listerPrix() {

    let tableau = "<table id=" + "'tableauPrix'" + "><thead><th id=" + "fruit" + ">Fruit</th><th id=" + prix + ">Prix</th></thead><tbody id=" + "'corpsTableauPrix'" + ">";

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
 * cette fonction permet d'afficher le total en dessous du tableau qui contient toute les commandes.
 * 
 * pas de paramètres
 * 
 */

function afficherTotal() {

    document.getElementById("total").innerHTML = total.toFixed(2); // permet d'afficher 0.00 au lancement de la page au niveau du prix total en dessous du tableau

}

/**
 * 
 * cette fonction permet de vérifier si le numéro de TVA envoyer a partir du formulaire est bien un nombre et contient bien 10 chiffres.
 * 
 * @param {Number} numTVA il s'agit du numéro de TVA qui a été inscrit dans le champs numéro de TVA du formulaire.
 *  
 */

function vérifierNumTVA(numTVA) {

    if (!isNaN(numTVA) && numTVA.length == 10) {

        return true;

    } else {

        return false;

    }



}

/**
 * cette fonction permet de vérifier si l'un des champs du formulaire envoyé est vide.
 * 
 * @param {object} formulaire il s'agit de l'objet formulaire se trouvant au début de la fonction envoyer formulaire.
 */

function vérifierChamps(formulaire) {

    if (formulaire.nom.trim() && formulaire.prénom.trim() && formulaire.numéroDeTVA.trim() && formulaire.produit.trim() && formulaire.quantité.trim() && formulaire.adresse.trim() && formulaire.mail.trim()) {

        return true;

    } else {

        return false;

    }

}

/**
 * 
 * cette fonction permet de vérifier si il y a un nombre dans la string mis en paramètre.
 * 
 * @param {*} string string dans laquelle on va vérifier si il n'y a pas de chiffre.
 */

function contientChiffres(string) {

    for (let i = 0; i < string.length; i++) {

        if (!isNaN(string[i])) {

            return false;

        }

    }

    return true

}