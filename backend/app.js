const express = require('express');
const app = express();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
  "Origin,X-Requested-with, Content-TypeError, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
})

app.get('/api/blogs',(req,res)=>{
  const blogs=[
  {
  id:"sa686",
  title:"Movie12",
  content:"mov cont1"
  },
  {
  id:"sa6845",
  title:"Movie2",
  content:"mov cont2"
  }
];
res.status(200).json({
  mess:"Post is done - success story!",
  blogs:blogs
})

});

module.exports = app;
