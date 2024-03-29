"use strict";

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config.js');
const { UnauthorizedError } = require("../expressError.js");

/** Middleware: Authenticate user.
 *
 * If a token was provided, verify it, and, if valid, store the token payload
 * on req.user (this will include the user id, isWorker, and isAdmin properties.)
 *
 * It's not an error if no token was provided or if the token is not valid.
 */

function authenticateJWT(req, res, next){
    try {
        const authHeader = req.headers && req.headers.authorization;
        if(authHeader) {
            const token = authHeader.replace(/^[Bb]earer /, "").trim();
            const payload = jwt.verify(token, SECRET_KEY);
            req.user = payload;
        }
        return next();
    } catch(err) {
        return next();
    }
}

/** Middleware: Ensure user is logged in.
 *
 * If req.user is undefined, throws UnauthorizedError
 */

function ensureLoggedIn(req, res, next){
    if(!req.user) {
        const e = new UnauthorizedError();
    
        return next(e);
    } else {
        return next();
    }
}

/** Middleware: Ensure user isWorker property is true.
 *
 * Verifies user is passed in req and user contains isWorker property set to true
 * 
 * Throws UnauthorizedError if false
 */

function ensureIsWorker(req, res, next){

    if(!req.user || req.user.isWorker !== true) {
        const e = new UnauthorizedError() 
        return next(e);
    } else {
        return next();
    }
}

/** Middleware: Ensure user isAdmin property is true.
 *
 * Verifies user is in req.user and user contains isAdmin property set to true
 * 
 * Throws UnauthorizedError if false
 */

function ensureIsAdmin(req, res, next) {

    if(!req.user || req.user.isAdmin !== true) {
        return next(new UnauthorizedError())
    } else {
        return next();
    }
}

/** Middleware: Authenticate user.
 *
 * Verifies user is logged in and user id matches the id passed in params
 *  or that the user is an admin
 * 
 * Throw UnauthorizedError if false
 */

function ensureCorrectUserOrAdmin(req, res, next){

    if(!(req.user && (req.user.isAdmin || req.user.id === req.params.id))){
        const e = new UnauthorizedError();
    
        return next(e);
    } else {
        return next();
    }
}

module.exports = { 
    authenticateJWT, 
    ensureLoggedIn, 
    ensureIsWorker,
    ensureIsAdmin,
    ensureCorrectUserOrAdmin 
};