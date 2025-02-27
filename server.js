const express = require("express");

const app = express();

const PORT = 8082;

const books = [
    {id:1, title:'The great Gatsby', author:'F. Scott Fitzgerald'},
    {id:2, title:'The Moby Dick', author:'Herman Melville'},
    {id:3, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
];

//receiving incoming data from client configuration
app.use(express.json());

//Home route
app.get('/', (req,res) => {
    res.json({
        status: 'success',
        message:"welcome to my book api using express"
    })
});

//fetching all books
app.get('/books', (req,res) =>
{
    res.json({
        status: 'success',
        message:"books fetched successfully",
        data: books
    });
});

//fetching a single book
app.get('/books/:id', (req,res) =>
    {   const id = parseInt(req.params.id);
        //console.log(req.params.id);
        const bookFound = books.find((book) => book.id === id);
        console.log(bookFound);
        if(!bookFound){
            return res.json({
                status: 'failed',
                message:`book with id ${id} not found`
            });
        }
        res.json({
            status: 'success',
            message:"books fetched successfully",
            data: bookFound,
            
        });
    });

    //create a book
app.post('/books', (req,res) =>
    {   
        console.log(req.body);
        const newPost = req.body;
        books.push(newPost);
        
        res.json({
            status: 'success',
            message:"book created successfully",
            data: books,
            
            
        });
    });


//START THE SERVER

app.listen(PORT, console.log(`server is running on port ${PORT}`)

);