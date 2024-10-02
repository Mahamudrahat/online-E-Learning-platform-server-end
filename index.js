const express=require("express");
const cors=require("cors");
const app=express();
const port=process.env.port|| 5000;

const news=require("./data/news.json");
const catagories=require("./data/categories.json");

app.use(cors());
app.get('/',(req,res)=>{
    res.send('new portal server is running');
});

app.get('/news',(req,res)=>{
 res.send(news);
});

app.get('/catagories',(req,res)=>{
    res.send(catagories);
   });

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
