const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: '', // need foreign key
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: '', // need foreign key
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: '', // need foreign key
    onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };