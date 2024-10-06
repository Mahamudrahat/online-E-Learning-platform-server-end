
const express = require("express");
const cors=require("cors");
const app=express();
const port=process.env.port|| 5000;


const courses=require("./data/courseDetails.json");
const books=require("./data/Book.json");
app.use(cors());
app.get('/',(req,res)=>{
    res.send('new portal server is running');
});


app.get('/books',(req,res)=>{
    res.send(books);
   });

app.get('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const selectedBook = books.find((book) => book.bookId === id);
    res.send(selectedBook);
   });

app.get('/courses',(req,res)=>{
    res.send(courses);
   });

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id; 
    const selectedCourse = courses.find((course) => course._id === id);
    res.send(selectedCourse);
   });  

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
