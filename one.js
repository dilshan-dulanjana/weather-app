
console.log("Hello, world!");
const buttons = document.querySelectorAll('.navbar-nav .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});

document.getElementById('mainButton').addEventListener('click', function () {
    this.classList.toggle('selected');
});




// $('#carouselExampleCaptions').carousel({
//     interval: 3000 
//   });


function fetchFutureForecast(searchVal) {
    const startDate = new Date();
    let currentDay = new Date(startDate);

    for (let i = 0; i < 10; i++) {
        const formattedDate = currentDay.toISOString().split('T')[0];

        // Using an IIFE to capture the value of i
        (function (index) {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=5d7a25b2cad54f73bb0112953240203&q=${searchVal}&days=10&dt=${formattedDate}&aqi=yes&alerts=yes`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById(`date${index + 1}`).innerHTML = data.forecast.forecastday[0].date;
                    document.getElementById(`img${index + 1}`).src = data.forecast.forecastday[0].day.condition.icon;
                    document.getElementById(`temp${index + 1}`).innerHTML = data.forecast.forecastday[0].day.avgtemp_c;
                    document.getElementById(`wind${index + 1}`).innerHTML = data.forecast.forecastday[0].day.maxwind_kph;
                    document.getElementById(`text${index + 1}`).innerHTML = data.forecast.forecastday[0].day.condition.text;

                });
        })(i); // Pass i to the IIFE

        currentDay.setDate(currentDay.getDate() + 1);
    }
}


function fetchfastForecast(searchVal) {
    const startDate = new Date();
    let currentDay = new Date(startDate);

    for (let i = 5; i >= 0; i--) {
        const formattedDate = currentDay.toISOString().split('T')[0];

        // Using an IIFE to capture the value of i
        (function (index) {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=5d7a25b2cad54f73bb0112953240203&q=${searchVal}&days=8&dt=${formattedDate}&aqi=yes&alerts=yes`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById(`da${index}`).innerHTML = data.forecast.forecastday[0].date;
                    document.getElementById(`im${index}`).src = data.forecast.forecastday[0].day.condition.icon;
                    document.getElementById(`tem${index}`).innerHTML = data.forecast.forecastday[0].day.avgtemp_c;

                    document.getElementById(`win${index}`).innerHTML = data.forecast.forecastday[0].day.maxwind_kph;
                    document.getElementById(`tex${index}`).innerHTML = data.forecast.forecastday[0].day.condition.text;

                });
        })(i); // Pass i to the IIFE

        currentDay.setDate(currentDay.getDate() - 1);
    }
}













document.getElementById("searchBtn").addEventListener("click", () => {
    let searchVal = document.getElementById("serachLbl").value;
    let reop = { method: 'GET' };




    fetch(`http://api.weatherapi.com/v1/current.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("location").innerHTML = data.location.name;
            document.getElementById("time").innerHTML = data.location.localtime;
            document.getElementById("country").innerHTML = data.location.country;
            document.getElementById("region").innerHTML = data.location.region;
            document.getElementById("ce").innerHTML = data.current.temp_c;
            document.getElementById("fa").innerHTML = data.current.temp_f;
            var imgElement = document.getElementById("img");
            imgElement.src = data.current.condition.icon;
            var imgElement = document.getElementById("pho");
            imgElement.src = data.current.condition.icon;
            document.getElementById("humidity").innerHTML = data.current.humidity;
            document.getElementById("wind_speedkm").innerHTML = data.current.wind_kph;
            document.getElementById("wind_speedmp").innerHTML = data.current.wind_mph;
            document.getElementById("cloud").innerHTML = data.current.cloud;
            fetchFutureForecast(searchVal);
            fetchfastForecast(searchVal);
            searchLocation();








            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=5`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time1").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p1");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c1").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind1").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=9`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time2").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p2");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c2").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind2").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=13`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time3").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p3");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c3").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind3").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=17`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time4").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p4");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c4").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind4").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=21`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time5").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p5");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c5").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind5").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&hour=23`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time6").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p6");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c6").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind6").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })


            fetch(`http://api.weatherapi.com/v1/forecast.json?key=50ca2f80d6ce427c991152958240303&q=${searchVal}&days=12`, reop)
                .then(response => response.json())
                .then(forecastData => {

                    document.getElementById("Time6").innerHTML = forecastData.forecast.forecastday[0].hour[0].time;
                    var imgElement1 = document.getElementById("p6");
                    imgElement1.src = forecastData.forecast.forecastday[0].hour[0].condition.icon;
                    document.getElementById("c6").innerHTML = forecastData.forecast.forecastday[0].hour[0].temp_c;
                    document.getElementById("wind6").innerHTML = forecastData.forecast.forecastday[0].hour[0].wind_kph;




                })




        })

});


const map = L.map('map').setView([0, 0], 2);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function searchLocation() {
    const locationInput = document.getElementById('serachLbl').value;


    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationInput}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                map.setView([lat, lon], 10);
                L.marker([lat, lon]).addTo(map);
            } else {
                alert('Location not found. Please enter a valid location.');
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            alert('An error occurred while fetching the location. Please try again.');
        });
}

function scrollToSection(sectionId) {
    // Get the section element by its ID
    const section = document.getElementById(sectionId);
    if (section) {
        // Scroll to the top of the section
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

    $('#carouselExampleCaptions').carousel({
        interval: 3000
      });


