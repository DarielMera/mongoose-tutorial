import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');

    const article = await Blog.create({
      title: 'How to use Mongoose',
      slug: 'using-mongoose',
      author: 'John Doe',
      content: 'This is the best post ever',
      tags: ['mongodb', 'mongoose', 'nodejs'],
    });

    console.log(article);
