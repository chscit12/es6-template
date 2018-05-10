import express from 'express'
import http from 'http'
import fs from 'fs'
import path from 'path'

const app = express();
const port = 8000;

http.createServer(app).listen(port);

process.title = 'nodeserver';

app.use('/', express.static( path.join(__dirname, './web')));

app.get('/', (req, res) => {
	console.log('request!');
});