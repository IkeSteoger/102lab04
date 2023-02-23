alert("The year is 1894...the zombie outbreak has arrived!")


let zombie = prompt("Are you a zombie that eats brains? [Lowercase please!]")
    if(zombie == "yes")
        {document.write("We have alerted the authorities. Don't read this website, zombie! [Just Kidding! Or am I?]")}
    else if(zombie == "no")
        {document.write("Whew, thats excellent news! Study this website carefully, fellow human.")} 
    else{
        document.write("That was a yes or no question, silly goose.")}

console.log("Are they a zombie? " + zombie)

confirm("Are you 100% sure about that?")