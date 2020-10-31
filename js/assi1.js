function containsString(mainString, seachString) {
    var string = mainString.indexOf(seachString);
    
    if (string > 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(containsString("Independent", "depend"));

console.log(containsString("Independent", "indy"));
