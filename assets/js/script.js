
// Initialize pattern checker
let pattern = new SosPatterns

// Initialize letterStatus
var letterStatus = true
var dataStorage = new DataStorage

// Get all elements with sos-box class
const sosbox = document.getElementsByClassName('sos-box')

// Add click event to all of the sos-box divs
for(i=0; i < sosbox.length; i++){
    let el = sosbox[i]
    let count = i
    el.addEventListener('click', function(){
        placeLetter(el, count)
    })
}

// Method to call when the sos-box is clicked
function placeLetter(self, selfIndex){

    // Check if the box already has a value
    try{
        dataStorage.checkIfNull(selfIndex)
    } catch (err) {
        alert(err)
        return 0
    }

    // Check letterStatus to toggle S and O letter, if true letter to place will be 'S' otherwise 'O'
    let letterToPlace = (letterStatus) ? 'S' : 'O'

    // Set letter to dataStorage
    dataStorage.store(selfIndex, letterToPlace) 

    // Inject letter to html
    self.children[0].innerText = letterToPlace

    // Toggle letterStatus for the next event
    letterStatus = !letterStatus

    // Check if there is already a winning pattern
    let isWinner = pattern.checkIfWinning(dataStorage)

    if(isWinner) {
        newGame()
        alert('Yehey you win!')
    }
}


// New game function
function newGame() {
    // Clear dataStorage
    dataStorage.clear()

    // Set letterStatus to inital value
    letterStatus = true

    // Set all innerText of html values to empty
    for(i=0; i < sosbox.length; i++){
        let el = sosbox[i]
        let count = i
        el.children[0].innerText = ''
    }
}