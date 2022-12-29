const sequelize = require('../Config/Connection')
const { Blog, User, Comment } = require('../Models');
const router = require('express').Router();

// route to get all blog posts
router.get('/', (req, res) => {
  Blog.findAll(
    {
      attributes: ['id', 'title', 'blog_content', 'created_at'],
      include: [{
        model: Comment,
        attributes: ['id', 'content', 'blog_id', 'user_id', 'created_at'],
        order: [['created_at', 'DESC']],
        include: {
          model: 'User',
          attributes: ['username']
        }
      }]
    },
    {
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: ['id', 'content', 'blog_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    }
  )
}).then(blogData => {
  const blogs = blogData.map(blog => blog.get({ plain: true }));
  res.render('homepage', { blogs, loggedIn: req.session.loggedIn });
}).catch(err => {
  console.log(err);
  res.status(501).json(err);
});;

// route to find one blog
router.get('/login', (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id, blog_content', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'content', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
}).then(blogData => {

  if (!blogData) {
    res.status(404).json({ message: 'No post found with this id' });
    return;
  }

  const blog = blogData.get({ plain: true });

  res.render('single-blog', {
    blog,
    loggedIn: req.session.loggedIn
  });
})
  .catch(err => {

    console.log(err);
    res.status(500).json(err);
  });

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