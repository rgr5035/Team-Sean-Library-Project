var textInputEl = document.querySelector("#text-input");
var buttonSubmitEl = document.querySelector(".btn");
var urlContainerEl = document.querySelector(".URL-container")

formSubmitHandler = function (event) {
    event.preventDefault();

    var userInput = textInputEl.value.trim();

    if (userInput) {
        getURLs(userInput);

    urlContainerEl.textContent = '';
    textInputEl.value = '';
  } else {
    alert('Please enter something!');
  }
        
}



getURLs = function () {
    var newspaperURL = "https://www.loc.gov/newspapers/?fo=json"
    var websiteURL = "https://www.loc.gov/websites/?fo=json"
    var audioURL = "https://www.loc.gov/audio/?fo=json"
    var articlesURL = "https://www.loc.gov/articles/?fo=json"

fetch(newspaperURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

fetch(websiteURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

fetch(audioURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

fetch(articlesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}






buttonSubmitEl.addEventListener("submit", formSubmitHandler);