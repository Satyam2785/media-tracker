import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers:{
    Authorization : `Bearer ${process.env.tmdb_key}`
  },
});

const app=express();
app.use(cors());
app.use(express.json());

const port=3000;


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/:type", async(req,res)=>{
 try{
  const type= req.params.type;
  let tmdbEP;
  if(type==="movie"){
     const response= await tmdb.get("/movie/popular");
  
  const movies= response.data.results.map((movie)=>({
    id:movie.id,
    name:movie.title,
    type: "movie",
    rating: movie.vote_average,
    img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }))
  console.log(movies);
  res.json(movies);
  }
  else{
     const response= await tmdb.get("/tv/popular");
  
  const series= response.data.results.map((tv)=>({
    id:tv.id,
    name:tv.name,
    type: "series",
    rating: tv.vote_average,
    img: `https://image.tmdb.org/t/p/w500${tv.poster_path}`
  }))
  console.log(series);
  res.json(series);
  }
 }
 catch(error){
console.error(error);
res.status(500).json({
  error:"failed to fetch media"
})
 }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});