# expressblog
Some blog system thingy, running on expressjs.
## About
I get bored a lot so I just decided to make this, it's fully dynamic. A small *blog-ish* system with Markdown to HTML using [markdown-it](https://github.com/markdown-it/markdown-it)
## Usage
When you've cloned and installed the modules, start the application using `node app.js` in the main directory, and go ahead and create a txt file in the `posts` folder, it has to start with the date in this format: mm-dd-yy. Ex: ``01-01-21-Title.txt`. 
When you've doen this, you can go to localhost:9999 (or whatever port you might have changed it to in the bottom of `app.js`) and you will see all of your posts.

## Installation
1. Clone the repo using `$ git clone https://github.com/atlsdev/expressblog.git`.
2. Go to the directory using `$ cd expressblog`
3. Install the modules with `$ npm i`
4. Run the server using `$ node app.js` - OR, you can use a process manager like [PM2](https://www.npmjs.com/package/pm2), [forever](https://www.npmjs.com/package/forever) or anyone you know. 

## Credits
[expressjs](https://expressjs.com/) - The server backend

[markdown-it](https://github.com/markdown-it/markdown-it) - Markdown to HTML parser.

[new.css (modified)](https://github.com/xz/new.css) - pretty & class-less CSS Framework

[@Atlas7005](https://github.com/atlas7005) - For the actual code