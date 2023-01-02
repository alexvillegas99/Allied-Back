import  { Router } from 'express';
import grupoPreguntas from '../controllers/grupo_preguntas';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class GrupoPreguntasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], grupoPreguntas.list);
        this.router.get('/:id',[checkJwt], grupoPreguntas.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], grupoPreguntas.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], grupoPreguntas.update);
        this.router.delete('/:id',[checkJwt,checkRole(['admin'])], grupoPreguntas.delete);
    }

}

export default new GrupoPreguntasRoutes().router;

