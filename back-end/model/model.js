const {model , Schema} = require("mongoose")

const USerSchema = new Schema({
    todo:String,
})

const UserModel = model('User', UserSchema)

module.exports = UserModel