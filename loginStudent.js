const mongoose= require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Teach_DB");

//check database connection or not
connect.then(()=>{
    console.log("Database connected Successfully")
})
.catch(()=>{
    console.log("Database cannot be connected");
});

//create a schema
const LoginStudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//collection part
const studentCollection = new mongoose.model("users", LoginSchema);


module.exports = studentCollection;
