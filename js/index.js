var newquote = document.getElementById("newquote");
var displayQuote = document.getElementById("display");

function generateQuote() {
    var bBox = '';
    var Quotes = [`"Resentment is like drinking poison and waiting for your enemies to die."
    --Nelson Mandela` , `"The best revenge is massive success."
    --Frank Sinatra` , `"It's not what happens to you, but how you react to it that matters."
    --Epictetus`, `"You miss 100% of the shots you don't take."
    --Wayne Gretzy`, `"Do not take life too seriously. You will not get out alive."
    --Elbert Hubbard`, `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde
    `, `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`, `“So many books, so little time.”
    ― Frank Zappa`, `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`, `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`, `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`
    ]
    bBox += Quotes[Math.round(Math.random() * Quotes.length)];
    Math.round(Math.random() * Quotes.length);
    displayQuote.innerHTML = bBox;
}
