const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secrete = 'cs477 lab7';

exports.login = async(req, res, next) => {
    // try {
    // } catch (err) {
    //     next(err);
    // }
    const reqB = req.body;
    const user = await new User(reqB.username, reqB.password, null).login();

    if (user) {
        //generate tokens, send back
        const jwtToken = jwt.sign({ username: user.username, role: user.role }, secrete);
        res.json({ jwtToken });
        // res.json({ 'success': true });


    } else {
        res.json({ 'error': 'Invalid username or password' });
    }

}

exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const jwtToken = authHeader.split(' ')[1];

        //todo - asynchrounously error handling
        // jwt.verify(jwtToken, secrete, (err, user) => {
        //     if (err) {
        //         res.status(403).json({ error: 'Forbidden' })
        //     } else {
        //         next(); //go to app.js
        //     }
        // });

        //todo - synchronously error handling, using try catch
        try {
            const payload = jwt.verify(jwtToken, secrete);
            req.user = payload; //to know the user is admin or not

            next();
        } catch (error) {
            res.status(403).json({ error: 'Forbidden' });
        }



    } else {
        res.status(401).json({ error: 'Unauthorized!' })
    }
}

exports.authorizeUser = (req, res, next) => {
    if (req.User.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
}