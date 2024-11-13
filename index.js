import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';
import User from './model/model/User.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');

    const user = await User.create({
        name: 'John Doe',
        email: 'jhoneDoeNew@nose.com',
    });

    const article = await Blog.create({
        title: 'New Article',
        slug: 'new-article',
        author: user._id,
        content: 'This is a new article',
        tags: ['new', 'article'],
    });

    console.log(article);
