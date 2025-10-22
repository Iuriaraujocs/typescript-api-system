import { Router } from 'express';
import userRoutes from './user.routes';

const apiRouter = Router();

// Rotas internas da API
apiRouter.use('/users', userRoutes);

export default apiRouter;
