const express=require("express");
const cors=require("cors");
const app=express();
const port=process.env.port|| 5000;

// const news=require("./data/news.json");
// const catagories=require("./data/categories.json");
const courses=require("./data/courseDetails.json");
const books=require("./data/book.json");
app.use(cors());
app.get('/',(req,res)=>{
    res.send('new portal server is running');
});

// app.get('/news',(req,res)=>{
//  res.send(news);
// });

// app.get('/catagories',(req,res)=>{
//     res.send(catagories);
//    });
app.get('/books',(req,res)=>{
    res.send(books);
   });

app.get('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id); // Get id from URL and convert to a number
    const selectedBook = books.find((book) => book.bookId === id);
    res.send(selectedBook);
   });

app.get('/courses',(req,res)=>{
    res.send(courses);
   });

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
