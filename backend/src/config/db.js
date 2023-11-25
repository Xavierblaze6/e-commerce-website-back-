const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://mannegirishchowdary2021:Girishmanne1@cluster0.9z8wzgt.mongodb.net/?retryWrites=true&w=majorityongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}