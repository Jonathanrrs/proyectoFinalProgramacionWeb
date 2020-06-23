const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 mongoose.connect('mongodb+srv://userandpassword@cluster0-tjcrc.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}); 

var userSchema = new Schema({
    username: String,
    password: String,
    color: String
});
mongoose.Promise = global.Promise;
var User = mongoose.model('users', userSchema);
module.exports.User = User;                             


