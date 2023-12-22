//NO NEED OF JAVASCRIPT


////************************relative create element************************

// function repeatElements() {
//     var screenWidth = window.innerWidth;
//     var dot = document.getElementById('circle');
//     document.body.innerHTML='';
//     // Calculate the number of repetitions based on screen width
//     var repetitionCount =  window.innerHeight; // Adjust as needed
//         // Get viewport dimensions
//         var viewportWidth = screen.width;
//         var viewportHeight = screen.height;

//         // Calculate the number of repetitions in each direction
//         var horizontalRepetitions = Math.ceil(viewportWidth/25 );
//         var verticalRepetitions = Math.ceil(viewportHeight/25);

//         // Repeat the pattern
//         for (var i = 0; i < verticalRepetitions; i++) {
//             for (var j = 0; j < horizontalRepetitions; j++) {
//                 createBox( dot );
//             }
//         }
//         for (var j = 0; j < 28; j++) {
//             createBox( dot );
//         }
//     // Repeat a specific HTML element
//     // for (var i = 0; i < repetitionCount; i++) {
//     //     createBox( dot );
//     // }
// }

// // Function to create a box element
// function createBox(content) {
//     var box = document.createElement('span');
//     box.className = 'circle';
//     box.textContent = content;
//     document.body.appendChild(box);
// }

// // Initial repetition on page load
// repeatElements();

// // Update elements on window resize
// window.addEventListener('resize', repeatElements);




//********************absolute element create************************

// function repeatElements() {
//     // Remove all existing elements from the body
//     document.body.innerHTML = '';

//     // Get viewport dimensions
//     var viewportWidth = window.innerWidth;
//     var viewportHeight = window.innerHeight;

//     // Calculate the number of repetitions in each direction
//     var horizontalRepetitions = Math.ceil(viewportWidth / 24);
//     var verticalRepetitions = Math.ceil(viewportHeight / 23);

//     // Initialize incrementing positions
//     var leftPosition = 0;
//     var topPosition = 0;

//     // Repeat the pattern
//     for (var i = 0; i < verticalRepetitions; i++) {
//         for (var j = 0; j < horizontalRepetitions; j++) {
//             createBox(leftPosition, topPosition);
//             // Increment the left position
//             leftPosition += 24; // Adjust as needed
//         }
//         // Increment the top position and reset left position
//         topPosition += 23; // Adjust as needed
//         leftPosition = 0;
//     }
// }

// // Function to create a circle element
// function createBox(left, top) {
//     var box = document.createElement('span');
//     box.className = 'circle';
//     document.body.appendChild(box);

//     // Set absolute positioning for the circle using the provided left and top positions
//     box.style.position = 'absolute';
//     box.style.left = left + 'px';
//     box.style.top = top + 'px';
// }

// // Initial repetition on page load
// repeatElements();

// // Update elements on window resize
// window.addEventListener('resize', repeatElements);






//**************To paste image multiple time**************

// var repeatcount=20;
// const imgUrl='lota.png';
// var body= document.body;
// for(let i=0;i<repeatcount;i++){
//     var img= document.createElement('img');
//     img.src= imgUrl;
//     body.appendChild(img);
// }


// var repeatcount=50;
// var dot= document.getElementById('circle');
// var body= document.body;
// for(let i=0;i<repeatcount;i++){
//     dot.classList.add('circle');
// }
