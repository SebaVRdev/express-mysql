//Importamos config pool para querys
import {pool} from '../db.js'

export  const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result;')
    res.json(result);
};
 