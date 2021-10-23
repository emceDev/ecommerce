const mongoose = require('mongoose')

const mongoDb = {
    dbURI :'link from Email'
}
export default mongoose.connect(mongoDb.dbURI)

