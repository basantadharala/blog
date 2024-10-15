import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs",
        { includeFooter: true }
    );

})


app.post("/submit", (req, res) => {
    const title = req.body.title;
    const postContent = req.body.postContent;


    posts.push({ title, postContent });

    res.render("post.ejs", {
        posts: posts,
        includeFooter: false,
    });

})

app.get("/home", (req, res) => {
    res.render("home.ejs");

})

app.get("/about", (req, res) => {
    res.render("about.ejs");

})




app.listen(port, () => {
    console.log(`The server is running in port ${port} `);
})