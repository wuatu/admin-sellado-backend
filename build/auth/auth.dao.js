"use strict";
const mongoose = require('mongoose');
const authSchema = require('./auth.model');
//import {authSchema} from './auth.model';
authSchema.statics = {
    create: function (data, cb) {
        const administrador = new this(data);
        administrador.save(cd);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
};
const authModel = mongoose.model('administrador', authSchema);
module.exports = authModel;
