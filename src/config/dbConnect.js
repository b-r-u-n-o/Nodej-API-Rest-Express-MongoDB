import mongoose from "mongoose";

const strConnection = "your string connection"
mongoose.connect();

let db = mongoose.connection;

export default db;