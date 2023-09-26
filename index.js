const express = require("express");
const cors = require("cors");
const api = require("./routes/api");

// express app init
const app = express();

// cors
app.use(cors());

app.get("/", (req, res) => {
    const token = req.headers('Authorization')

    if (!token) {
        return res.status(401).json({message: 'Токен отсутствует'})
    }

})

// application/json parser
app.use(express.json());

app.use("/api", api);

// listen at 8080
app.listen(8000);
 console.log("Сервер запущен http://localhost:8000");
