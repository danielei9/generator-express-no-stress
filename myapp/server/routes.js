import examplesRouter from './api/controllers/examples/router.js';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
}
