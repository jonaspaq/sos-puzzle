
class DataStorage {
    constructor(){
        this.dataStorage = []
        this.count = 0
    }

    store(index, value) {
        this.dataStorage[index] = value
        ++this.count
        return this.dataStorage[index]
    }

    getIndex(index) {
        return this.dataStorage[index]
    }

    all() {
        return this.dataStorage
    }

    checkIfNull(index) {
        const checker = (this.dataStorage[index]) ? true : false
        if(checker) {
            throw  'Oops, box already has a value of '+this.dataStorage[index]+'!'
        }
    }

    clear() {
        this.dataStorage = []
    }
}