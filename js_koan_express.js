/*********************************************************************************************************
 * 
 *********************************************************************************************************
 *   ___  __    ________  ________  ________           ________  ________                                
 *  |\  \|\  \ |\   __  \|\   __  \|\   ___  \        |\   __  \|\  _____\                               
 *  \ \  \/  /|\ \  \|\  \ \  \|\  \ \  \\ \  \       \ \  \|\  \ \  \__/                                
 *   \ \   ___  \ \  \\\  \ \   __  \ \  \\ \  \       \ \  \\\  \ \   __\                               
 *    \ \  \\ \  \ \  \\\  \ \  \ \  \ \  \\ \  \       \ \  \\\  \ \  \_|                               
 *     \ \__\\ \__\ \_______\ \__\ \__\ \__\\ \__\       \ \_______\ \__\                                
 *      \|__| \|__|\|_______|\|__|\|__|\|__| \|__|        \|_______|\|__|                                
 *                                                                                                     
 *                                                                                                     
 *                                                                                                     
 *   _______      ___    ___ ________  ________  _______   ________   ________        ___  ________      
 *  |\  ___ \    |\  \  /  /|\   __  \|\   __  \|\  ___ \ |\   ____\ |\   ____\      |\  \|\   ____\     
 *  \ \   __/|   \ \  \/  / | \  \|\  \ \  \|\  \ \   __/|\ \  \___|_\ \  \___|_     \ \  \ \  \___|_    
 *   \ \  \_|/__  \ \    / / \ \   ____\ \   _  _\ \  \_|/_\ \_____  \\ \_____  \  __ \ \  \ \_____  \   
 *    \ \  \_|\ \  /     \/   \ \  \___|\ \  \\  \\ \  \_|\ \|____|\  \\|____|\  \|\  \\_\  \|____|\  \  
 *     \ \_______\/  /\   \    \ \__\    \ \__\\ _\\ \_______\____\_\  \ ____\_\  \ \________\____\_\  \ 
 *      \|_______/__/ /\ __\    \|__|     \|__|\|__|\|_______|\_________\\_________\|________|\_________\
 *               |__|/ \|__|                                 \|_________\|_________|         \|_________|
 *                                                                                                     
 *********************************************************************************************************/

// 🧘‍♂️ The Koan of HTTP Verbs & Status Codes
import express from 'express';
import chalk from 'chalk';
import http from 'http';

const app = express();
app.use(express.json());

const PORT = 4000;
let ancientScroll = { content: 'original wisdom' };

function mustAssert(condition, message, base64) {
  if (!condition) {
    console.error(chalk.redBright(`🛑 ${message}`));
    process.exit(1);
  } else {
    console.log(chalk.green(Buffer.from(base64, 'base64').toString('utf8')));
  }
}

const server = app.listen(PORT, () => {
  console.log(chalk.cyan('\n📜 The Koan of HTTP Verbs begins on port 4000\n'));
});

// Helper
function makeRequest({ method = 'GET', path = '/', body = null }) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;

    const options = {
      hostname: 'localhost',
      port: PORT,
      path,
      method,
      headers: data
        ? {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        }
        : {},
    };

    const req = http.request(options, (res) => {
      let chunks = '';
      res.on('data', (c) => (chunks += c));
      res.on('end', () => {
        resolve({ body: chunks, status: res.statusCode });
      });
    });

    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

//
// Part 1: The POST Offering
//
app.post('/offer', (req, res) => {
  if (req.body.item === 'incense') {
    return res.status(201).send('The incense is accepted.');
  }
  res.status(400).send('This is not incense.');
});

const postResponse = await makeRequest({
  method: 'POST',
  path: '/offer',
  body: { item: 'incense' },
});
mustAssert(
  postResponse.status === __ && postResponse.body === __,
  'POST did not bring the offering.',
  'VGhlIG9mZmVyaW5nIGhhcyBiZWVuIGFjY2VwdGVkLg==' // "The offering has been accepted."
);

//
// Part 2: The PUT Renewal
//
app.put('/scroll', (req, res) => {
  if (req.body.content) {
    ancientScroll.content = req.body.content;
    return res.status(200).send('Scroll updated.');
  }
  res.status(422).send('Missing scroll content.');
});

const putResponse = await makeRequest({
  method: 'PUT',
  path: '/scroll',
  body: { content: 'renewed wisdom' },
});
mustAssert(
  ancientScroll.content === __ && putResponse.status === __,
  'PUT failed to renew the scroll.',
  'VGhlIHNjcm9sbCBoYXMgbmV3IHdpc2RvbS4=' // "The scroll has new wisdom."
);

//
// Part 3: The DELETE Release
//
app.delete('/scroll', (req, res) => {
  ancientScroll = null;
  res.status(204).send();
});

const deleteResponse = await makeRequest({ method: 'DELETE', path: '/scroll' });
mustAssert(
  deleteResponse.status === __,
  'DELETE did not release attachment.',
  'VGhlIHNjaHJvbGwgaGFzIGJlZW4gcmVsZWFzZWQu' // "The scroll has been released."
);

//
// Part 4: The 404 Reflection
//
app.get('/emptiness', (req, res) => {
  res.status(404).send('This place is empty.');
});

const missingResponse = await makeRequest({ method: 'GET', path: '/emptiness' });
mustAssert(
  missingResponse.status === __ && missingResponse.body === __,
  'Emptiness did not return the void.',
  'VGhlIHZvaWQgaXMgbm90aGluZywgYW5kIHRoYXQgaXMgdGhlIGxlc3Nvbg==' // "The void is nothing, and that is the lesson."
);

//
// Part 5: Final Seal
//
server.close(() => {
  console.log(chalk.magenta('\n🌀 FINAL TEACHING: Your hands know all verbs. Walk with them wisely.\n'));
});
