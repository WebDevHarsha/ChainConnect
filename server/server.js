const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); 

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); 

const url = 'mongodb://localhost:27017/';
const dbName = 'mydb';

app.post('/api/submitFormData', async (req, res) => {
  const formData = req.body;

  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection('mycollection'); // Replace with your collection name

    await collection.insertOne(formData);

    client.close();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error inserting form data into MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});