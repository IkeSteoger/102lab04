function greeting() {
    alert("The year is 1894...the zombie outbreak has arrived!")
}

function infection() {
    let zombie = prompt("Are you a zombie that eats brains?")
    console.log("Do they think they're a zombie? " + zombie);
    if (zombie == null) {
        infection()
    }
    else if (zombie.toLowerCase() == "yes") { document.write("We have alerted the authorities. Don't read this website, zombie! [Just Kidding! Or am I?]") }
    else if (zombie.toLowerCase() == "no") { document.write("Whew, thats excellent news! Study this website carefully, fellow human.") }
    else {
        alert("That was a yes or no question, silly goose. Try again.")
        infection()
    }
}

function doublecheck() {
    if (confirm("Are you 100% sure about that?") == true) { }
    else {
        alert("Are you not sure of yourself? Try again.")
        infection()
        doublecheck()
    }

}

function cheeseburgers(){
    let burgers = prompt("Last question, how many cheeseburgers do you want for the road? Maximum of 5. Use your NumPad!")
    console.log("They want " + burgers + " burgers!")
    if (burgers == 0){
    document.write(" No cheeseburgers for you! This is what you asked for.")
    }
    else if (burgers == 1 || 2 || 3 || 4 || 5){
        document.write(" Here's your " + burgers + " cheeseburger(s)!")}
    else {
            alert("Thats not a numerical value between 0-5! Use your Numpad.");
    }
    for (let i=0; i<burgers; i++){
        show_image('/images/cheeseburger.png', 
                    500,
                    500,
                    'Yum Cheeseburger');
    }
}


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}