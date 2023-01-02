import  { Router } from 'express';
import procesos from '../controllers/procesos';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class ProcesosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], procesos.list);
        this.router.get('/:id',[checkJwt], procesos.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], procesos.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], procesos.update);
        this.router.delete('/:id',[checkJwt,checkRole(['admin'])], procesos.delete);
    }

}

export default new ProcesosRoutes().router;

