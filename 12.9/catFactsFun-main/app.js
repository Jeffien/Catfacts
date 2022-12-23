console.log("Im linked to html, says app.js!");

const btnClicked = document.getElementById('getNewCatFact');

btnClicked.addEventListener('click', function (event) {
    getCatFact();
    increment();
    getKanye();
    btnAnimation();
});

function getCatFact() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=206d082e")
        .then(
            function (response) {
                return response.json();
            })
        .then((response) => {
            let data = response;
            console.log(data);
            document.querySelector(".catFact").innerHTML = data.Title + "<br><br>" + data.Genre + "<br><br>" + data.Plot+ " 😸" + "<hr>";
        })
        .catch(function (err) {
            console.log('error: ' + err)
            document.querySelector(".catFact").innerHTML = "🙀" + "Sorry, cannot fetch at this time - try again later" + "🙀"
        });

    fetch("https://dogapi.dog/api/v2/facts")
        .then(
            function (response) {
                return response.json();
            })
        .then((response) => {
            let data = response;
            console.log(data);
            document.querySelector(".js__text").innerHTML = data.data[0].attributes.body + " 🐶" + "<hr>";
        })
        .catch(function (err) {
            console.log('error: ' + err)
            document.querySelector(".js__text").innerHTML = "Sorry - dog needs walking, try again later."
        });
}


let count = 1;

function increment() {
    if (count > 1) {
        document.querySelector(".counting").innerHTML = "Now you have read " + count + " catfacts and " + count + " dogfacts. 🤩" + "<hr>";
    }
    else {
        document.querySelector(".counting").innerHTML = "Now you have read " + count + " catfact and " + count + "dogfact. 🤩" + "<hr>";
    }
    count += 1;
}

function getKanye() {
    fetch("https://api.kanye.rest/")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let kanye = response;
            console.log(kanye)
            document.querySelector(".kanyeQuotes").innerHTML = 'Kanye says: "' + kanye.quote + '". 🙄';
        })
        .catch(function (err) {
            console.log('error: ' + err)
            document.querySelector(".kanyeQuotes").innerHTML = "Oh... Kanye's quiet... 😁 He may be back later though... 🙄"
        })

        
}

function btnAnimation() {
    let activeButton = document.querySelector("#getNewCatFact");
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

