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
        title: 'Basketball is the best sport',
        blog_content: 'I think basketball is the greatest sport',
        user_id: 1,
    },

    {
        title: 'Love the rain',
        blog_content: 'I love when it rains',
        user_id: 2,
    },

    {
        title: 'Coding is fun',
        blog_content: 'Coding is one of my favorite things to do',
        user_id: 3,
    },
]

const comment = [
    {
        content: 'dummy0',
        user_id: 1,
        post_id: 1
    },
    {
        content: 'dummy1',
        user_id: 2,
        post_id: 2
    },
    {
        content: 'dummy2',
        user_id: 3,
        post_id: 3
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

