class JSONService {
    internaldata
    
    counterArray  = 0
    counterObject = 0
    counterObjectAttributes = 0
    
    summary
    arrays
    objects

    constructor(data) {
        this.internaldata = data
    }

    getSummary() {
        if(typeof this.internaldata == 'object' && Array.isArray(this.internaldata))
        {
            this.evaluateForArrays()
            this.evaluateForObjects()
        }
        return this.createSummary() //`Array of ${this.internaldata.length} elements`
        
    }

    evaluateForArrays() {
        this.countArrays()
        // storeArrays()
    }

    countArrays() {
        // 1st level
        this.internaldata.forEach(element => {
            if(Array.isArray(element)) {
                this.counterArray++
            }
        });
        // return this.counterArray
    }

    // storeArrays() {}

    evaluateForObjects() {
        this.countObjects()
        // storeObjects()
    }

    countObjects() {
        this.internaldata.forEach(element => {
            if(typeof element == 'object') {
                this.counterObject++
                this.counterObjectAttributes += Object.keys(element).length
                for(let i = 0; i < Object.keys(element).length; i++) { // 1 <--- roomtypes, 2 <--- entries
                    console.log("inside for " + element[Object.keys(element)[i]] + Object.keys(element)[i])
                    // console.log(element[Object.keys(element)[i]])
                    if(typeof element[Object.keys(element)[i]] == 'object' && Array.isArray(element[Object.keys(element)[i]])) { // data[0]['roomtypes']
                        this.counterArray++
                        for(let j = 0; j < element[Object.keys(element)[i]].length; j++) {
                            console.log(element[Object.keys(element)[i]][j])
                            this.counterObject++
                        }
                    }
                }
            }
        });
        // return this.counterArray
    }

    // storeObjects() {}

    createSummary() {
        this.summary  = "Summary\n"
        this.summary += "-------\n"
        this.summary += `Count of Arrays     : ${this.counterArray}\n`
        this.summary += `Count of Objects    : ${this.counterObject}\n`
        this.summary += `Count of Object Keys: ${this.counterObjectAttributes}\n`
        return this.summary
    }

}


module.exports = JSONService