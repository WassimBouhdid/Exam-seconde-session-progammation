"use strict"


 // prix 1kg de fruit dans des constantes

const prix = {

    banane : 2.00,
    mangue : 4.98,
    ananas : 2.20,
    poire : 2.49,
    pomme : 2.89,
    raisin : 3.99,
    fraise : 6.99,
    peche : 3.99,
    abricot : 5.95,
    orange : 1.95

}

// réduction

const reduction = {

    taux : {
        mangue : 0.75,
        abricot : 0.7,
        banane : 0.9,
        fraise : 0.85
    }, 

    quantiteMin : {
        mangue : 3,
        abricot : 10,
        banane : 6,
        fraise : 2
    }

}

// création d'un array contenant les livraisons créé par la fonctions envoyerFormulaire()

let total = 0;

// création d'un array qui va contenir les livraison

let arrayLivraison=[];

/* cette fonction me permet de récuperer la value de chaqu'un des champs et de les insérer dans un object */

function envoyerFormulaire(){

    let formulaire = {

        nom : document.getElementById("nomInput").value,
        prénom : document.getElementById("prénomInput").value,
        produit : document.getElementById("prodInput").value,
        quantité : document.getElementById("quantInput").value,
        prix,
        adresse : document.getElementById("adresseInput").value,
        mail : document.getElementById("mailInput").value,
        messageSupplémentaire : document.getElementById("messageSuppInput").value

    }

    formulaire.prix = prix[formulaire.produit] * formulaire.quantité

    if (reduction.taux[fruit] && formulaire.quantité >= reduction.quantiteMin[fruit]) {
        formulaire.prix *= reduction
    }
    
        total += formulaire.prix // addition du prix de la commande envoyer A CHANGER !!
    
    document.getElementById("total").innerHTML = total.toFixed(2) // affichage du total
    
    if (formulaire.nom && formulaire.prénom && formulaire.produit && formulaire.quantité && formulaire.adresse && formulaire.mail) {

        formulaire.prix = formulaire.prix.toFixed(2) + " €"
        arrayLivraison.push(formulaire) // insertion de l'object créé via le formulaire dans l'array pour permettre plus tard a une autre fonction et a un boutton de pouvoir supprimer deslivraison
        
        let ligne="";

        for (let i = 0; i < arrayLivraison.length; i++) {
            var tr = "<tr id=" + i + ">"
            for (let f in arrayLivraison[i])
                tr += "<td>" + arrayLivraison[i][f] + "</td>"
            tr+="<td><button id="+arrayLivraison+" type="+"button"+" onclick="+"supprimerCommande(this)"+">supprimer</button></td></tr>"
            ligne+=tr
        }

        document.getElementById("corpsTableau").innerHTML = ligne

    } else
        alert("veuillez complétez tout les champs !!");
}

// FONCTION SUPPRIMER UNE LIGNE DE COMMANDE

function supprimerCommande(element) {
    let rowIndex = element.parentNode.parentNode.rowIndex - 1
    let strPrice = arrayLivraison[rowIndex].prix
    total -= strPrice.slice(0, strPrice.length - 1)
    arrayLivraison.splice(rowIndex, 1)
    document.getElementById("corpsTableau").deleteRow(rowIndex)
    afficherTotal()
}

//  FONCTION LISTE DES PRIX

// execute cette onction au lancement de la page

function listerPrix(){

    let tableau="<table id="+"'tableauPrix'"+"><thead><th id="+"'fruit'"+">Fruit</th><th id="+prix+">Prix</th></thead><tbody id="+"'corpsTableauPrix'"+">";

    let indice=Object.keys(prix);

    for(let f=0;f<indice.length;f++){

        tableau+="<tr>";
        tableau+="<td>"+indice[f]+"</td><td>"+prix[indice[f]]+" €"+"</td>";
        tableau+="</tr>";

    }

    tableau+="</tbody></table>";
    document.getElementById("listePrix").innerHTML+=tableau;

}

// FONCTION AFFICHER LE TOTAL EN DESSOUS DU TABLEAU ( permet d'afficher 0.00 au lancement de la page)

function afficherTotal(){

    document.getElementById("total").innerHTML=total.toFixed(2) // permet d'afficher 0.00 au lancement de la page au niveau du prix total en dessous du tableau

}



 