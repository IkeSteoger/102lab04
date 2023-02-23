function greeting(){
    alert("The year is 1894...the zombie outbreak has arrived!")
}

function infection(){
    let zombie = prompt("Are you a zombie that eats brains?")
    if(zombie == null){
        infection()}
    else if(zombie.toLowerCase() == "yes")
        {document.write("We have alerted the authorities. Don't read this website, zombie! [Just Kidding! Or am I?]")}
    else if(zombie.toLowerCase() == "no")
        {document.write("Whew, thats excellent news! Study this website carefully, fellow human.")} 
    else{
        alert("That was a yes or no question, silly goose. Try again.")
        infection()}
}

function doublecheck(){
    if(confirm("Are you 100% sure about that?") == true){}
    else {
        alert("Are you not sure of yourself? Try again.")
        infection()
        doublecheck()
    }

}

