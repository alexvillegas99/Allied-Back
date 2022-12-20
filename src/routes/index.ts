import {Router} from 'express'
import auth from './auth';

import roles from './roles';
import user from './user';

//Importando las rutas
//Declarando la constante de rutas
const routes=Router();
//Inicializando las rutas
routes.use('/auth',auth);
routes.use('/usuario',user);
routes.use('/rol',roles);
//Exportando rutas

export default routes;