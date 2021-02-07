const db = require('./db/connection');

exports.get = function (req, res) {
  db.from('movies')
    .select('*')
    .where({ id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
exports.getList = function (req, res) {
  db.from('movies')
    .select('*')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.add = function (req, res) {
  db.from('movies')
    .insert(req.body, 'id')
    .then((result) => {
      res.status(201).send({ id: result[0], ...req.body });
    })
    .catch((err) => {
      if ((err.routine = '_bt_check_unique')) return res.status(400).send('Movie already exists');

      res.status(500).send(err.message);
    });
};

exports.update = function (req, res) {
  db.from('movies')
    .where({ id: req.params.id })
    .update(
      {
        title: req.body.title,
        genre: req.body.genre,
        info: req.body.info,
        rating: req.body.rating,
        rated: req.body.rated
      },
      ['id', 'title', 'genre', 'info', 'rating', 'rated', 'img']
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

exports.delete = function (req, res) {
  db.from('movies')
    .where({ id: req.params.id })
    .del(['id', 'title'])
    .then((result) => {
      if (result.length < 1) return res.status(500).send('Movie not found or cannot be deleted');
      res.status(200).send(`Movie ${result[0].title} was succesfully deleted`);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
