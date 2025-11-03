import express from "express";

const app = express(); // App is an instance of express, we import express by calling express() 

const PORT = 3000;

app.use(express.json());

// Handle GET requests - retrieve data
app.get('/get-example', (req, res) => {
  res.send("This is a GET request");
});

// Handle POST requests - send data
app.post('/post-example', (req, res) => {
  res.send("This is a POST request");
});

// Handle PUT requests - update (or replace) data
app.post('put-example', (req, res) => {
  res.send("This is a PUT request");
});

// Handle DELETE requests - remove data
app.delete('/delete-example', (req, res) => {
  res.send("This is a DELETE request");
});

// Handle all HTTP methods 
app.all('/all-example', (req, res) => {
  res.send(`This handles all HTTP methods: ${req.method}`);
});

app.get('/', (req, res) => {
  res.send("Hello, Geeks!");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
