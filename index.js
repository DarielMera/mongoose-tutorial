import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');

    // Create a new blog post object
    // const article = await Blog.create({
    //   title: 'How to use Mongoose',
    //   slug: 'using-mongoose',
    //   published: true,
    //   content: 'This is how you use Mongoose to interact with MongoDB',
    //   tags: ['mongodb', 'mongoose', 'nodejs'],
    //   createdAt: new Date().toLocaleString(),
    // });

    // article.title = 'How to use Mongoose with Node.js';
    // await article.save();

const article = await Blog.findById('6734512165afdcf256b97265').exec();

    console.log(article);
