const express = require('express');

require('@babel/register');

const render = require('./render').default;

const app = express();

app.get('/', (rew, res) => {
   const response = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Homework 2, Server rendering</title>
            </head>
            <body>
                <div id="root">${render()}</div>
            </body>
        </html>
   `;
   res.send(response);
});

app.listen(3001, () => console.log('Server is listening port 3001'))