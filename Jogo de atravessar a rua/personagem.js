//PERSONAGEM//
// x, y, altura, largura//
dimensoesPersonagem = [120, 365, 35, 35]

let meuspontos = 0;


function mostraPersonagem(){
  image(personagem, dimensoesPersonagem[0], dimensoesPersonagem[1], dimensoesPersonagem[2], dimensoesPersonagem[3]);
  
}
function movimentopersonagem(){
  if (keyIsDown(UP_ARROW)){
      
    dimensoesPersonagem[1] -= 3;
  }
  if (keyIsDown(DOWN_ARROW))
   {
    dimensoesPersonagem[1] += 3;
   }
  if (keyIsDown(RIGHT_ARROW)){
    
    dimensoesPersonagem[0] += 2;
  }
  if (keyIsDown(LEFT_ARROW)){
    
    dimensoesPersonagem[0] -= 2;
    
  }
    
  
  if (dimensoesPersonagem[1] + dimensoesPersonagem[2] < 0){
    {
    dimensoesPersonagem[1] = 365;
      
    }
  }}
  
function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    
    colisao = collideRectRect(xCarros[i],yCarros[i],largCarros[0],altCarros[0],dimensoesPersonagem[0],dimensoesPersonagem[1],dimensoesPersonagem[2],dimensoesPersonagem[3]);
  
  if (colisao) {
    
    dimensoesPersonagem[1] = 365;
      
      meuspontos -= 1;
      
      colisaosom.play();
    
    }
  if (meuspontos < 0){
    
    meuspontos = 0;
    
    }    
  } 
}

function pontos(){
  
  if (dimensoesPersonagem[1] + dimensoesPersonagem[2] < 4) {
           
     { meuspontos = meuspontos += 1;
      ponto();
      
        
      pontopositivo.play();
            }
  
    
    
  }
  }

function ponto(){
   
  dimensoesPersonagem[1] = 365;
  
}