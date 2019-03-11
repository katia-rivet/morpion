//MORPION
//tableau et variables de tour, de message en fonction du tour, et de deux des trois composantes qui formeront la valeur à introduire dans le tableau
//de cette manière, on pourra jouer sur les couleurs

var tableauMorpion = [
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"]

];


var tour = 1;
var joueur1 = "C'est au tour du Joueur 1 : <span class='blue'>X</span>"
var joueur2 = "C'est au tour du Joueur 2 : <span class='red'>O</span>"
var spanX1 = "<span class='blue'>"
var spanX2 = "</span>"
var spanO1 = "<span class='red'>"
var spanO2 = "</span>"
var scoreX = 0
var scoreO = 0
var scorePat = 0

// transmettre les valeurs du tableau dans la table HTML

function afficher(){
  
      console.log('coucou');
      document.getElementById('box00').innerHTML=tableauMorpion[0][0];
      document.getElementById('box01').innerHTML=tableauMorpion[0][1];
      document.getElementById('box02').innerHTML=tableauMorpion[0][2];
      document.getElementById('box10').innerHTML=tableauMorpion[1][0];
      document.getElementById('box11').innerHTML=tableauMorpion[1][1];
      document.getElementById('box12').innerHTML=tableauMorpion[1][2];
      document.getElementById('box20').innerHTML=tableauMorpion[2][0];
      document.getElementById('box21').innerHTML=tableauMorpion[2][1];
      document.getElementById('box22').innerHTML=tableauMorpion[2][2];
      document.getElementById('scoreX').innerHTML=spanX1+scoreX+spanX2;
      document.getElementById('scoreO').innerHTML=spanO1+scoreO+spanO2;
      document.getElementById('scorePat').innerHTML=scorePat;
   
}

// fonction de jeu

function playMove(i,j){  //sur un clic d'une case
   
   if (tableauMorpion[i][j] == "&nbsp;") {
      
   // Tour des joueurs si les cases sont libres   
      if (tour==1) { //Si c'est le tour du joueur 1 : 
                     //On ajoute une valeur X au tableau, et on change la variable de tour, et de variable de message de tour
         
         tableauMorpion[i][j] = spanX1+"X"+spanX2;
         console.log(i);
         console.log(j);
         console.log(tableauMorpion[0][0]);
         afficher();
         tour = 2;
         document.getElementById("spanny").innerHTML= joueur2;
         
      }else{   //Si c'est le tour du joueur 2 : 
               //On ajoute une valeur O au tableau, et on change la variable de tour, et de variable de message de tour
         
         
         tableauMorpion[i][j] = spanO1+"O"+spanO2;
         console.log(i);
         console.log(j);
         console.log(tableauMorpion[0][0]);
         afficher();
         tour = 1;
         document.getElementById("spanny").innerHTML= joueur1;
      }
      
   }else{  //sila case à déja été jouée

      
      alert('Déja joué !')
   }

   // Condition de victoire
   // si une ligne, une colonne ou une diagonale  ne contient que des valeurs (spanX1+'X'+spanX2) ou que des valeurs (spanO1+'O'+spanO2)
   // case1 == case2 ET case2==case3 ET ( case3 == X   OU  case3 == O )
   if(
      (            
         ( (tableauMorpion[0][0] == tableauMorpion[0][1]) && (tableauMorpion[0][1] == tableauMorpion[0][2]) && ((tableauMorpion[0][1] == spanX1+"X"+spanX2 ) || (tableauMorpion[0][1] == spanO1+"O"+spanO2 ) )  )      
         ||  
         ( (tableauMorpion[1][0] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[1][2]) && ((tableauMorpion[1][2] == spanX1+"X"+spanX2 ) || (tableauMorpion[1][2] == spanO1+"O"+spanO2 ) ) )
         || 
         ( (tableauMorpion[2][0] == tableauMorpion[2][1]) && (tableauMorpion[2][1] == tableauMorpion[2][2]) && ((tableauMorpion[2][2] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][2] == spanO1+"O"+spanO2 ) ) )
         || 
         ( (tableauMorpion[0][0] == tableauMorpion[1][0]) && (tableauMorpion[1][0]) == (tableauMorpion[2][0]) && ((tableauMorpion[2][0] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][0] == spanO1+"O"+spanO2 ) ) )
         ||
         ( (tableauMorpion[0][1] == tableauMorpion[1][1]) && (tableauMorpion[1][1]) == (tableauMorpion[2][1]) && ((tableauMorpion[2][1] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][1] == spanO1+"O"+spanO2 ) ) )
         ||
         ( (tableauMorpion[0][2] == tableauMorpion[1][2]) && (tableauMorpion[1][2]) == (tableauMorpion[2][2]) && ((tableauMorpion[2][2] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][2] == spanO1+"O"+spanO2 ) ) )
         ||
         ( (tableauMorpion[0][0] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[2][2]) && ((tableauMorpion[2][2] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][2] == spanO1+"O"+spanO2 ) )  )             
         ||
         ( (tableauMorpion[0][2] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[2][0]) && ((tableauMorpion[2][0] == spanX1+"X"+spanX2 ) || (tableauMorpion[2][0] == spanO1+"O"+spanO2 ) )  )
      ) 
   )

      { 
         // ajouter aux scores
         if(tour==2){

            scoreX=scoreX+1;
         }else if(tour==1){

            scoreO=scoreO+1;
         }
         
         
         
         if(
         // Victoire et proposition de rejouer
         (confirm('Gagné ! Rejouer ?'))      
         ) {
         // Reset tableau pour rejouer, et de la variable de tour
         tableauMorpion = [
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"]
         
         ];
         tour = 1;

         // Message pour indiquer les tours des joueurs
         console.log(tableauMorpion);
         afficher();
         document.getElementById("spanny").innerHTML=joueur1;
            

         }else{
            //Si le joueur ne veut pas rejouer
         document.getElementById("spanny").innerHTML="Merci d'avoir joué !";
         }
   
      // Condition d'égalité et fin de partie
      // Si pas de victoire, et que toutes les cases sont pleines

      }else if(

         (tableauMorpion[0].includes("&nbsp;") == false )  
         &&
         (tableauMorpion[1].includes("&nbsp;") == false ) 
         &&
         (tableauMorpion[2].includes("&nbsp;") == false ) 

         )
      
      {   if(
            // Egalité et proposition de rejouer
            (confirm('PAT ! Rejouer ?'))      
            ) {
            // Reset tableau pour rejouer
            tableauMorpion = [
               ["&nbsp;","&nbsp;","&nbsp;"],
               ["&nbsp;","&nbsp;","&nbsp;"],
               ["&nbsp;","&nbsp;","&nbsp;"]
            
            ];
            tour=1;
            scorePat = scorePat+1;
            afficher();
            document.getElementById("spanny").innerHTML=joueur1;
            
            
            }else{

            // Message fin de jeu, si le joueur ne veut pas rejouer
            document.getElementById("spanny").textContent="Merci d'avoir joué !";

            }
      } 
}











