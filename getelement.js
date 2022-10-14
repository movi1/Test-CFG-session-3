const title = document.getElementById('mainTitle');
// after adding this,open the console and type 'title'
console.log(title)

const changeTitleButton = document.getElementById('ChangeTitleBtn');
changeTitleButton.style.width = '100px';
changeTitleButton.style.fontSize = '20px';

// Center everything in our body;
document.body.style.textAlign = 'center';
title.style.color = 'red';

// Event Listener function
changeTitleButton.addEventListener('click', function(event) {
    console.log('Click Detected');
    // innerHTML vs innerText = innerHTML understand tags.
    // it takes whats in it as HTML code, if this was innerText
    // <br> would appear as text
    title.innerHTML = 'HelloWorld! <br> Look at me coding!';
    title.style.fontFamily = 'Courier New';
    title.style.backgroundColor = 'orange';
    title.style.padding = '30px';
    title.style.border = '5px dashed red';
    title.style.borderRadius = '20px'
});

// Function for event attribute
function ChangeBackGroundColor() {
    // run on mouse
    title.style.backgroundColor = "blanchedalmond";
}
function RemoveBackGroundColor() {
    title.style.backgroundColor = "transparent";
}