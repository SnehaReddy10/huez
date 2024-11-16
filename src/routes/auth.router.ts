import { Router } from 'express';
import { SignupController } from '../controllers/auth/signup.controller';

export const authRouter = Router();

authRouter.post('/signup', SignupController);
