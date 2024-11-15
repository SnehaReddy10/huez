import mongoose from 'mongoose';

export const dbConfig = {
  init: () => {
    mongoose
      .connect(
        `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:27017/`
      )
      .then(() => {
        console.log('Connected to DB');
      })
      .catch((err) => {
        console.log('Failed connecting to DB', err);
      });
  },
};
