const mongoose = require('mongoose');


async function createCourse(){

    const result = await course.save();
    console.log(result);
}
createCourse();


const courseSchema = new mongoose.Schema({
    name: string,
    author: string,
    tags:[string],
    date: {type:date, default: now},
    isPublished: Boolean
});



//classes, objects
const CoursedB = mongoose.model('course', courseSchema)
const course = new Course({
    name: 'angular course',
    author: 'mosh',
    tags: ['node', 'frontend'],
});
async function getCourses(){
    const courses = await CoursedB.find({author:'mosh', isPublished: true})
    //.limit(10)
    // .find()
    // .or([{author:'mosh' }, {isPublished:true}])
    // this carrot punctuation character is used to filter the beginning of the string we want to find
    //for instance, if we want it to return everything written by mosh
    //even if it is written by mosh hamedani or any surname, anywhere mosh apppears, it will return it
    .find({author:/^mosh/})
    //we use this to work with the end of a string($)and it is case sensitive. to make it case insensitive
    //we will append an (i) to it
    .find({author:/hamedani$/})
    // if we want to find a word written anywhere (it could be in the beginning or the end or middle, 
    //here is the syntax






    
};