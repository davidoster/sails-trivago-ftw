/**
 * RestTrivagoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var httpreq = require('xmlhttprequest')
var JSONService = require('../services/jsonservice')

/*
    type of roomtypes, count, internal structure (array objects, how many attributes)
    entries.....

    Summary
    -------
    Arrays: 2 [array1, array2]
    array1: [2 objects]
        obj[1] attributes = 

    Sum of Objects = 3 [ob1, obj2]
        obj1: ....
        obj2: ....
    Object with highest number of attributes = ?
    Object with lowest number of attributes = ?

    GraphQL

*/

var obj = {a: 1, b: 2, c: 3}
obj.size
for(let i = 0; i < obj.length; i++) {
   console.log(obj[i]) 
}


module.exports = {
    exits: {
        success: {
            viewTemplatePath: 'pages/trivago'
        }
    },

    fn: async function () {
        // var myReq = new Request()
        let data = { roomtypes: [1, 2, 3] }

        var xhr = new httpreq.XMLHttpRequest();
        xhr.open("GET", "https://run.mocky.io/v3/de3f4a66-2656-4789-93ae-2c0a12ffe6f3", false);
        xhr.onload = await function () {
        };
        xhr.send();
        // console.log(xhr.responseText);
        data = JSON.parse(xhr.responseText)

        var jsonservice = new JSONService(data)

        console.log(jsonservice.getSummary())
        
        /* if data is typeof array then arrays +=1
         * for data.length loop items
         * for each item do again type checking
         * ....
         */
        

        return { data }
    }


};

