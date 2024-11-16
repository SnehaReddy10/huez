import { Router } from 'express';
import { SignupController } from '../controllers/auth/signup.controller';
import { SignInController } from '../controllers/auth/signin-controller';

export const authRouter = Router();

authRouter.post('/signup', SignupController);
authRouter.post('/signin', SignInController);
