var express = require("express");
var fs = require("fs");
var md = require("markdown-it")({breaks: true, links: true, html: false, typographer: true});

var posts = fs.readdirSync(`${__dirname}/posts`).reverse();

var app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/assets/:file", (req, res) => {
	if(fs.existsSync(`${__dirname}/assets/${req.params.file}`)) {
		res.sendFile(`${__dirname}/assets/${req.params.file}`);
	} else {
		res.sendStatus(404);
	}
});

app.get("/", (req, res) => {
	posts = fs.readdirSync(`${__dirname}/posts`).reverse();
	var postsObj = posts.length > 0 ? posts.map(post => {
		obj = { name: post.replace(".txt", ""), content: md.render(fs.readFileSync(`${__dirname}/posts/${post}`, "utf8")) };
		return obj;
	}) : null;
	res.render("index", { posts: postsObj });
});

app.listen(9999, () => console.log("Listening on 9999"));