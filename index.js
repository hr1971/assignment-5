
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


const heartButton = document.getElementsByClassName("heart-btn");

const copyButton = document.getElementsByClassName("copy-btn");

 

for(let copy of copyButton){
    copy.addEventListener('click',function (){

        const card = copy.closest('.card');
        const number = card.querySelector('.number').innerText;

        // const quantity = getElement('copy-count').innerText;

         
        const quantityElement = getElement('copy-count');

        const quantity = Number (quantityElement.innerText) + 1;
        quantityElement.innerText = quantity;

        // getElement('copy-count').innerText= currentQuantity; 
        alert(`The Number is copy: ${number} ...`);
    })
}

for(let heart of heartButton){
    heart.addEventListener('click',function(){

         const quantity = getElement('heart-plus').innerText;

        const currentQuantity = Number (quantity) + 1;
        getElement('heart-plus').innerText= currentQuantity;
    })
}

let coin = 100;
const coinElement = document.getElementById('coins');

const historyList = document.getElementById('history-list');

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click',() =>{
    historyList.innerHTML = '';
})

const callButtons = document.querySelectorAll('.call-btn');

callButtons.forEach(btn => {
    btn.addEventListener('click',function(){
        const card = btn.closest('.card');

        const service = card.querySelector('.service').innerText;
        const number = card.querySelector('.number').innerText;

        if (coin >= 20) {
            coin -= 20;
            coinElement.innerText = coin;

            alert(`Calling ${service} at ${number} ...`);

            const now = new Date();
            const time = now.toLocaleTimeString();

           const div = document.createElement('div');
           div.style.display = "flex";
           div.style.justifyContent = "space-between";
           div.style.alignItems = "center";
           div.style.padding = "6px 10px";
           div.style.gap = "4px";
           div.style.borderBottom = "1px solid #ddd";

           const left = document.createElement('div');
           left.innerHTML = `${service}<br> ${number}`;

           const right = document.createElement('div')
           right.innerText = `${time}`;
           
           right.style.fontSize = "0.9em";
           right.style.textAlign = "right";

           div.appendChild(left);
           div.appendChild(right);
           
         

            historyList.appendChild(div);
        }else{
            alert('not enough coin');
        }
    })
})

document.addEventListener('DOMContentLoaded',() => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click',() => {
            const card = button.closest('.card');

            const numberElement = card.querySelector('.number');

            const textToCopy = numberElement.textContent;

            navigator.clipboard.writeText(textToCopy)
            .then(() => {
                updateCopyCount(button);
            });
        });
    });

    
});


