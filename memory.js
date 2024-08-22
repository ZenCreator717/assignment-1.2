const createCardScenes  = () => {
const cardScenes = []
let cardScene
getCardImageObjects().forEach((obj) => {
    cardScene=document.createElement('div')
    cardScene.className='card_Scene'
    cardScene.append(createCard(obj))
    cardScenes.push(cardScene)
})
return cardScenes
}
const addRefreshListener=() => {-
}

const loadGame=(cardScenes) => {
    addRefreshListener()
    cardScenes.forEach((cardScenes) => {
        document.getElementById('game_Board').append(cardScene)
    })
}
const createCard = (obj) => {
    let card= document.createElement('div')
    card.className='card ${obj.id}'
    card.append(createCardBack())
    card.append(createCardFront(obj.image_url))
    card.addEventListener('click'.executeCardFlip)
    return card
}
    const flipCard =(event) => {
        event.target.parentNode.parentNode.style.transform= "rotateY(180deg)"
        event.target.parentNode.parentNode.classList.toggle("active")
        event.target.parentNode.parentNode.removeEventListener('click', executeCardFlip)
    }

    const executeCardFlip=(event) => {
        flipCard(event)
        if (timerActive===false) {
            return startTimer(event)
        }
        return handleMove(event);
    }
    const incrementMinutes= () => {
        document.getElementById('timer_clock_minutes').innerHTML++
    }

    const padSeconds= (seconds,length=2) => {
       let secondsString='' + seconds
       while (secondsString.length <length) {
        secondsString="0" + secondsString
       }
return document.getElementById('timer_clock_seconds').innerHTML=secondsString
    }

    const incrementSeconds=() => {
            let seconds = document.getElementById('timer_clock_seconds').innerHTML
            seconds++
            padSeconds(seconds)
    }


    setInterval(function runTimer(){
        let seconds = document




}

