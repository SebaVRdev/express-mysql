//Configuracion de la base de datos
import { createPool } from 'mysql2/promise'; //promise para que funcione con promesas 
//Conjunto de conexion
export const pool = createPool({ //igual que createConnection
    host: 'localhost',
    user: 'root',
    password: 'seba123',
    port: 3306,
    database: 'companydb'
});
