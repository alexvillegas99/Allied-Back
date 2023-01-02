import  { Router } from 'express';
import tipoFormulario from '../controllers/tipo_formulario';
import { checkJwt } from '../middleware/jwt';
import { checkRole } from '../middleware/role';

class TipoFormulariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',[checkJwt], tipoFormulario.list);
        this.router.get('/:id',[checkJwt], tipoFormulario.getOne);
        this.router.post('/',[checkJwt,checkRole(['admin'])], tipoFormulario.create);
        this.router.put('/:id',[checkJwt,checkRole(['admin'])], tipoFormulario.update);
    }

}

export default new TipoFormulariosRoutes().router;

