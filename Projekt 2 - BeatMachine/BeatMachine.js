// zagraj wcisniety klawisz
function playPressedKey(e) {  
/* querySelector () zwraca pierwszy element pasujący do podanych selektorów.*/
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`); 

/* classList zwraca nazwę (klasy) klasy elementu jako obiekt DOMTokenList.*/
    key.classList.add('odtwarzaj');
    audio.currentTime = 0;
    audio.play();
}
/*querySelectorAll () zwraca  wszystkie dopasowania.*/
let keys = Array.from(document.querySelectorAll('.key')); 
/*addEventListener () dołącza moduł obsługi zdarzeń do określonego elementu.*/
keys.forEach(key => key.addEventListener('transtitonend', playPressedKey));
window.addEventListener('keydown', playPressedKey);


document.addEventListener('DOMContenerLoaded", appstart')
const sounds ={
        81 : "boom",
        69: "hihat",
        65: "kick",
        68: "openhat",
        83: "ride",
        90: "snare",
        88: "tink",
        87: "clap",
        67: "tom",
    }

    const channel1 = []
    let recStart = 0
    let isRecording = false

    function appstart() {
        window.addEventListener('keypress', playSound)
        document.querySelector('#play').addEventListener('click',playMusic)
        document.querySelector('#rec').addEventListener('click',recMusic)
    }

function playMusic() {
    channel1.forEach(sound => {
        setTimeout(()=> {
        audioDOM = document.querySelector(`#${sound.name}`)
        //odtworz dzwiek
        audioDOM.currentTime = 0
        audioDOM.play()
        }, sound.time);
    })
}

function recMusic(e) {
    //zapamietuj czas start
    recStart =Date.now()
    //zmien tryb nagrywania
    isRecording = !isRecording
    //zaktualizuj napis na buttonie
    e.target.innerHTML = isRecording ? 'Zakoncz' : 'Nagrywaj'
}


/*function appstart(){
    window.addEventListener('keypress, playSound')
}*/

function playSound(e) {
    //pobierz kod znaku
    /*console.log(e.charCode)*/
    audioName = sounds[e.charCode]
    //pobierz obiekt audio z DOM
    audioDOM = document.querySelector(`#${audioName}`)
    //odtworz dzwiek
    audioDOM.currentTime =0
    audioDOM.play()

    //zapisywanie do sciezki 1
    if (isRecording) {
    channel1.push(
        {
            name:audioName,
            time: Date.now() -recStart
        }
    )
    }
}