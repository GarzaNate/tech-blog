const router = require('express').Router();
const { Blog } = require('../../Models');

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(400).json({
                message: 'No Blog found with this id.'
            });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;