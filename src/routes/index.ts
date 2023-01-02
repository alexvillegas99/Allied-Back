import {Router} from 'express'
import auth from './auth';
import clima from './clima';
import grupo_preguntas from './grupo_preguntas';
import lugar_observacion from './lugar_observacion';
import placas_camiones from './placas_camiones';
import procesos from './procesos';
import roles from './roles';
import tipo_formulario from './tipo_formulario';
import user from './user';

//Importando las rutas
//Declarando la constante de rutas
const routes=Router();
//Inicializando las rutas
routes.use('/auth',auth);
routes.use('/usuario',user);
routes.use('/rol',roles);
routes.use('/clima',clima);
routes.use('/grupoPreguntas',grupo_preguntas);
routes.use('/lugarObservacion',lugar_observacion);
routes.use('/placasCamiones',placas_camiones);
routes.use('/procesos',procesos);
routes.use('/tipoFormulario',tipo_formulario);
//Exportando rutas

export default routes;