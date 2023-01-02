import  { Router } from 'express';
import clima from '../controllers/clima';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class ClimaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], clima.list);
        this.router.get('/:id',[checkJwt], clima.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], clima.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], clima.update);
        this.router.delete('/:id',[checkJwt,checkRole(['admin'])], clima.delete);
    }

}

export default new ClimaRoutes().router;

