const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: [ true, 'El nombre es requerido' ]
    },
    mail: {
        type: String,
        required: [ true, 'El correo es requerido' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'La contraseña es requerida' ],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
/*         enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE'],
        default: 'USER_ROLE' */
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

UserSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject(); //esta quitando _v ,password y almacenando todo el resto de argumentos en user
    return user;
}


module.exports = model( 'User', UserSchema );  //(nombre de la coleccion en singular, esquema)