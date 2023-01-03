const router = require('express').Router();
const { Blog, User, Comment } = require('../../Models');
const auth = require('../../utils/auth')

router.get('/', (req, res) => {
    Blog.findAll({
        attributes: ['id', 'title', 'blog_content', 'created_at'],
        order: [
            ['created_at', 'DESC']
        ],
        include: [{ model: User, attributes: ['username'] }        ]
    })
});


module.exports = router;