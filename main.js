
// help box

const helpmodal = document.querySelector('.help_box');
const openhelp = document.querySelector('.help_button');
const closehelp = document.querySelector('.help_close');

openhelp.addEventListener('click',() => 
 {
    helpmodal.show();
 }
)

closehelp.addEventListener('click',() => 
 {
    helpmodal.close();
 }
)


//creature buttons

const occamy = document.getElementById('occamy');
const billywig = document.getElementById('billywig');
const wyvern = document.getElementById('wyvern');
const niffler = document.getElementById('niffler');
const demiguise = document.getElementById('demiguise');
const manticore = document.getElementById('manticore');
const qilin = document.getElementById('qilin');
const bowtruckle = document.getElementById('bowtruckle');
const mooncalf = document.getElementById('mooncalf');
const thunderbird = document.getElementById('thunderbird');
const phoenix = document.getElementById('phoenix');
const doxy = document.getElementById('doxy');

//definig innerhtml elements
const img = document.querySelector('.creature_image');
const title = document.querySelector('.creature_name');
const sign = document.querySelector('.creature_sign');
const desc = document.querySelector('.creature_desc');
const audio =  document.querySelector('.creature_audio');


// creature modal

const popup = document.querySelector('.creature_box');
const creature_close = document.querySelector('.creature_close');

/*
const submit_button = document.querySelector('.submit');
submit_button.addEventListener("click", ()=>{
    popup.style.display = "block";
}
);
*/

creature_close.addEventListener("click", ()=>{
    popup.style.display = "none";
    audio.pause();
}
);

// creature modal via buttons

occamy.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='OCCAMY';
    img.src='images/occamy.png';
    sign.innerHTML = 'Aquarius';
    desc.innerHTML="Just like the occamy, you are innovative, progressive, and shamelessly revolutionary. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.";
    audio.src='audios/occamy.mp3';
    audio.play();
});

billywig.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='BILLYWIG';
    img.src='images/billywig.png';
    sign.innerHTML = 'Pisces';
    desc.innerHTML="Just like billywig, Pisces is an intuitive, sensitive, and empathetic sign. As the final sign, Pisces has absorbed every lesson, the joys, the pain, the hopes, and the fears learned by all of the other signs.";
    audio.src='audios/billywig.mp3';
    audio.play();
});

wyvern.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='WYVERN';
    img.src='images/wyvern.png';
    sign.innerHTML = 'Aries';
    desc.innerHTML="Like wyvern, the first sign of the zodiac, Aries, Bold and ambitious, Aries dives headfirst into even the most challenging situations, and they will make sure they always come out on top!";
    audio.src='audios/wyvern.mp3';
    audio.play();
});

niffler.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='NIFFLER';
    img.src='images/niffler.png';
    sign.innerHTML = 'Aries';
    desc.innerHTML="Like Niffler, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
    audio.src='audios/niffler.mp3';
    audio.play();
});

demiguise.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='DEMIGUISE';
    img.src='images/demiguise.png';
    sign.innerHTML = 'Gemini';
    desc.innerHTML="Have you ever been so busy that you wished you could clone yourself just to get everything done? Like Demiguise, that's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity.";
    audio.src='audios/demiguise.mp3';
    audio.play();
});

manticore.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='MANTICORE';
    img.src='images/manticore.png';
    sign.innerHTML = 'Cancer';
    desc.innerHTML="Like manticore, Cancer seamlessly weaves between the sea and shore representing Cancer's ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces.";
    audio.src='audios/manticore.mp3';
    audio.play();
});

qilin.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='QILIN';
    img.src='images/qilin.png';
    sign.innerHTML = 'Leo';
    desc.innerHTML="Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. Like Qilin, they're delighted to embrace the royal status: Vivacious, theatrical, and fiery.";
    audio.src='audios/qilin.mp3';
    audio.play();
});

bowtruckle.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='BOWTRUCKLE';
    img.src='images/bowtruckle.png';
    sign.innerHTML = 'Virgo';
    desc.innerHTML="Like bowtruckle, Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture.";
    audio.src='audios/bowtruckle.mp3';
    audio.play();
});

mooncalf.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='MOONCALF';
    img.src='images/mooncalf.png';
    sign.innerHTML = 'Libra';
    desc.innerHTML="Just like mooncalf, it is balance, harmony, and justice define Libra energy. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life, especially when it comes to matters of the heart.";
    audio.src='audios/mooncalf.mp3';
    audio.play();
});

thunderbird.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='THUNDERBIRD';
    img.src='images/thunderbird.png';
    sign.innerHTML = 'Scorpio';
    desc.innerHTML="Just like a thunderbird, you are elusive and mysterious. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through the physical and unseen realms.";
    audio.src='audios/thunderbird.mp3';
    audio.play();
});

phoenix.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='PHOENIX';
    img.src='images/phoenix.png';
    sign.innerHTML = 'Sagittarius';
    desc.innerHTML="Just like the phoenix, the last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
    audio.src='audios/phoenix.mp3';
    audio.play();
});

