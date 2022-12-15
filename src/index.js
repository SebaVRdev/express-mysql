import express from 'express';

//Importamos rutas
import employesRouter from './routes/employees.routes.js';
import indexRouter from './routes/index.routes.js';

const app = express();

//Antes de toda ruta, usamos MDW para que pueda recibir Json
app.use(express.json());

//Usamos rutas
app.use('/api',employesRouter);
app.use(indexRouter);

//MDW en caso de poner una ruta no valida 
app.use((req, res, next) => {
    res.status(404).json({
        messsage: 'Not Found'
    });
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

