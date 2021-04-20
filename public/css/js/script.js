//Exo1
// let nombre1 = prompt("Donnez un chiffre")
// let nombre2 = prompt("Donnez un autre chiffre")
// let result = nombre 1 == nombre 2

// if(nombre1 == nombre2 ){
//     alert(
//         `Le ${nombre1} et le ${nombre2} sont-ils égaux? : ${result} `
//     )
// }
// else{
//     console.log("Pas égaux");
// }

// let nombre1 = prompt('Donne moi un chiffre');
// let nombre2 = prompt('Donne moi un autre chiffre');
// let result = nombre1 < nombre2;

// if (nombre1 < nombre2){
//     alert(`Le ${nombre1} est-il plus petit que le ${nombre2} ? : ${result}`)
// }

// let phrase = prompt('Tape un freestyle frérot');
// let estimation = prompt('A combien de caractéres estimes-tu ta phrase?')

// if (estimation == phrase.length){
//     console.log("Tu es un génie")
// }
// else if(estimation > phrase.length){
//     console.log(`Tu étais à ${estimation - phrase.length} de la bonne réponse `)
// }
// else{
//     console.log(`Tu étais à ${phrase.length - estimation} de la bonne réponse `)
// }

//Exo 3
// let x = prompt('Entre un chiffre');
// let y = prompt('Entre un chiffre');
// let z = prompt('Entre un chiffre');

// let num1 = parseInt(x);
// let num2 = parseInt(y);
// let num3 = parseInt(z);

// let result = num1 + num2;
// let compar = result > num3;

// if(result > num3){
// alert(`La somme du ${num1} + ${num2} est-elle plus grande que ${num3}? : ${compar} `);
// }
// else{
//     console.log("Pas plus grande")
// }

//Exo 5

//5
// let prenom = prompt('Entrez votre prenom');

// if (prenom == "") {
//     prenom = prompt('attention vous devez remplir le champs ci-dessus !!!');
//     if (prenom == "") {
//         alert('va te faire enculé');
//     } else {
//         alert(`Bonjour ${prenom}`)
//     }
// } else {
//     alert(`Bonjour ${prenom}`)
// }

//Exo 6

// let abonnement = prompt('Souhaitez vous vous abonner ?')

// let reponse;
// let reponse2;
// if (abonnement == 'Oui' || abonnement == 'oui'){
//     reponse = prompt("Luxe ou normal?")
//     if(reponse == "Luxe" || reponse == "luxe"){
//         alert("Félicitations vous avez choisi la formule luxe")
//     }
//     else if(reponse == "Normal" || reponse == "normale"){
//         alert("Merci pour votre abonnement")
//     }
//     else if(reponse == ""){
//         reponse2 = prompt("Vous n'avez rien coché, êtes-vous sûrs de rien choisir?")
//         if(reponse2 == "Oui" || reponse2 == "oui"){
//             alert("Dégage sale pauvre")
//         }
//         else if(reponse2 =="Non" || reponse == "non"){
//             prompt("Souhaitez vous la formule luxe ou normale?")
//         }
//     }
// }

//Exo7

// let question1 =prompt("Quelle est la capitale de Belgique?");
// let question2 =prompt("Quelle est la capitale de France?");
// let reponse1 = "Bruxelles";
// let reponse2 = "Paris";

// if (question1 != reponse1 && question2 != reponse2){
//     alert("Vous êtes paumés de ouf")
// }
// else if(question1 != reponse1 && question2 == reponse2){
// alert("Presque, il vous manque la question 1")
// }
// else if(question1 == reponse1 && question2 != reponse2){
// alert("Preque, il vous manque la question 2")
// }

//Exo 8
// let age = prompt("Donne ton âge ahzbe");

// if(age > 18 && age < 100 ){
//     alert("Vous êtes majeur, vous pouvez réserver");
// }
// else if(age <= 0){
//     alert("Tu essaies de me douiller");
// }
// else if(age < 18){
//     alert("Vous êtes mineurs, dégagez les picsous");
// }
// else if(age > 100){
//     alert("Vous êtes encore vivants?");
// }
// else if(age == 18){
//     alert("C'est tout juste sa mère");
// }

//9
// let x = confirm("est-ce que vous êtes riche ?");
// let y = confirm("voulez-vous partir en vacance ?");
// let z = confirm("est-ce que vous avez un chat ?");

// if (y != true) {
//     alert('pas de problème ne partez pas en vacance');
// } else if (x != true || z != false) {
//     alert("Même si vous le voulez, vous ne pouvez pas partir.");
// } else if (x != false && z != true && y != false) {
//     alert("Tout est parfait, partez en vacance !");
// } else if (x != false && z != true) {
//     alert("Vous pourriez partir en vacance si vous le voulez");
// }
//bonus
// else if ((x != false || z != true) || y != false) {
//     alert("Tout est parfait, partez en vacance !");
// } 