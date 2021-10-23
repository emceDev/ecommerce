const mongoose = require('mongoose')

const mongoDb = {
    dbURI :'[db url here]'
}
export default mongoose.connect(mongoDb.dbURI)

