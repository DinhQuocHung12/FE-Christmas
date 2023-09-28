const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"store_christmas"
})

app.post('/register', (req,res) =>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err,data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req,res) =>{
    const sql = "SELECT * FROM login WHERE `email`=? AND `password` =?";
    db.query(sql, [req.body.email,req.body.password], (err,data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        } else{
            return res.json("Failed");
        }
    })
})
//crud
app.get("/allproducts", (req,res)=>{
    const sql = "SELECT * FROM products";
    db.query(sql,(err,data)=>{
        if(err) {return res.json(err);
        } else{
            return res.json(data);
        }
        
    })

    app.post("/allproducts", (req,res)=>{
        const sql = "INSERT INTO products (`title`,`description`,`price`,`cover`) VALUES (?)";
        const values = [
            req.body.title,
            req.body.description,
            req.body.price,
            req.body.cover,
        ];

        db.query(sql,[values],(err,data)=>{
            if(err){
                return res.json(err);
            } else{
                return res.json("Products has been created successfully");
            }
        })
    })

    app.delete("/allproducts/:idproducts", (req, res) =>{
        const productid = req.params.idproducts;
        const mysql = "DELETE FROM products Where idproducts = ?"

        db.query(mysql,[productid],(err,data) =>{
            if (err) return res.json(err);
            return res.json("Products has been deleted successfully.");
        })   
    })

    app.put("/allproducts/:idproducts", (req, res) =>{
        const productid = req.params.idproducts;
        const mysql = "UPDATE products SET `title` = ?, `description` = ?, `price = ?`,`cover ` = ? WHERE idproducts = ?";

        const values = [
            req.body.title,
            req.body.description,
            req.body.price,
            req.body.cover,
        ];

        db.query(mysql,[...values,productid],(err,data) =>{
            if (err) return res.json(err);
            return res.json("Product has been Update successfully.");
        })   
    })

    
})

app.listen(3001,() =>{
    console.log("listening");
})