
class SosPatterns {
    constructor(){
        this._possiblePatterns = [
            {
                0: 'S',
                1: 'O',
                2: 'S'
            },
            {
                0: 'S',
                3: 'O',
                6: 'S'
            },
            {
                0: 'S',
                4: 'O',
                8: 'S'
            },
            {
                1: 'S',
                4: 'O',
                7: 'S'
            },
            {
                2: 'S',
                4: 'O',
                6: 'S'
            },
            {
                2: 'S',
                5: 'O',
                8: 'S'
            },
            {
                3: 'S',
                4: 'O',
                5: 'S'
            },
            {
                6: 'S',
                7: 'O',
                8: 'S'
            }
        ]
    }

    possiblePatterns() {
        return this._possiblePatterns
    }

    checkIfWinning(data) {
        // Get all values of storage
        let storage = data.all()
        let isWinner = false

        // Loop the array of possible patterns
        for(const item of this._possiblePatterns) {
            let count = 0

            // Loop each key of the pattern
            for(const key in item) {              
                // Check if a value in storage is equal to value of a pattern
                if(storage[key] === item[key]) {
                    count++
                }
            }

            // If a pattern already matched 3 correct values, winner is decided
            if(count==3) {
                isWinner = true
                break;
            } else {
                isWinner = false
            }
        }

        return isWinner
    }
}