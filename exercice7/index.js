/*EXERCICE 01

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

/*EXERCICE 03

Écrivez en Javascript :

- J’initialise a à 8  

- Je stocke a + 1 dans b  

- J’ajoute 1 à a  

- Je multiplie a par 2  

- Je retranche 5 à b  

- Je multiplie b par lui-même 

- J’ajoute 3 à a 

- Si a vaut 1, je lui ajoute 2, sinon je lui ajoute 3  */

    function exo3() {
        let a = 8
        let b = a + 1
        a += 1;
        a *= 2;
        b -= 5;
        b *= b;
        a += 3;
        if (a === 1) {
            return a += 2;
        } else {
            return a += 3;
        }
    }
    console.log(exo3());
    /*EXERCICE 04

Créer une variable et l'initialiser à 0.  

Tant que cette variable n'atteint pas 10, il faut : 

L 'afficher 

L’'incrementer  */

function incrementer() {
    chiffre = 0
    if (chiffre === 10) {
        return chiffre ++;
    } else {
        return 'La variable chiffre à atteint 10';
    }
}
console.log(incrementer());

/*EXERCICE 05

Amusez-vous avec les méthodes JavaScript d'une chaîne de caractères (string).

- Supprimer les espaces vides au début et à la fin de la chaîne de caractères "      Hello world    ".

- Séparer la chaîne en deux avec l'espace vide centrale en utilisant la méthode "split".

- Afficher le tableau retourné par la méthode .split() avec console.log*/

let hello = "     Hello world    ";
let hello2 = hello.trim(); // le fonction trim permet de retirer les blancs.
let separation = hello2.split(" ");
console.log(separation);

/*EXERCICE 06

Faire une fonction qui retourne true. 

Faire une fonction qui prend en paramètre une chaîne de caractères et qui retourne cette même  chaîne. 

Faire une fonction qui prend en paramètre deux chaînes de caractères et qui revoit la concaténation de ces deux chaînes 

Faire une fonction qui prend en paramètre deux nombres. 

La fonction doit retourner : 

'Le premier nombre est plus grand' si le premier nombre est plus grand que le deuxième 

'Le premier nombre est plus petit' si le premier nombre est plus petit que le deuxième 

'Les deux nombres sont identiques' si les deux nombres sont égaux
 */

 /*1*/function vraie() {
     return true;
 }
 console.log(vraie());

 /*2*/prenom =>  prenom;
 console.log(("vimal"));

 /*3*/function concat(salutation, prenom) {
     return `${salutation} ${prenom}`;
 }
 console.log(concat("bonjour", "vimal"));

 /*4*/function quiEstLePlusGrand(nombre1, nombre2) {
     if (nombre1 > nombre2) {
        return "Le premier nombre est plus grand";
     } else if (nombre2 > nombre1) {
         return "Le premier nombre est plus petit";
     } else {
         return "Les deux nombres sont identiques";
     }
 }
 console.log(quiEstLePlusGrand(27, 43));

 /*EXERCICE 07

Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".

1. Supprimer les doublons du tableau "valeurs"

2. Faite une concaténation du tableau "valeurs" en chaîne de caractères avec le séparateur suivant ", "

3. Afficher le résultat dans la console! */
 
const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure"];
    function removeDuplicates(prenoms) {
        let unique = {};
        prenoms.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true;
          }
        });
        return Object.keys(unique);
      }
      uniquePrenoms = removeDuplicates(prenoms)
      console.log(uniquePrenoms);
