/*EXERCICE 01

Rendu : ex01.js

Dans cet exercice vous allez créer des variables de types :             

    numérique (positifs, négatifs ou à virgule)             
    chaînes de caractères            
    array            
    booléens             
    objects            
    Afficher le type de chacune des variables avec la méthode console.log
*/
let number = 35;
console.log(`variable de type de number = ${number}`);

let string = "Vimal";
console.log(`Variable de type string = ${string}`);

let array = [1, 2, 3, 4];
console.log(`Variable de type array = ${array}`);

let boolean = true;
console.log(`Variable de type boolean = ${boolean}`);

var personne = {
    nom: 'Jean',
    age: 32,
    sexe: 'masculin',
    interet: 'musique',
}
console.log(`${personne.nom}, ${personne.age}, ${personne.sexe}, ${personne.interet}`);

/*EXERCICE 02

Rendu : ex02.js

Créer une variables 'isLogin' égale à true

Afficher le message "Connected" si la valeur de "isLogin" est vraie (true). 

Afficher le message "Not Authorized" si la valeur de "isLogin" est fausse (false) */

let isLogin = true;
function exo2() {
    if (isLogin === true) {
        return "Connected";
    } else {
        return "Not Authorized";
    }
}
console.log(exo2());