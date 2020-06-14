const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser')
const config = require('./config/config'); 
const mongoose = require('mongoose')
// mongoose.connect(config.dbURL, { useNewUrlParser: true, useCreateIndex: true, },function(error){
//     if(error) throw error
//       console.log(`connect mongodb success`);
//   }) .catch((err) => {
//     console.log(err);
//   });
  const port = process.env.PORT||3002;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req, res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
  }
  


// app.get('/payload', function(req, res){
//     let result={'payload':{}}
//     const section1 = db.collection(collection1Name);
//     const section2 = db.collection(collection2Name);
//     const section3 = db.collection(collection3Name);
//     const sections = [section1, section2, section3];
//
//     section1.find({}).toArray(function(err, docs) {
//         result.payload['section1'] = docs;
//         console.log(docs);
//
//         section2.find({}).toArray(function(err, docs) {
//             result.payload['section2'] = docs;
//             section3.find({}).toArray(function(err, docs) {
//                 result.payload['section3'] = docs;
//                 console.log(result.payload.section2);
//
//                 res.send(result)
//             });
//         });
//     });
//
//     // sections.map((sec)=>{
//     //     sec.find({}).toArray(function(err, docs) {
//     //         payload.push(docs)
//     //     });
//     // })
//
//
//
// })

app.listen(port, () => console.log(`Example app listening on port${port} !`))
