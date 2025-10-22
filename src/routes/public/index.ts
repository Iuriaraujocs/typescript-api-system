import { Router } from 'express';
// import { loggerMiddleware } from '../../middlewares/logger.middleware';
import homeRoutes from './home.routes';

const router = Router();

// Middlewares para grupo público (ex: log)
// router.use(loggerMiddleware);

router.use('/', homeRoutes);

export default router;
