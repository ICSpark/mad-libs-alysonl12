// ---- Write code below ---- \\
function dinner() {
    let food = prompt("Food");
    let somethingStrange = prompt("Something Strange");
    let adj = prompt("Adjective");
    let animal = prompt("Animal");
    let verb = prompt("Verb");
    let obj = prompt("Object");
    let firstQuote = prompt("First quote");
    let secondQuote = prompt("Second quote");

    document.getElementById("output").innerHTML = `
<p>The dinner party started with a dish of ${food} that smelled like ${somethingStrange}. 
Suddenly, a ${adj} ${animal} appeared and started ${verb}ing on the table! 
The host grabbed a ${obj} and yelled "${firstQuote}!" 
We all laughed and said "${secondQuote}." It was unforgettable!</p>`;
}

function mystery() {
    const adj = prompt("Adjective");
    const place = prompt("Place");
    const sound = prompt("Sound");
    const sillyName = prompt("Silly Name");
    const obj = prompt("Object");
    const noun = prompt("Noun");
    const name = prompt("Name");
    const job = prompt("Job Title");
    const verb = prompt("Verb");
    const sub = prompt("Substance");
    const food = prompt("Food");

    document.getElementById("output").innerHTML = `
  <p>On a(n) ${adj} night in the grand , a loud ${sound} revealed Lord ${sillyName} lying beside a ${obj}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${job}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction. 
  It turns out Lord ${sillyName} had slipped on ${sub} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>`;
}

function travel() {
    const figure = prompt("");
    const place = prompt("");
    const obj = prompt("");
    const adj1 = prompt("");
    const histPlace = prompt("");
    const verb = prompt("");
    const noun = prompt("");
    const name = prompt("");
    const adj2 = prompt("");
}