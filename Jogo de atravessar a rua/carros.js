//CARROS//
let yCarros = [40, 100, 150, 210,270,320]
let altCarros = [40]
let largCarros = [40]
let velxCarros = [3,3.5,4,2.5,6.2,5.1]
let xCarros = [600,600,600,600,600,600]

// FUNCIONAMENTO CARROS //
function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    
       image(imagemCarros[i], xCarros[i], yCarros[i], altCarros[0],                largCarros[0]);
      
  } 
}

function movimentoCarros(){
  for (let i = 0; i < velxCarros.length; i = i + 1) {
  xCarros[i] -= velxCarros[i] ;
    }
}

function loopcarros(){ 
  
if (xCarros[0]+ largCarros[0] < 0)
      
     xCarros[0] = 600;
          
        
 if (xCarros[1]+ largCarros[0] < 0)
      
      xCarros[1] = 600;
          
      
  if (xCarros[2]+ largCarros[0] < 0)
      
      xCarros[2] = 600;

}

function loops(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    
    if (passoutela(xCarros[i])) {
      
      xCarros[i] = 600;
    }  
  }
}
       
function passoutela(xCarro){
  
  return (xCarro + largCarros[0] < 0 );
   
  
}
  


  
  