const express = require('express');
const Joi = require('joi'); // Make sure 'Joi' is imported correctly

const router = express.Router();

// Sample genres data
const genres = [
  { id: 1, name: "Drama" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Action" }
];

// GET all genres
router.get('/', (req, res) => {
  res.send(genres);
});

// GET specific genre by ID
router.get('/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Genre not found');
  res.send(genre);
});

// Validation function for genres
const validateGenre = (genre) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  return schema.validate(genre);
};

// POST a new genre
router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.status(201).send(genre);
});

// PUT update an existing genre by ID
router.put('/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Genre not found');

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

// DELETE a genre by ID
router.delete('/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Genre not found');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send('Genre deleted successfully');
});

module.exports = router;
