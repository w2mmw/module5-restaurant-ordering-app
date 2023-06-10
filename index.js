import {menuArray} from './data.js';

document.addEventListener('click', function(e){
    if(e.target.dataset.id){
        //alert (e.target.dataset.id)
        handleItemOrderClick(e.target.dataset.id) 
    }
    
})
function handleItemOrderClick(orderId){ 
    const targetOrderObj = menuArray.filter(function(tweet){
        
        return tweet.id == orderId
    })[0]
    alert(targetOrderObj.name+ targetOrderObj.ingredients+ targetOrderObj.price);
    //if (targetTweetObj.isLiked){
    //    targetTweetObj.likes--
    //}
    //else{
    //    targetTweetObj.likes++ 
    //}
    //targetTweetObj.isLiked = !targetTweetObj.isLiked
    //render()
}

// get all the necessary data to display the HTML
function getFeedHtml(){
        let feedHtml = ``
        
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
        return feedHtml;
}

// render out all HTML on the page.
function render(){
        document.querySelector('.container').innerHTML = getFeedHtml()
}

render()


//
//
/*
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
})
 
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
        }
        
          
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`
   })
   return feedHtml 
}


*/