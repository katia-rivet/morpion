

//tableau et variable de tour

var tableauMorpion = [
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"],
    ["&nbsp;","&nbsp;","&nbsp;"]

];

// variable pour rejouer

/* var tableauReset = [
   [1,1,1],
   [1,1,1],
   [1,1,1]

]; */

var tour = 1

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

      /* if (tour==1) {
         document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X"
      } else{


         document.getElementById("spanny").textContent="C'est au tour du Joueur 2 : 0"
      } */

      /* while(document.getElementsByTagName('td').innerHTML == 1) */
      
     /*  var allTableCells = document.getElementsByTagName("td");
for(var i = 0, max = allTableCells.length; i < max; i++) {
    var node = allTableCells[i];

    //get the text from the first child node - which should be a text node
    var currentText = node.childNodes[0].nodeValue; 

    //check for 'one' and assign this table cell's background color accordingly 
    if (currentText === "1")
        node.style.textColor = "red";
}
      */ 
      
      
      /* var tds = document.getElementsByTagName("td");
      
      
      for(var k = 0; k < tds.length; k++) {
         tds[k].innerHTML = text.replace('1','<span class="red">1</span> ')
            
         }
 */


      
      /* for (let index = 0; index < array.length; index++) {
         const element = array[index];
         
      } */
   
   
}

// cacher les 1


/* while( ) */

// fonction de jeu

function playMove(i,j){  //sur un clic d'une case
   
   if (tableauMorpion[i][j] == "&nbsp;") {
      
      
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

      alert('Déja joué !')

   }


   
   

      
      
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
            
               {    if(

                           (confirm('Gagné ! Rejouer?'))      
                      ) {

                        tableauMorpion = [
                           ["&nbsp;","&nbsp;","&nbsp;"],
                           ["&nbsp;","&nbsp;","&nbsp;"],
                           ["&nbsp;","&nbsp;","&nbsp;"]
                       
                       ];
                       tour = 1;
                        console.log(tableauMorpion);
                        /* console.log(tableauReset); */
                        afficher();
                        document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X";
                      }else{

                        document.getElementById("spanny").textContent="Merci d'avoir joué !";
                      }
            
            





               }else if(

                  (tableauMorpion[0].includes("&nbsp;") == false )  
                  &&
                  ((tableauMorpion[1].includes("&nbsp;") == false ) )
                  &&
                  ((tableauMorpion[2].includes("&nbsp;") == false ) )



               ){

                  if(

                     (confirm('PAT ! Rejouer?'))      
                ) {

                  tableauMorpion = [
                     ["&nbsp;","&nbsp;","&nbsp;"],
                     ["&nbsp;","&nbsp;","&nbsp;"],
                     ["&nbsp;","&nbsp;","&nbsp;"]
                 
                 ];
                 tour=1;
                  afficher();
                  document.getElementById("spanny").textContent="C'est au tour du Joueur 1 : X";
                  
                  
               } else{


                  document.getElementById("spanny").textContent="Merci d'avoir joué !";

               }
                }

               
               


/*  && 
         
            (tableauMorpion[i][j] != 0)
 */
      
   

      // Si case cliquée != 0

         //afficher "déja jouée !"
         //break ?



      //else si conditions de victoire remplies

            //Afficher "gagné ! "
            //Proposer de rejouer

               //si oui : 

                  //reste tableau

               //else : break ?

      // else si conditions de pat remplies

         //Afficher "pat ! "
         //Proposer de rejouer

            //si oui : 

               //reste tableau

            //else : break ?

      
      //else      
                  //si tour = 1

                     //remplacer la valeur par X dans le tableau
                     // tour = 2


                  //sinon (tour = 2)
                  
                     //remplacer la valeur par O dans le tableau
                     // tour = 1




   
}

// Pour n'afficher que les valeurs 0 transparentes, et 0 et X opaques

// while (  ) etc etc









/* function playMove2(){

   console.log('coucou');
} */