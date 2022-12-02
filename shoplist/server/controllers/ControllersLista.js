const db = require ('../config/db');


module.exports = {
    async findAll (req,res) {
        try {
            let response = await db.query('SELECT * FROM produtos')
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async insert (req,res) {
        let nomelista = {
            "nomelista":req.body.nomelista
        }
        try {
            let response = await db.query('INSERT INTO listas(nomelista) VALUES (?)', [nomelista]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

       
    },

    async find (req,res) {
        try {
        let response = await db.query('SELECT * FROM listas')
        res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    }

}
    