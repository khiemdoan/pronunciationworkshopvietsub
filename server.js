let express = require('express')
let app = express()
app.use(express.static('docs'))
app.listen(3000)
