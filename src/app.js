// Setup express application with right middleware and port configuration
import express from 'express';

const app = express();

//
app.get('/', (req, res) => {
  res.status(200).send('Hello from the acquisitions service!');
});

//export the app instance for use in other modules
export default app;
