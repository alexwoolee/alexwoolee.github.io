import { MongoClient, ServerApiVersion } from 'mongodb';
import express from "express";
import cors from "cors";
import records from "records"
const uri = "mongodb+srv://alexwoolee:passheadspaceword@cluster-0.whtxe27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-0";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

