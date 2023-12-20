let cars = null;

// get data from json
fetch('cars.json')
    .then(res => res.json())
    .then(data => {
        cars = data;
        // console.log(cars);
        addDataToHTML();
    });

// add data product to HTML
let listCar = document.querySelector('.listCar');

function addDataToHTML() {
    cars.forEach(car => {
        // create new element item
        let newCar = document.createElement('a');
        newCar.href = 'detail.html?id=' + car.id;
        newCar.classList.add('item');
        newCar.innerHTML = `
            <img src="${car.image}">
            <h2>${car.name}</h2>
            <div class="price">${car.price}</div>
        `;

        // add this element in listCar class
        listCar.appendChild(newCar);
    });
}

function filterCategory(bodyType) {
    // Clear the existing car list
    listCar.innerHTML = '';

    // Convert the input body type to lowercase
    const lowercasedBodyType = bodyType.toLowerCase();

    // Get all buttons with the class 'button-value'
    const buttons = document.querySelectorAll('.button-value');

    // Reset the background color of all buttons to transparent
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
    });

    // Set the background color of the clicked button to white
    const clickedButton = document.querySelector(`.button-value[data-body="${bodyType}"]`);
    if (clickedButton) {
        clickedButton.style.backgroundColor = 'white';
        clickedButton.style.color = '#000'; // Change text color to black for better visibility
    }

    // Filter cars based on the selected body type
    let filteredCars = (bodyType === 'all') ? cars : cars.filter(car => car.body.toLowerCase() === lowercasedBodyType);

    // Add filtered cars to the HTML
    filteredCars.forEach(car => {
        let newCar = document.createElement('a');
        newCar.href = 'detail.html?id=' + car.id;
        newCar.classList.add('item');
        newCar.innerHTML = `
            <img src="${car.image}">
            <h2>${car.name}</h2>
            <div class="price">${car.price}</div>
        `;

        listCar.appendChild(newCar);
    });
}

// Add an event listener for the search button
// document.getElementById('search').addEventListener('click', function () {
//     const searchInput = document.getElementById('search-input').value.toLowerCase();
//     searchByName(searchInput);
// });

// Function to filter cars by name
function searchByName(searchInput) {
    // Clear the existing car list
    listCar.innerHTML = '';

    // Filter cars based on the search input
    let filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchInput));

    // Add filtered cars to the HTML
    filteredCars.forEach(car => {
        let newCar = document.createElement('a');
        newCar.href = 'detail.html?id=' + car.id;
        newCar.classList.add('item');
        newCar.innerHTML = `
            <img src="${car.image}">
            <h2>${car.name}</h2>
            <div class="price">${car.price}</div>
        `;

        listCar.appendChild(newCar);
    });
}

// Call the searchByName function when Enter key is pressed in the search input
// document.getElementById('search-input').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         const searchInput = this.value.toLowerCase();
//         searchByName(searchInput);
//     }
// });

// Call the filterCategory function with the initial body type ('all') to display all cars initially
filterCategory('all');

// New Search item function
function search(){
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const storecars = document.getElementById("listCar");
    const cars = document.querySelectorAll(".item");
    const carname = storecars.getElementsByTagName("h2");

    for(var i=0;i < carname.length; i++){
        let match = cars[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;
            // check match the name
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){ //displat the match name
                cars[i].style.display = "";
            }else{
                cars[i].style.display = "none"; //none display not match name
            }
        }
    }
}