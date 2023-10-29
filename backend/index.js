const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const cors = require("cors"); 
const app = express();



const ausModal = require('./models/aus');
const banModal = require('./models/ban');
const chnModal = require('./models/chn');
const gerModal = require('./models/ger');
const indModal = require('./models/ind');
const itlModal = require('./models/itl');
const pakModal = require('./models/pak');
const ukModal = require('./models/uk');
const usaModal = require('./models/us');
const totModal = require('./models/tot');
//const apiRouter = require("./routes/api");
// const tottModal = require('./models/exports');




app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/api", apiRouter);
// Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://ceyloneezadmin:ceyloneez12345@cluster0.m1c223v.mongodb.net/packagingdata",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// Start the server
// app.listen(3000, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(3000,()=>{
  console.log("server is running");
 });


// const app = express();
// const port = 8000;

// app.use(cors());
// app.use(express.json());
// app.use("/api", apiRouter);
// const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb+srv://ceyloneezadmin:ceyloneez12345@cluster0.m1c223v.mongodb.net/packagingdata",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get('/dashboard/Textiles/Australia',async(req,res)=>{
 try {
  const details = await ausModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});
app.get('/dashboard/Textiles/Bangladesh',async(req,res)=>{
 try {
  const details = await banModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});
app.get('/dashboard/Textiles/China',async(req,res)=>{
 try {
  const details = await chnModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});
app.get('/dashboard/Textiles/Germany',async(req,res)=>{
 try {
  const details = await gerModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});
app.get('/dashboard/Textiles/India',async(req,res)=>{
 try {
  const details = await indModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});
app.get('/dashboard/Textiles/Italy',async(req,res)=>{
 try {
  const details = await itlModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});

app.get('/dashboard/Textiles/Pakistan',async(req,res)=>{
 try {
  const details = await pakModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});

app.get('/dashboard/Textiles/UK',async(req,res)=>{
 try {
  const details = await ukModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});

app.get('/dashboard/Textiles/Usa',async(req,res)=>{
 try {
  const details = await usaModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});

app.get('/dashboard/Textiles/Total',async(req,res)=>{
 try {
  const details = await totModal.find();
  // res.send(JSON.stringify(details));
  res.send(details);
  // console.log(typeof(details));
 }catch(error){
  console.log(error);
 }
});



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
  


