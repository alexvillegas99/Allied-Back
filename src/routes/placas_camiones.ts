import  { Router } from 'express';
import PlacasCamionies from '../controllers/placas_camiones';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class PlacasCamionesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], PlacasCamionies.list);
        this.router.get('/:id',[checkJwt], PlacasCamionies.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], PlacasCamionies.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], PlacasCamionies.update);
        this.router.delete('/:id',[checkJwt,checkRole(['admin'])], PlacasCamionies.delete);
    }

}

export default new PlacasCamionesRoutes().router;

