const express = require('express');
const bodyParser = require('body-parser');
//Para usar partials de ejs
const expressLayout = require('express-ejs-layouts');
//Extender forms
const methodOverride = require('method-override');
const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(expressLayout);
router.use(methodOverride('_method'));



const {index, viewNewUser ,newUser, viewSearchUser, searchUser, deleteUser, viewUpdate, updateUser} = require('../../controllers/user');

router.get('/', index);
router.get('/agregar',  viewNewUser);
router.post('/agregar', urlencodedParser, newUser);
router.get('/buscar', viewSearchUser);
router.post('/buscar', urlencodedParser, searchUser);
router.delete('/eliminar/:id', deleteUser);
router.get('/editar/:id', viewUpdate);
router.put('/editar/:id', urlencodedParser, updateUser)

module.exports = router;