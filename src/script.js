var synth = window.speechSynthesis;


const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');


const data = [
    {
        image: './img/hungry.jpg',
        text: "i'm Hungry"
    },

    {
        image: './img/sad.jpg',
        text: "i'm sad"
    },


    {
        image: './img/weak.jpg',
        text: "i'm weak"
    },


    {
        image: '/img/angry.jpg',
        text: "i'm angry"
    },

    
    {
        image: '/img/happy.jpg',
        text: "i'm happy"
    },

    
    {
        image: '/img/worried.jpg',
        text: "i'm worried"
    },

    {
        image: './img/dancing.jpg',
        text: "i'm dancing"
    },

    {
        image: './img/eating.jpg',
        text: "i am eating"
    },

   

];

data.forEach(createBox);

// create speech boxes

function createBox(item){
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
        <img src ="${image}" alt="${text}" />
        <p class = "info">${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        // add Active effect

        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });
 main.appendChild(box);   

}

// speech syth

const message = new SpeechSynthesisUtterance();

//storing voices

let voices =[];

function getVoices(){
    voices = speechSynthesis.getVoices();

    voices.forEach(voices => {
        const option = document.createElement('option');

        option.value = voices.name;
        option.innerHTML = `${voices.name} ${voices.lang}`;

        voicesSelect.appendChild(option);
    });
}



//set text


function setTextMessage(text){
    message.text = text;
}

//speak text
function speakText(){
    speechSynthesis.speak(message);
}
//set voice

function setVoice(e){
    message.voice = voices.find(voices => voices.name === e.target.value );

}
//change voices

speechSynthesis.addEventListener('voiceschanged',getVoices);

toggleBtn.addEventListener('click', () => 
document.getElementById('text-box')
.classList.toggle('show')
);

closeBtn.addEventListener('click', () => 
document.getElementById('text-box')
.classList.remove('show')
);

voicesSelect.addEventListener('change',setVoice);


readBtn.addEventListener('click', () =>{
    setTextMessage(textarea.value);
    speakText();
});



getVoices(); 
