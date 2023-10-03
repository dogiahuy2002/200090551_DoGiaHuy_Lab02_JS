//20090551_DoGiaHuy_JS_Lab02
//JavaScript in the Browser: DOM and Events

//Coding Challenge #1
function changeText(id) {
    id.innerHTML = "Hello!";
  }

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);
  
function myFunction() {
 document.getElementById("demo").innerHTML = "Score: 8.5";
  }

//Data Structures, Modern Operators and Strings
let players1 = [
    {gk: 'Neuer'},
    {fieldPlayers: 'Wanna'},
    {fieldPlayers: 'Kroos'},
    {fieldPlayers: 'Gundergan'},
    {fieldPlayers: 'Havert'},
    {fieldPlayers: 'Muller'},
    {fieldPlayers: 'Onnaa'},
    {fieldPlayers: 'Erisen'},
    {fieldPlayers: 'Saka'},
    {fieldPlayers: 'Lamp'},
    {fieldPlayers: 'Ozil'},
];
let players2 = [
    {gk: 'Calsilas'},
    {fieldPlayers: 'Pique'},
    {fieldPlayers: 'Ramos'},
    {fieldPlayers: 'Morata'},
    {fieldPlayers: 'Harda'},
    {fieldPlayers: 'Xavi'},
    {fieldPlayers: 'Inesta'},
    {fieldPlayers: 'Erisen'},
    {fieldPlayers: 'Rojo'},
    {fieldPlayers: 'Busquet'},
    {fieldPlayers: 'Ozilaa'},
];
let allPlayers  = players1.concat(players2);
console.log(allPlayers);
let duBi = [
    {fieldPlayers: 'Coutinho'},
    {fieldPlayers: 'Thiago'},
    {fieldPlayers: 'Perisis'}];
 let players1Final = players1.concat(duBi);
 let game = {
    team1: 'Bayern Munich',
    draw: 'yes',
    team2: 'Barcalona'
 };

 //A Closer Look at Functions

 //Coding Challenge #1
 const poll = {
    question: "What is your favorite programming language?",
    option: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    //This generates [0,0,0,0]. More in the next section!
    answers: new Array(4).fill(0),
 };

 //Working With Arrays

 //Coding Challenge #1
 let checkDogs = function(arr1){
    arr1.forEach(element => {
        if (element>=3) {
            console.log('Adult');
        } else {
            console.log('Puppy')
        }
    });
 }
 let dogsJulia = [3,5,2,12,7];
 let dogsKate = [4,1,15,8,3];
 const valuesToRemove = [3, 12, 7];
 const filteredCats = dogsJulia.filter(cat => !valuesToRemove.includes(cat))
 console.log(filteredCats)
 let newDogJulia = filteredCats;
 let allDogs = newDogJulia.concat(dogsKate);
 console.log(allDogs);
 for (i=0; i<allDogs.length; i++) {
    if (allDogs[i] >= 3) {
        console.log('Dog number', i+1 ,'is an adult, and is',allDogs[i], 'years old');
    } else {
        console.log('Dog number', i+1 ,'is an puppy, and is',allDogs[i], 'years old');
    }
 }
 
 //Object Oriented Programming (OOP)

 //Coding Challenge #1
 let Car1 = {
    make: 'BMW',
    speed: 120 // (km/h)
 }
 let Car2 = {
    make: 'Mercedes',
    speed: 95 // (km/h)
 }
 let accelerate = function(car){
    newwSpeed = car.speed + 10;
    car.speed = newwSpeed;
    return car;
 }
 let brake = function(car){
    newwSpeed = car.speed - 5;
    car.speed = newwSpeed;
    return car;
 }
 for(i=1; i<5; i++){
    console.log('BMW accelerate')
    Car1_accelerate = accelerate(Car1);
    console.log(Car1_accelerate);
    console.log('Mercedes brake')
    Car2_brake = brake(Car2);
    console.log(Car2_brake)
 }
 
 //ASYNCHRONOUS JAVASCRIPT

 //Coding Challenge #1

 const whereAmI = function (lat, lng) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=d0969cd04a48462faf25083773f4571f`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(
        `You are in ${data.results[0].city}, ${data.results[0].country}`
      );

      return fetch(
        `https://restcountries.com/v2/name/${data.results[0].country}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} `));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
