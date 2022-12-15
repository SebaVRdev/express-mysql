import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows); 
};

export const getEmploye = async (req, res) => {
    const id = req.params.id;
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[id]);

    //Si no encontramos registros
    if (rows.length <= 0) return res.status(404).json({message: 'No se encontro nada'})
    
    res.json(rows); 
};

export const saveEmploye = async (req, res) => {
    try {
        //Obtenemos valores del body
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary]); 
        res.send({
            id: rows.insertId,
            name,
            salary
        });
        
    } catch (error) {
        res.send(error);
    }

};
export const deleteEmploye = async (req, res) => {
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[id]);

    //Si no encontramos registros
    if (result.affectedRows <= 0) return res.status(404).json({message: 'No se encontro dato para eliminar'});
    
    //204 cuando ejecuta algo pero no necesariamente tiene que mostrar algo
    res.sendStatus(204); 
};

export const updateEmploye = async (req, res) => {
    const id = req.params.id;
    const {name, salary} = req.body;

    const [result] = await pool.query(`UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) 
        WHERE id = ?`,[name, salary, id]);

    console.log(result);
    //Si no hay filas afectadas
    if (result.affectedRows === 0) return res.status(404).json({message: 'No se encontro dato para modificar'});
    
    res.json('recibido');
    //204 cuando ejecuta algo pero no necesariamente tiene que mostrar algo
    //res.sendStatus(204); 
};

