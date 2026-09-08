import express from 'express';
import { error } from 'node:console';

const app = express();
const port = 8000;

// Object array
const myShop = [
    {
      shopId: 100,
      shopName: "Adidas",
      shopContact: "admin.adidas@mail.com",
      shopAddress: "Dindaeng, Bangkok, 10400",
      shopOpen: true
    },
    {
      shopId: 200,
      shopName: "H&M",
      shopContact: "admin.h&m@mail.com",
      shopAddress: "Bangna, Bangkok, 10260",
      shopOpen: true
    },
    {
      shopId: 300,
      shopName: "KFC",
      shopContact: "admin.kfc@mail.com",
      shopAddress: "Mueang, Nonthaburi, 11000",
      shopOpen: true
    }
];

//http://localhost:8000/
app.get('/', (req, res) => {
    res.send('Hello, Miss Chanya Chiewsarikij.');
});

// http://localhost:8000/shops/200
app.get('/shops/:shopId', (req, res, next) => {
  try{
    let shid = Number(req.params.shopId);
    if(isNaN(shid)){
        const error = new Error("Invalid shop id, please try again.");
        error.statusCode = 404;
        throw error;
    }
    const myRes = myShop.filter(
        myObj => { return (myObj.shopId === shid) }
    );
    let myText = '';
    myText+= `<h1>Shop information:</h1><hr/>`;
    myText+= `<b>Shop ID:</b> ${myRes[0].shopId}<br/>`;
    myText+= `<b>Name:</b> ${myRes[0].shopName}<br/>`;
    myText+= `<b>Contact:</b> ${myRes[0].shopContact}<br/>`;
    myText+= `<b>Address:</b> ${myRes[0].shopAddress}<br/>`;
    myText+= `<b>Shop Status:</b> ${myRes[0].shopOpen}<br/>`;
    res.send(myText);
  }catch (error){
    next(error);
  }
    
});

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
