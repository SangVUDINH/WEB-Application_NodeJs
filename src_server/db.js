const Sequelize = require("sequelize");

// initialze an instance of Sequelize
const sequelize = new Sequelize({
    database: 'web',
    username: 'root',
    password: 'dada1234',
    dialect: 'mysql',
});
  
// check the databse connection
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
    
var UserModel = require('./models/user');
var ProductModel = require('./models/product');
var ArticleModel = require('./models/article');

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Article = ArticleModel(sequelize, Sequelize);

// Create database and tables if doesn't exist
User.hasMany(Article); // Will add userId to Article model
Article.belongsTo(User); // Will also add userId to Article model

sequelize.sync()//{force:true}
.then(()=>{
  console.log('Database and tables created!!');
})

module.exports = {
    User,
    Product,
    Article
}