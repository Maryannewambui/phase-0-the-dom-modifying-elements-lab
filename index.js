// Write your code here!
main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Maryanne is the champion';

const body = document.querySelector('body');

body.appendChild(newHeader);
