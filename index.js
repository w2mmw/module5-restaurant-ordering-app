import {menuArray} from './data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
let ordersArray = []; // items that the user is ordering.
let grandTotal = 0; // total price of the order.


document.addEventListener('click', function(e){
    if(e.target.dataset.id){
        handleItemOrderClick(e.target.dataset.id) 
    }
    else if(e.target.dataset.ordernum){
        handleRemoveClick(e.target.dataset.ordernum)
    }
    else if(e.target.id === 'completeOrder'){
        handleCCFormClick()
    }
    else if(e.target.id === 'btnCancel'){
        handleBtnCancelClick()
    }
    
})
// This is what happens when the order (+) button is clicked on an item.
function handleItemOrderClick(orderId){ 
    // find the item in the menuArray.
    const targetOrderObj = menuArray.filter(function(tweet){
        
        return tweet.id == orderId
    })[0]
    //push menu item into the ordersArray.
    ordersArray.push({
        name: targetOrderObj.name,
        price: targetOrderObj.price,
        uuId: uuidv4()
    })
    render()
}
//This is what happens when a remove button is pressed on an ordered item.
function handleRemoveClick(orderNum){
    const targetOrderObj = ordersArray.filter(function(tweet){
        return tweet.uuId != orderNum
    })
    ordersArray.length = 0;
    console.log( targetOrderObj);
    targetOrderObj.forEach(function(tweet){
        alert(tweet.name);
        ordersArray.push({
            name: tweet.name,
            price: tweet.price,
            uuId: tweet.uuId
        })
    })
    render();
}
// This is what happens when the Complete Order button is pressed. The credit card
// <div> is displayed.
function handleCCFormClick(){
    document.getElementById ("creditCard").style.display = "flex";
}
// This is what happens with the red x box is clicked in the credit card form.
// It hides the credit card form.
function handleBtnCancelClick() {
    document.getElementById("creditCard").style.display = "none";
}
    // get all the necessary data to display the HTML
function getFeedHtml(){
        let feedHtml = ``
        
        // Display the menu items.
        menuArray.forEach(function(tweet){
            feedHtml +=`<div class = "menuItem">
            <div id="menuImage">
                <p id="itemImage">${tweet.emoji}</p>
            </div>
            <div id="menuDescription">
                <p id="itemDescription">${tweet.name}</p>`
            let ingredientsHtml ='';
            tweet.ingredients.forEach(function(ing){
                ingredientsHtml += ing + ", ";
            })
                ingredientsHtml = ingredientsHtml.slice(0, -2);
                feedHtml +=`
                <p id="itemItems">${ingredientsHtml}</p>
                <p id="itemCost">$${tweet.price}</p>
            </div>
            <div id="menuButton">
                <button id="itemButton" data-id = "${tweet.id}">+</button>
            </div>
        </div>`
        })

        //Display items theat have been ordered.
        if (ordersArray.length > 0 ){
                feedHtml +=`
                <div class="theOrder">
                    <div class="orderHeading">
                        <p class="p28">Your Order</p>
                    </div>
                `
            ordersArray.forEach(function(ordArr){ 
                grandTotal += ordArr.price;
                feedHtml += `
                    <div class="orderedItem">
                        <p class="p28">${ordArr.name}</p>
                        <button id="btnRemove" data-ordernum = "${ordArr.uuId}">Remove</button>
                        <p class ="p20">$${ordArr.price}</p>
                    </div>`
            })
            feedHtml += `
                    <div id="emptySpace">.</div>
                    <div class="orderedTotal">
                        <p class="p28">Total</p>
                        <p class="p20">$${grandTotal}</p>
                    </div>
                    <div class="orderedSend">
                        <button id="completeOrder">Complete Order</button>
                    </div>
                </div>`
        }
        grandTotal = 0;
        return feedHtml;
}

// render out all HTML on the page.
function render(){
        document.querySelector('.container').innerHTML = getFeedHtml()
}

render()
/*
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ''
    }

}

function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
*/