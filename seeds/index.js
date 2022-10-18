
const { User, Blog, Comment } = require('../Models')

const users = [
    {
        username: 'Martin',
        password: 'doesntmatter'
    },

    {
        username: 'Tom',
        password: 'lovetocode'
    },

    {
        username: 'Jordan',
        password: 'cookies4life'
    },
]

const blog = [
    {
        title: 'Basketball is the best sport',
        author: 'Martin',
        date_posted: '01/15/22',
        content: 'I think basketball is the greatest sport',
        user_id: 2,
    },

    {
        title: 'Love the rain',
        author: 'Tom',
        date_posted: '12/23/22',
        content: 'I love when it rains',
        user_id: 1,
    },

    {
        title: 'Coding is fun',
        author: 'Jordan',
        date_posted: '05/11/22',
        content: 'Coding is one of my favorite things to do',
        user_id: 3,
    },
]

const comment = [
    {
        author: 'Martin',
        date_posted: '08/24/22',
        content: 'This was a great post',
        user_id: 2,
    },
    {
        author: 'Jordan',
        date_posted: '04/30/22',
        content: 'Love this, wanna hear more',
        user_id: 2,
    },
]


const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});
const seedBlogs = () => Blog.bulkCreate(blogPosts);
const seedComments = () => Comments.bulkCreate(commentPosts);

console.log('working');

