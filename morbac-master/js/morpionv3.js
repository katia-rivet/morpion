

//tableau et variable de tour

var tableauMorpion = [
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"]

];


var tour = 1;

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

    
   
   
}



// fonction de jeu

function playMove(i,j){  //sur un clic d'une case
   
   if (tableauMorpion[i][j] == "&nbsp;") {
      
   // Tour des joueurs si les cases sont libres   
      if (tour==1) {
      
         
         tableauMorpion[i][j] = "X";
         console.log(i);
         console.log(j);
         console.log(tableauMorpion[0][0]);
         afficher();
         tour = 2;
         document.getElementById("spanny").textContent="C'est au tour du Joueur 2 : 0";
         
      }else{
         
         
         tableauMorpion[i][j] = "O";
         console.log(i);
         console.log(j);
         console.log(tableauMorpion[0][0]);
         afficher();
         tour = 1;
         document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X";
      }
      
   }else{

      // Si plus de case libre
      alert('Déja joué !')

   }


   
   

   // Condition de victoire

   if(
      (            
         ( (tableauMorpion[0][0] == tableauMorpion[0][1]) && (tableauMorpion[0][1] == tableauMorpion[0][2]) && ((tableauMorpion[0][1] == 'X' ) || (tableauMorpion[0][1] == 'O' ) )  )      
         ||  
         ( (tableauMorpion[1][0] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[1][2]) && ((tableauMorpion[1][2] == 'X' ) || (tableauMorpion[1][2] == 'O' ) ) )
         || 
         ( (tableauMorpion[2][0] == tableauMorpion[2][1]) && (tableauMorpion[2][1] == tableauMorpion[2][2]) && ((tableauMorpion[2][2] == 'X' ) || (tableauMorpion[2][2] == 'O' ) ) )
         || 
         (  (tableauMorpion[0][0] == tableauMorpion[1][0]) && (tableauMorpion[1][0]) == (tableauMorpion[2][0]) && ((tableauMorpion[2][0] == 'X' ) || (tableauMorpion[2][0] == 'O' ) ) )
         ||
         (  (tableauMorpion[0][1] == tableauMorpion[1][1]) && (tableauMorpion[1][1]) == (tableauMorpion[2][1]) && ((tableauMorpion[2][1] == 'X' ) || (tableauMorpion[2][1] == 'O' ) ) )
         ||
         (  (tableauMorpion[0][2] == tableauMorpion[1][2]) && (tableauMorpion[1][2]) == (tableauMorpion[2][2]) && ((tableauMorpion[2][2] == 'X' ) || (tableauMorpion[2][2] == 'O' ) ) )
         ||
         (  (tableauMorpion[0][0] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[2][2]) && ((tableauMorpion[2][2] == 'X' ) || (tableauMorpion[2][2] == 'O' ) )  )             
         ||
         (   (tableauMorpion[0][2] == tableauMorpion[1][1]) && (tableauMorpion[1][1] == tableauMorpion[2][0]) && ((tableauMorpion[2][0] == 'X' ) || (tableauMorpion[2][0] == 'O' ) )  )
      ) 


   )
   
      { if(
         // Victoire et proposition de rejouer
         (confirm('Gagné ! Rejouer?'))      
         ) {
         // Reset tableau pour rejouer
         tableauMorpion = [
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"]
         
         ];
         tour = 1;

         // Message pour indiquer les tours des joueurs
         console.log(tableauMorpion);
         afficher();
         document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X";
         }else{

         document.getElementById("spanny").textContent="Merci d'avoir joué !";
         }
   
   



      // Condition d'égalité et fin de partie

      }else if(

         (tableauMorpion[0].includes("&nbsp;") == false )  
         &&
         ((tableauMorpion[1].includes("&nbsp;") == false ) )
         &&
         ((tableauMorpion[2].includes("&nbsp;") == false ) )



      ){ if(
         // Egalité et proposition de rejouer
         (confirm('PAT ! Rejouer?'))      
         ) {
         // Reset tableau pour rejouer
         tableauMorpion = [
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"],
            ["&nbsp;","&nbsp;","&nbsp;"]
         
         ];
         tour=1;
         afficher();
         document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X";
         
         
      } else{

         // Message fin de jeu
         document.getElementById("spanny").textContent="Merci d'avoir joué !";

      }
         }

   
}











