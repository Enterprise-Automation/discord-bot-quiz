

 var {searchTopic} = require('../repos/test.js')
 module.exports = function (app) {
   app.get('/api/test', (req, res, next) => {
 

    searchTopic("node")

console.log("hello")









    res.json({blah: "blah"})
 
   })
 }