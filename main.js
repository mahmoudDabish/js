var lastRandomNumber = null;

function genrateQuotes() {

    var QuotesAuthors = [
        "— Napoleon Bonaparte", //index 0
        "— Joseph Stalin",//index 1
        "— General George S. Patton",  //index 2
        "— Abraham Lincoln"   //index 3
    ];
    var Quotes = [
        '"A soldier will fight long and hard for a bit of colored ribbon."',
        '"If the opposition disarms, well and good. If it refuses to disarm, we shall disarm it ourselves."',
        '"Better to fight for something than live for nothing."',
        '"Nearly all men can stand adversity, but if you want to test a man\'s character, give him power."'
    ]

    var random;

    do {
        random = Math.floor(Math.random() * QuotesAuthors.length);
    } while (random === lastRandomNumber);

    lastRandomNumber = random;

    document.getElementById("quotes").innerHTML = (Quotes[random]);
    document.getElementById("quotesAuthors").innerHTML = (QuotesAuthors[random]);

}




