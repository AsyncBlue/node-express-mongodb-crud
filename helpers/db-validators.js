const Role = require('../models/role');
const User = require('../models/user');

const isValidateRole = async ( role = '' ) => {

    const existsRole = await Role.findOne( { role } );
    if ( !existsRole ) {
        throw new Error(`El rol ${ role } no esta registrado en la DB`);
    }

}

const mailExists = async ( mail = '' ) => {

    const existsMail = await User.findOne( { mail } );
    if ( existsMail ) {
        throw new Error( `El correo: ${ mail } ya esta registrado` );
    }

}

const existsUserId = async ( id ) => {

    const existsMail = await User.findById( id );
    if ( !existsMail ) {
        throw new Error( `El ID: ${ id } no existe` );
    }

}


module.exports = {
    isValidateRole,
    mailExists,
    existsUserId
}