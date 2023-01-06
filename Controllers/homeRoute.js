const sequelize = require('../Config/Connection')
const { Blog, User } = require('../Models');
const router = require('express').Router();

// route to get all blog posts
router.get('/', (req, res) => {
  Blog.findAll(
    {
      include: [{
        model: User,
        order: [['created_at', 'DESC']],
        attributes: ['id']
      }]
    },
  ).then(blogData => {
    const blogs = blogData.map(blog => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', { blogs });
  }).catch(err => {
    console.log(err);
    res.status(501).json(err);
  });;
})


// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;