const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

//GET /books - Full book list
router.get('/', (req, res) =>
 Books.findAll({order: [["author", "ASC"]]}).then(function(books){
   res.render('books/index', { books: books, title: "Books" });
 }).catch(function(err){
   res.sendStatus(500);
 })
);

router.get('/new', (req, res) =>
  res.render('books/new-book', {book: Books.build(), title: "New Book"})
);

// //POST Creates a book
// router.post('/new', function(req, res, next) {
//   Books.create(req.body).then(function(book) {
//     res.redirect('/');
//   }).catch(function(err){
//     if(err.name === "SequelizeValidationError") {
//       res.render('books/new-book', {
//         book: Books.build(req.body),
//         title: "New Book",
//         errors: err.errors
//       });
//       console.log(err);
//     } else {
//       throw err;
//     }
//   }).catch(function(err){
//     res.render('error', err);
//     console.log(err);
//   });
// });

// GET /books/new - Shows the create book form


//GET /books/:id/update - Shows the update book form
// router.get('/:id/update', function(req, res, next){
//   Books.findByPk(req.params.id).then(function(book) {
//     if(book) {
//       res.render('books/update-book', {book: book, title: 'Edit Book'});
//     } else {
//       res.render('error', err);
//       // console.log(err);
//     }
//   }).catch(function(err){
//     res.render('error', err);
//     // console.log(err);
//   });
// });

// //POST /books/:id/delete - Deletes book from database.
// router.post('/:id/delete', function(req, res, next){
//   Books.findByPk(req.params.id).then(function(book) {
//     if(book) {
//       return book.destroy();
//     } else {
//       res.render('books/page-not-found');
//     }
//   }).then(() => {
//     res.redirect("/books");
//   }).catch(function(err){
//     res.render('error', err);
//   });
// });

// //POST /books/:id/update - Updates book info in the database.
// router.post('/:id/update', function(req, res, next){
//   Books.findByPk(req.params.id).then(function(book) {
//     if(book) {
//       return book.update(req.body);
//     } else {
//       res.render('error', err);
//     }
//   }).then(function(article){
//     res.redirect("/");
//   }).catch(function(err){
//     if(err.name === "SequelizeValidationError") {
//       let book = Books.build(req.body);
//       book.id = req.params.id;
//       res.render("books/update-book", {
//         book: book,
//         errors: err.errors
//       });
//     } else {
//       throw err;
//     }
//   }).catch(function(err){
//     res.render('error', err)
//   });
// });

module.exports = router;
