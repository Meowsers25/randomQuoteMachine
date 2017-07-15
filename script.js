var tweetUrl = "";

var quotes= [
    "Do right. Do your best. Treat others as you want to be treated. Lou Holtz",
    "Always do your best. What you plant now, you will harvest later. Og Mandino",
    "A strong, positive self-image is the best possible preparation for success. Joyce Brothers",
    "The best thing to hold onto in life is each other. Audrey Hepburn",
    "My best friend is the one who brings out the best in me. Henry Ford",
    "An investment in knowledge pays the best interest. Benjamin Franklin",
    "Write it on your heart that every day is the best day in the year. Ralph Waldo Emerson",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. Buddha",
    "The best way to find yourself is to lose yourself in the service of others. Mahatma Gandhi",
    "I believe in pink. I believe that laughing is the best calorie burner. I believe in kissing, kissing a lot. I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles. Audrey Hepburn",
    "Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another. Ernest Hemingway",
    "It is better to be alone than in bad company. George Washington"

];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    tweetUrl = "https://twitter.com/intent/tweet?text=" + quotes[randomNumber];
    document.getElementById('tweet').setAttribute("href", tweetUrl);
}
