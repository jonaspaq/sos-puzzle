
// Initialize letterStatus
var letterStatus = true
var dataStorage = []

const patterns = [
    {
        0: 'S',
        1: 'O',
        2: 'S'
    }
]

// Get all elements with sos-box class
var sosbox = document.getElementsByClassName('sos-box')

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
    // Check letterStatus to toggle S and O letter, if true letter is 'S' otherwise 'O'
    let letterToPlace = (letterStatus) ? 'S' : 'O'

    dataStorage[selfIndex] = letterToPlace

    // Inject letter to html
    self.children[0].innerText = letterToPlace

    // Toggle letterStatus for the next event
    letterStatus = !letterStatus

    console.log(dataStorage)
}