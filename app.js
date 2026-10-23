const express = require("express");
const PORT = 8080;

const app = express();

app.get("/hdit", (req, res) => {
    res.send("Hello World With Alan at hdit");
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`);
});


