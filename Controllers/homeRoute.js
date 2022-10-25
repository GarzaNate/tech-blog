const router = require('express').Router();
const { Blog, User } = require('../Models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
    const blogPosts = await Blog.findAll({
        include: [
            {
                model: User, 
                attributes: ['username'],
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', { blogs });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  // SignUp route
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

module.exports = router;