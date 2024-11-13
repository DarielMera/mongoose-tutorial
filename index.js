import mongoose from 'mongoose';
import Blog from './model/model/Blog.js';
import User from './model/model/User.js';

    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB');


const article = await Blog.findById("67345b294b003ad5f0e55098").exec()
article.title = "Updated Title"
await article.save()

console.log(article)