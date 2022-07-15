const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')

.then(( ) =>console.log('connected to MongoDB. . .'))

.catch(err =>console.error('could not connect to MongoDB. . .', err))

//const mongoose = require('mongoose');
async function createCourse(){
    const courseSchema = new mongoose.Schema({
        name: string,
        author: string,
        tags:[string],
        date: {type:date, default: now},
        isPublished: Boolean
    });
    const result = await course.save();
    console.log(result);
}
createCourse();



//classes, objects
const Course = mongoose.model('course', courseSchema)
const course = new Course({
    name: 'angular course',
    author: 'mosh',
    tags: ['node', 'frontend'],
});
async function getCourses(){
    const courses = await Course
    .find({author:'mosh', isPublished: true})
    // Course.limit(10),
    // .sort
}