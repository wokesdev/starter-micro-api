var http = require('http');
import { getToken, getPost } from '@threadjs/threads.js';
http.createServer(function (req, res) {
    await getToken('kuramanimecom', 'wedontknow123!').then(async token => {
    	await getUser('25025320', token).then(user => {
    		console.log(user)
    	})
    })
    // console.log(`Just got a request at ${req.url}!`)
    res.write(user);
    res.end();
}).listen(process.env.PORT || 3000);
