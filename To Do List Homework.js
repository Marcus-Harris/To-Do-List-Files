// let checkbox = document.getElementsByClassName('checkbox');
// let checkbox = document.querySelectorAll('.checkbox');
let listItems = document.querySelectorAll('.main-list-items');

// var removeListItem;
// function myFunction() {
//     removeListItem = setTimeout(boundFunction,1000);
// };

// // ---
// add an event listener to an Element
// run a function when that event is triggered
// coplete both the listening and the triggering after x time

//setTimeout(function to be executed after some time, time you want it delayed)
// setTimeout(listenForClickAndDeleteItem(checkbox,listItems),3000 );

// checkbox[0].addEventListener('click', function(event){
//     setTimeout(listItems[0].remove(),1000);
// });

// for (var i = 0; i < listItems.length; i++) {  
//     (function () {    
//     listItems[i].addEventListener('click', function (event) {
//             setTimeout(function () {
//                 listItems[i].remove();
//             }, 1000);
//         })
//     })
// };

listItems[0].addEventListener('click', function (event) {
    setTimeout(function () {
        listItems[0].remove();
    }, 1000)
});


listItems[1].addEventListener('click', function (event) {
    setTimeout(function () {
        listItems[1].remove();
    }, 1000)
});

listItems[2].addEventListener('click', function (event) {
    setTimeout(function () {
        listItems[2].remove();
    }, 1000)
});

listItems[3].addEventListener('click', function (event) {
    setTimeout(function () {
        listItems[3].remove();
    }, 1000)
});

// listItems[4].addEventListener('click', function(event){
//     setTimeout(function(){
//         listItems[4].remove(); },1000)
//     });



// DID NOT WORK
// let removeListItem = document.querySelectorAll('.main-list-items[0]').remove();

// let removeListItem0 = setTimeout(listItems[0].remove(),1000);

// checkbox[0].addEventListener('click', removeListItem0);


let addButton = document.querySelector("#add-button");
let inputField = document.querySelector("#myInput");

addButton.addEventListener('click', function (event) {
    let inputText = inputField.value;
    let listItem = document.createElement('li');
    listItem.className = "main-list-items";
    document.querySelector('ul').append(listItem);
    listItem.innerHTML = inputText;

    console.log(inputText);

    inputField.value = "";


    // let newItem = document.createElement('li');
});

// addButton.addEventListener('click', removeHTML);

// function removeHTML () {
//     document.querySelector("#myInput").value = ""
// };

// addButton.addEventListener('click', function(event){
//     let userprompt = prompt('Enter list item here');

//     let newItem = document.createElement('li');
//     var input = document.createTextNode(userprompt);
//     newItem.appendChild(input);
//     document.getElementById("theList").appendChild(newItem);
// });

  // let i;
  // for (i = 0; i < closer.length; i++) {
  //   closer[i].onclick = function () {
  //     let div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
