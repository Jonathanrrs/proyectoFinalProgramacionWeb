const {User} = require('../routes/models/userModel');
const numberRandom = require('random');
var {objColores}= require('../colores/colores');


module.exports = {
    index: async (req, res) => {
        try {
            let users = await User.find({});
            if (users.length > 0) {
                res.render('all-users', { users});          
            } else return error;

        } catch (error) {
            res.render('nadie');
        }
    },
    viewNewUser: (req,res) => {
        res.render('agregar');
    },
    newUser: async (req, res) => {
        try {
            let random = numberRandom.int(0, 9)
            let coloresRandom = objColores[random].color
            let users = await User.findOne({ username: req.body.username });
            if (!users) {
                var user = new User({
                    username: req.body.username,
                    password: req.body.password,
                    color: coloresRandom
                });
                user.save();
                res.render('messages', { msg: 'Usuario registrado exitosamente!' });

            } else return error;

        } catch (error) {
            res.render('messages', { msg: 'El usuario ya existe' });
        }
    },
    viewSearchUser: (req,res) => {
        res.render('buscar');
    },
    searchUser: async (req, res) => {
        try {
            let users = await User.find({ username: req.body.username });
            if (users.length > 0) {
                res.render('resultado', { data: users });
            } else return error;
        } catch (error) {
            res.render('messages', { msg: 'No encontrado' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete({ _id: req.params.id });
            res.redirect('/');

        } catch (error) {
            console.log('Error');
        }
    },
    viewUpdate: async (req, res) => {
        try {
            let users = await User.findById({ _id: req.params.id });
            res.render('edit', { data: users });
        } catch (error) {
            console.log('Error');
        }
    },
    updateUser: async (req, res) => {
        try {
            let users = await User.find({ username: req.body.username });
            if (!users.length > 0) {
                let username = req.body.username;
                let password = req.body.password;
                await User.findByIdAndUpdate({ _id: req.params.id }, { username, password });
                res.redirect('/');
            } else return error;
        } catch (error) {
            res.render('messages', { msg: ' Error, ya existe!' });
        }
    }

}