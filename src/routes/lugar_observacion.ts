import  { Router } from 'express';
import lugarObservacion from '../controllers/lugar_observacion';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class LugarObservacionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], lugarObservacion.list);
        this.router.get('/:id',[checkJwt], lugarObservacion.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], lugarObservacion.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], lugarObservacion.update);
        this.router.delete('/:id',[checkJwt,checkRole(['admin'])], lugarObservacion.delete);
    }

}

export default new LugarObservacionRoutes().router;

