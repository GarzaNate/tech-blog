
const sequelize = require('../Config/Connection');
const { User, Blog, Comment } = require('../Models')
const users = [
    {
        username: 'Martin',
        email: 'test@test.com',
        password: 'doesntmatter'
    },

    {
        username: 'Tom',
        email: 'bob@test.com',
        password: 'lovetocode'
    },

    {
        username: 'Jordan',
        email: 'pop@test.com',
        password: 'cookies4life'
    },
]

const blog = [
    {
        author: 'Martin',
        title: 'Basketball is the best sport',
        date_posted: '01/15/22',
        content: 'I think basketball is the greatest sport',
        user_id: 2,
    },

    {
        author: 'Tom',
        title: 'Love the rain',
        date_posted: '12/23/22',
        content: 'I love when it rains',
        user_id: 1,
    },

    {
        author: 'Jordan',
        title: 'Coding is fun',
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


const seedUsers = () => User.bulkCreate(users, {
    individualHooks: true
});
const seedBlogs = async () => await Blog.bulkCreate(blog);
const seedComments = () => Comment.bulkCreate(comment);


let test = async ()=> {

    await sequelize.sync({ force: true }).then(async () => {
      await seedUsers()
      await  seedBlogs()
      await seedComments()
      });
}
 test()
console.log('working');

