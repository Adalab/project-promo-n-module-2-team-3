'use strict';
//Variables
const radioAll= document.querySelectorAll('.js_radio');
const textSection= document.querySelector('.js_text_section');
//resultLinkAll
//resultTextAll

//Funciones
function paintDiv(clickedEl){
    if(clickedEl.value==='blue_scale'){
      textSection.classList.remove('color_red_text');
      textSection.classList.remove('color_mix_text');
      textSection.classList.add('color_default_text'); 
    }else if(clickedEl.value==='red_scale'){
      textSection.classList.remove('color_default_text');
      textSection.classList.remove('color_mix_text');
      textSection.classList.add('color_red_text');     
    }else if( clickedEl.value==='mix_scale'){
      textSection.classList.remove('color_default_text');
      textSection.classList.remove('color_red_text');
      textSection.classList.add('color_mix_text'); 
    }       
}
function paintText(clickedEl){
   for (const resultText of resultTextAll) {
    if(clickedEl.value==='blue_scale'){
      resultText.classList.remove('color_red_text');
      resultText.classList.remove('color_mix_text');
      resultText.classList.add('color_default_text'); 
    }else if(clickedEl.value==='red_scale'){
      resultText.classList.remove('color_default_text');
      resultText.classList.remove('color_mix_text');
      resultText.classList.add('color_red_text');     
    }else if( clickedEl.value==='mix_scale'){
      resultText.classList.remove('color_default_text');
      resultText.classList.remove('color_red_text');
      resultText.classList.add('color_mix_text'); 
    }        
  }

}
function paintPalettes(clickedEl){
  for (const resultLink of resultLinkAll) {
    if(clickedEl.value==='blue_scale'){
      resultLink.classList.remove('color_red_circle');
      resultLink.classList.remove('color_mix_circle');
      resultLink.classList.add('color_default_circle'); 
    }else if(clickedEl.value==='red_scale'){
      resultLink.classList.remove('color_default_circle');
      resultLink.classList.remove('color_mix_circle');
      resultLink.classList.add('color_red_circle');     
    }else if( clickedEl.value==='mix_scale'){
      resultLink.classList.remove('color_default_circle');
      resultLink.classList.remove('color_red_circle');
      resultLink.classList.add('color_mix_circle'); 
    }        
  }
}
function handlePaintPalettes(ev){
  const clickedEl= ev.currentTarget;
  console.log(clickedEl);
  paintPalettes(clickedEl);
  paintDiv(clickedEl);
  paintText(clickedEl);

}

//Listener
function listenerRadio(){
  for (const radio of radioAll) {
    radio.addEventListener('click', handlePaintPalettes);
  }
}

//Llamadas a funciones
listenerRadio();
