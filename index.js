import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');

    const blogFind = await Blog.exists({author: 'John Doe'});

    console.log(blogFind);
