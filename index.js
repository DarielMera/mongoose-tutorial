import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');

    const blogFind = await Blog.where('author').equals('John Doe').select('title author')

    console.log(blogFind);
