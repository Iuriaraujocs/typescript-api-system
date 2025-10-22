import { Router } from 'express';
// import { authMiddleware } from '../../middlewares/auth.middleware';
import userRoutes from './user.routes';

const apiRouter = Router();

// Middlewares específicos para rotas de API (ex: autenticação, logs, etc.)
// apiRouter.use(authMiddleware);

// Rotas internas da API
apiRouter.use('/users', userRoutes);
// apiRouter.use('/something', somethingRoutes);

export default apiRouter;
