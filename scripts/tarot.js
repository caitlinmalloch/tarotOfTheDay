window.onload = function() {
    tarot.deal();
};

class Card {
    constructor(name, description, meaning, uprightKeywords, reversedKeywords, imgURL) {
        this.name = name;
        this.description = description;
        this.meaning = meaning;
        this.uprightKeywords = uprightKeywords;
        this.reversedKeywords = reversedKeywords;
        this.imgURL = imgURL;
    }

    toHtml() {
        let html = "";
        if(this.isReversed) {
            html += '<img class="tarotImage" style="transform: rotate(180deg);" src="' + this.imgURL + '" />';
        } else {
            html += '<img class="tarotImage" src="' + this.imgURL + '"/>';
        }

        html += '<h2>' + this.name + ((this.isReversed) ? " Reversed" : "") + '</h2>';
        html += '<p>' + this.description + '</p>';
        html += '<p>' + this.meaning + '</p>';
        html += '<h4>Keywords: </h4>';
        html += "<ul>"
        const list = (this.isReversed) ? this.reversedKeywords : this.uprightKeywords;
        list.forEach(element => {
            html += "<li>" + element + "</li>"
        });

        html += "</ul>"

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tarotCard')
        cardDiv.innerHTML = html;
        return cardDiv;
    }
}

//tarot card info
let tarot = (function() {
    let self = {};

    cards: var cards = [];

    //clear the card array and read the cards
    self.init = function () {
        //clear the array by making a new one
        cards = [];

        //add new cards to list
        cards.push(
            new Card(
                "Ace of Swords", 
                "A single sword appears through the clouds.",
                "This is a card of new beginnings and new ideas.",
                ["Breakthrough", "Clarity", "Insight"], 
                ["Confusion", "Anger", "Chaos"], 
                "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-suit-ace-of-swords_1024x1024.png?v=1490367845"));
        
        cards.push(
            new Card(
                "Temperance", 
                "An angel pours water between two cups.", 
                "This card signifies the balance between two energy forces.", 
                ["Patience", "Balance", "Finding Meaning"], 
                ["Extremes", "Lack of Balance", "Excess"], 
                "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-temperance_1024x1024.png?v=1489166942"));

        cards.push(
            new Card(
                "The World", 
                "A figure dances in the center of the card, surrounded by a snake.", 
                "This card reflects perfect unity in our inner and outer world.", 
                ["Completion", "Achievement", "Fufillment"], 
                ["Emptiness", "Lack of Closure", "Feeling Incomplete"], 
                "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487"));

        cards.push(
            new Card(
                "The Sun", 
                "A hand reaches for the sun in the sky.", 
                "This card is bright with joy and enlightenment.", 
                ["Happiness", "Success", "Optimism"], 
                ["Pessimism", "Unrealistic Expectations", "Blocked Happiness"], 
                "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-sun_1024x1024.png?v=1489190376"));
                
        cards.push(
            new Card(
                "The Moon", 
                "The Moon shines down on the night, casting rays on the lake below.", 
                "This card indicates a need for deep inner reflection.", 
                ["Illusion", "Intuition", "Clarity"], 
                ["Fear", "Anxiety", "Deception"], 
                "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-moon_1024x1024.png?v=1489188353"));
        
        console.log('cards: ' + cards.length);
      
    }


    self.deal = function() {
        // dealing will read the cards to randomize them flipping
        console.log('initializing ...')
        self.init();
        console.log('dealing ...')


        // clear the tarot container
        let container = document.getElementById("container");
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }


        let c = Math.floor(Math.random() * cards.length);
        console.log('delt ' + cards[c].name)
        container.appendChild(cards[c].toHtml());                
    }

    return self;
}());
