use esnext;

var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3334/');

ws.on('open', function open() {
  // ws.send('something');

  var json = { type:'echo', payload:'あいうえお' };
  ws.send(JSON.stringify(json));
});

ws.on('message', function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  console.log(data);
});

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'OHAI> '
// });

// rl.prompt();

// rl.on('line', (line) => {
//   switch(line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log(`Say what? I might have heard '${line.trim()}'`);
//       break;
//   }
//   rl.prompt();
// }).on('close', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });