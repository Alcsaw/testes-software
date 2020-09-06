import express from 'express';

import Ordination from './Lesson2/Ordination';

const routes = express.Router();

const ordination = new Ordination();

routes.get('/orderArray', (req, res) => {
  if (ordination.orderArray()) {
    res.send(ordination.array);
  } else {
    res.send("Error while atempting to order array");
  }
});

export default routes;