doxy.addEventListener('click', function(){
    popup.style.display = "block";
    title.innerHTML='DOXY';
    img.src='images/doxy.png';
    sign.innerHTML = 'Capricorn';
    desc.innerHTML="Just like the Doxy, Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication are the only way to scale.";
    audio.src='audios/doxy.mp3';
    audio.play();
});

// creature modal via date selected
const submit_button = document.querySelector('.submit');

submit_button.addEventListener('click', function(){

const date_selected = document.getElementById('date_input').value;
const bday = new Date(date_selected);
const month = bday.getMonth() + 1;
const day = bday.getDate();
popup.style.display = "block";


if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    title.innerHTML='DOXY';
    img.src='images/doxy.png';
    sign.innerHTML = 'Capricorn';
    desc.innerHTML="Just like the Doxy, Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication are the only way to scale.";
    audio.src='audios/doxy.mp3';
    audio.play();
    
  } 
  
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    title.innerHTML='PHOENIX';
    img.src='images/phoenix.png';
    sign.innerHTML = 'Sagittarius';
    desc.innerHTML="Just like the phoenix, the last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
    audio.src='audios/phoenix.mp3';
    audio.play();
  } 
  
  else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    title.innerHTML='THUNDERBIRD';
    img.src='images/thunderbird.png';
    sign.innerHTML = 'Scorpio';
    desc.innerHTML="Just like a thunderbird, you are elusive and mysterious. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through the physical and unseen realms.";
    audio.src='audios/thunderbird.mp3';
    audio.play();
  } 
  
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    title.innerHTML='MOONCALF';
    img.src='images/mooncalf.png';
    sign.innerHTML = 'Libra';
    desc.innerHTML="Just like mooncalf, it is balance, harmony, and justice define Libra energy. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life, especially when it comes to matters of the heart.";
    audio.src='audios/mooncalf.mp3';
    audio.play();
  } 
  
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    title.innerHTML='BOWTRUCKLE';
    img.src='images/bowtruckle.png';
    sign.innerHTML = 'Virgo';
    desc.innerHTML="Like bowtruckle, Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture.";
    audio.src='audios/bowtruckle.mp3';
    audio.play();
  } 
  
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    title.innerHTML='QILIN';
    img.src='images/qilin.png';
    sign.innerHTML = 'Leo';
    desc.innerHTML="Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. Like Qilin, they're delighted to embrace the royal status: Vivacious, theatrical, and fiery.";
    audio.src='audios/qilin.mp3';
    audio.play();
  } 
  
  else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    title.innerHTML='MANTICORE';
    img.src='images/manticore.png';
    sign.innerHTML = 'Cancer';
    desc.innerHTML="Like manticore, Cancer seamlessly weaves between the sea and shore representing Cancer's ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces.";
    audio.src='audios/manticore.mp3';
    audio.play();
  } 
  
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    title.innerHTML='DEMIGUISE';
    img.src='images/demiguise.png';
    sign.innerHTML = 'Gemini';
    desc.innerHTML="Have you ever been so busy that you wished you could clone yourself just to get everything done? Like Demiguise, that's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity.";
    audio.src='audios/demiguise.mp3';
    audio.play();
  } 
  
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    title.innerHTML='NIFFLER';
    img.src='images/niffler.png';
    sign.innerHTML = 'Aries';
    desc.innerHTML="Like Niffler, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
    audio.src='audios/niffler.mp3';
    audio.play();
  } 
  
  else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    title.innerHTML='WYVERN';
    img.src='images/wyvern.png';
    sign.innerHTML = 'Aries';
    desc.innerHTML="Like wyvern, the first sign of the zodiac, Aries, Bold and ambitious, Aries dives headfirst into even the most challenging situations, and they will make sure they always come out on top!";
    audio.src='audios/wyvern.mp3';
    audio.play();
  } 
  
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    title.innerHTML='BILLYWIG';
    img.src='images/billywig.png';
    sign.innerHTML = 'Pisces';
    desc.innerHTML="Just like billywig, Pisces is an intuitive, sensitive, and empathetic sign. As the final sign, Pisces has absorbed every lesson, the joys, the pain, the hopes, and the fears learned by all of the other signs.";
    audio.src='audios/billywig.mp3';
    audio.play();
  } 
  
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    title.innerHTML='OCCAMY';
    img.src='images/occamy.png';
    sign.innerHTML = 'Aquarius';
    desc.innerHTML="Just like the occamy, you are innovative, progressive, and shamelessly revolutionary. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.";
    audio.src='audios/occamy.mp3';
    audio.play();
  }

  else{
    title.innerHTML='OOPS!';
    img.src='images/error.png';
    sign.innerHTML = 'Try Again!';
    desc.innerHTML="Invalid Input, please select a valid date.";
  }
});





   
   
    