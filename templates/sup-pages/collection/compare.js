let cars = null;
// get datas cars in cars.json
fetch('cars.json')
.then(res => res.json())
.then(data => {
    cars = data;
    showDetail();
    addDataToHTML();
})


// show detail car left side
function showDetail(){
    let detail = document.querySelector('.container');
    let carId = new URLSearchParams(window.location.search).get('id');
    // console.log(detail);
    let thisCar = cars.filter(value => {
        return value.id == carId
    })[0];
    // if there is no car has id = carId
    // => return to home page
    if(!thisCar){
        window.location.href = "/";
    }
    // and if has, add data this car in html
    detail.querySelector('.image img').src = thisCar.image;
    detail.querySelector('.name').innerText = thisCar.name;
    detail.querySelector('.price').innerText = thisCar.price;
    detail.querySelector('.body').innerHTML = "<strong>body</strong> : " + thisCar.body;
    detail.querySelector('.year').innerHTML = "<strong>year</strong> : " + thisCar.year;
    detail.querySelector('.model').innerHTML = "<strong>model</strong> : " + thisCar.model;
    detail.querySelector('.make').innerHTML = "<strong>brand</strong> : " +thisCar.make;
    detail.querySelector('.door').innerHTML = "<strong>door</strong> : " +thisCar.door;
    detail.querySelector('.fueltype').innerHTML = "<strong>fule type</strong> : " +thisCar.fueltype;
    detail.querySelector('.enginetype').innerHTML = "<strong>engine</strong> : " +thisCar.enginetype;
    detail.querySelector('.enginedisplacement').innerHTML = "<strong>engine displacement</strong> : " +thisCar.enginedisplacement;
    detail.querySelector('.horsepower').innerHTML = "<strong>horse power</strong> : " +thisCar.horsepower;
    detail.querySelector('.numberofspeed').innerHTML = "<strong>number of speed</strong> : " +thisCar.numberofspeed;
    detail.querySelector('.tank').innerHTML = "<strong>tank capacity</strong> : " +thisCar.tank;
    detail.querySelector('.wheelbase').innerHTML = "<strong>wheelbase</strong> : " +thisCar.wheelbase;
    detail.querySelector('.length').innerHTML = "<strong>length</strong> : " +thisCar.length;
    detail.querySelector('.width').innerHTML = "<strong>width</strong> : " +thisCar.width;
    detail.querySelector('.weight').innerHTML = "<strong>weight</strong> : " +thisCar.weight;
    detail.querySelector('.topspeed').innerHTML = "<strong>top of speed</strong> : " +thisCar.topspeed;
    detail.querySelector('.review').innerHTML = thisCar.review;
}

// show all cars in search container
let listCar = document.querySelector('.listCar');

function addDataToHTML() {
    cars.forEach(car => {
        // create new element item
        let newCar = document.createElement('a');
        newCar.classList.add('item-suggess');
        newCar.addEventListener('click',function(){
            console.log("Clicked : ",car.name);
            showsuggessDetail(car.id);
        });
        newCar.innerHTML = `
            <img src="${car.image}">
            <div class="car-detail">
                <p>${car.name}</p>
                <div class="price" style="color:black">${car.price}</div>
            </div>
        `;
        // add this element in listCar class
        listCar.appendChild(newCar);
    });
}

// Search function
function search(){
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const storecars = document.getElementById("listCar");
    const cars = document.querySelectorAll(".item-suggess");
    const carname = storecars.getElementsByTagName("p");

    for(var i=0;i < carname.length; i++){
        let match = cars[i].getElementsByTagName("p")[0];
        

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

// show detail car right side
function showsuggessDetail(id){
    //when show detail car another car will none display
    let item = document.getElementById('listCar');
    item.style.display = "none";
    let container = document.querySelector('.content2');
    container.style.height = "100%";
    let detail = document.querySelector('.content2');
    let carId = id;
    // console.log(detail);
    let thisCar = cars.filter(value => {
        return value.id == carId
    })[0];
    // if there is no car has id = carId
    // => return to home page
    if(!thisCar){
        window.location.href = "/";
    }
    // and if has, add data this car in html
    detail.querySelector('.image img').src = thisCar.image;
    detail.querySelector('.name').innerText = thisCar.name;
    detail.querySelector('.content .price').innerHTML = thisCar.price;
    detail.querySelector('.body').innerHTML = "<strong>body</strong> : " + thisCar.body;
    detail.querySelector('.year').innerHTML = "<strong>year</strong> : " + thisCar.year;
    detail.querySelector('.model').innerHTML = "<strong>model</strong> : " + thisCar.model;
    detail.querySelector('.make').innerHTML = "<strong>brand</strong> : " +thisCar.make;
    detail.querySelector('.door').innerHTML = "<strong>door</strong> : " +thisCar.door;
    detail.querySelector('.fueltype').innerHTML = "<strong>fule type</strong> : " +thisCar.fueltype;
    detail.querySelector('.enginetype').innerHTML = "<strong>engine</strong> : " +thisCar.enginetype;
    detail.querySelector('.enginedisplacement').innerHTML = "<strong>engine displacement</strong> : " +thisCar.enginedisplacement;
    detail.querySelector('.horsepower').innerHTML = "<strong>horse power</strong> : " +thisCar.horsepower;
    detail.querySelector('.numberofspeed').innerHTML = "<strong>number of speed</strong> : " +thisCar.numberofspeed;
    detail.querySelector('.tank').innerHTML = "<strong>tank capacity</strong> : " +thisCar.tank;
    detail.querySelector('.wheelbase').innerHTML = "<strong>wheelbase</strong> : " +thisCar.wheelbase;
    detail.querySelector('.length').innerHTML = "<strong>length</strong> : " +thisCar.length;
    detail.querySelector('.width').innerHTML = "<strong>width</strong> : " +thisCar.width;
    detail.querySelector('.weight').innerHTML = "<strong>weight</strong> : " +thisCar.weight;
    detail.querySelector('.topspeed').innerHTML = "<strong>top of speed</strong> : " +thisCar.topspeed;
    detail.querySelector('.review').innerHTML = thisCar.review;
}

// when user click on search will display all cars
function showCars(){
    let item = document.getElementById('listCar');
    item.style.display = "";
    let container = document.querySelector('.content2');
    container.style.height = "528px";
}






