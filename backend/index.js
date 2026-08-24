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

app.get("/api/movie", async(req,res)=>{
 try{
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
 catch(error){
console.error(error);
res.status(500).json({
  error:"failed to fetch movies"
})
 }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});