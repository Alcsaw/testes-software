import express from 'express';

const routes = express.Router();

routes.get('/lesson1', (req, res) => {
  console.log("1");
  res.send("1");
});

export default routes;
