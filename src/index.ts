import { dbConfig } from './config/db/db.config';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.development.local` });
dbConfig.init();

import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.router';
import { userRouter } from './routes/user.router';
import { productRouter } from './routes/product.router';
import { session } from './config/session';
import passport from './config/passport';

const app = express();

app.use(cors());
app.use(express.json());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
