var http = require('http');
import { getToken, getPost } from '@threadjs/threads.js';

let user;
async function setUser() {
    await getToken('kuramanimecom', 'wedontknow123!').then(async token => {
        await getUser('25025320', token).then(user => {
            user = user;
        });
    });
}
setUser();

http.createServer(function (req, res) {
    // console.log(`Just got a request at ${req.url}!`)
    res.write(user);
    res.end();
}).listen(process.env.PORT || 3000);
