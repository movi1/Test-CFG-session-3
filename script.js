// // adding element through JS

// const title = document.createElement('h1');
// title.innerText = "Hi!";
// title.style.color = 'red';

// const p = document.createElement('p');
// p.innerText = "I'm using JS to add HTML elements!";

// // adding elements through JS + IDs

// const otherTitle = document.createElement('h1');
// otherTitle.setAttribute('id' , 'myName');
// otherTitle.innerText = 'My name is Moira';

// document.body.appendChild(title);
// document.body.appendChild(otherTitle);
// document.body.appendChild(p); 
// // emphasis on the appendChild to be able to display it
// // document.body.appendChild(otherTitle);

// // this can now be called with getElementById
// const getElementById = document.getElementById('myName');
// console.log(gettingOtherTitleWithId.innerText);

// // at this point you can add a CSS FILE AND CHANGE IT
// // USING THE ID

// let userName = prompt("Enter your name:");
// function GetUserName (name){
//     return name;
// }
// let currentUserName = GetUserName(userName);
// console.log(currentUserName);


// OBJECTS
let myBook = {
    title: 'Crooked Kingdom',
    author: 'Leigh Bardugo',
    releaseDate: '2016-09-27',
    seriesDetails: {
        seriesType: 'Duology',
        universeName: 'Grishaverse',
        numberInSeries: 2
    },
    // BOOLEAN
    readSeries: true,
    rating: function(rating) {
        return `${rating}/5`;
    }
}
console.log(myBook.title + ' by ' + myBook['author']);
console.log(`Book #${myBook['seriesDetails']['numberInSeries']} of nthe ${myBook.seriesDetails}`);
console.log("I rate it " + myBook.rating(5))