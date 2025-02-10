let messages=[
    "No",
    "Are you sure?",
    "really sure!?",
    "Think again",
    "Last Chance",
    "Surely Not",
    "You might regret this!",
    "Give it a another thought!",
    "Are you absolutely Certain!",
    "This could be a mistake",
    "Have a heart!",
    "Don't be so cold",
    "Change of heart ?",
    "Wouldn't you reconsider",
    "Is that your final answer",
    "You are breaking my heart :(",
];

let msgIndex=0;
let increment=40;

const noButton = document.querySelector('.no');
const yesButton= document.querySelector('.yes');

function handleNoClick(){
    if(msgIndex < messages.length -1){
        msgIndex++;
    }
    noButton.textContent=messages[msgIndex];
    
    
    let currentWidth= yesButton.offsetWidth;
    let currentHeight= yesButton.offsetHeight;
    let currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize); 

    yesButton.style.width=`${currentWidth + increment}px`;
    yesButton.style.height=`${currentHeight + increment}px`;
    yesButton.style.fontSize=`${currentFontSize + 20}px`;
   
}

function handleYesClick(){

}

noButton.addEventListener('click', handleNoClick)