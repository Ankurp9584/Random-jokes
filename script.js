let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");

let apiUrl = "https://dad-jokes.p.rapidapi.com/random/joke";
let apiKey = "6311424256mshb6d225d72553712p1a92a0jsn4f908ba50ecb";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

async function runJoke() {
  // Get joke from API and display it in the HTML page.
  try {
    joke.innerText = "Please Wait....";
    btn.disabled = true;
    btnText.innerText = "Loading...";

    let response = await fetch(apiUrl, options);
    let data = await response.json();
    btn.disabled = false;
    btnText.innerText = "TELL ME A JOKE";
    joke.innerHTML = `" ${
      data.body[0].setup + "<br>" + data.body[0].punchline
    }"`;
  } 
  catch (error) {
    joke.innerText = `Sorry ! There was an error retrieving a joke.`;
  }
}

btn.addEventListener("click", () => {
  // Run the dad joke generator when button is clicked.
  try {
    runJoke();
  } catch (error) {
    console.log(error);
  }
});
