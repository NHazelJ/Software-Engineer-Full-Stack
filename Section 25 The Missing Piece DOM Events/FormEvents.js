

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

//e.preventDefault - this is to stay in the same page from creating a new url or adding to the url.

//=====================================================
//Form Events Exercise
const form = document.querySelector('form');
const ul = document.querySelector('#list');
//#2 listen for submit
//#3 prevent defaults
//#4 grab product value
//#5 grat qty value
//#6 create li
//#7 add qty and product to li
//#8 append li to ul

form.addEventListener("submit", (e) => {
    //preventing the browser from refreshing
    e.preventDefault();
    
    const quantity = document.querySelector("#qty");
    const product = document.querySelector("#product");
    
    const li = document.createElement('li');
    li.innerText = `${quantity.value} ${product.value}`;
    ul.appendChild(li);
    
    quantity.value = "";
    product.value = "";
    
});

//==============================================================

