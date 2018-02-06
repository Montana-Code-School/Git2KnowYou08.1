const express = require("express");
const path = require("path");
const app = express()
const port = process.env.PORT || 3001;

app.use('/', express.static(path.join(__dirname, "public")));
app.use('/trevor', express.static(path.join(__dirname, "public/trevor")));
app.use('/eli', express.static(path.join(__dirname, "public/eli")));
app.use('/ben', express.static(path.join(__dirname, "public/ben")));
app.use('/erin', express.static(path.join(__dirname, "public/erin")));
app.use('/eric', express.static(path.join(__dirname, "public/eric")));
app.use('/ian', express.static(path.join(__dirname, "public/ian")));
app.use('/kelsey', express.static(path.join(__dirname, "public/kelsey")));
app.use('/laura', express.static(path.join(__dirname, "public/laura")));
app.use('/timfox', express.static(path.join(__dirname, "public/timfox")));
app.use('/tyler', express.static(path.join(__dirname, "public/tyler")));

app.listen(port, () => console.log("it works 3001"))
