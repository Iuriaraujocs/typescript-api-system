import { Router } from 'express';
import apiRouter from './api/index';
import publicRouter from './public/index';

const router = Router();

router.use('/api', apiRouter);
router.use('/', publicRouter);

export default router;