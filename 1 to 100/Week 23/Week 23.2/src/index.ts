import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let reciverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data: any) {
    const message = JSON.parse(data);
    console.log("mesage: ",message)
    if(message.type === 'identify-as-sender'){
        senderSocket = ws;
    }
    else if(message.type === 'identify-as-reciver'){
        reciverSocket = ws;
    }
    else if(message.type === 'create-offer'){
        if(reciverSocket) reciverSocket.send(JSON.stringify({type: "offer", offer: message.offer}))
    }
    else if(message.type === 'create-answer'){
        if(senderSocket) senderSocket.send(JSON.stringify({type: "offer", offer: message.offer}))
    }
  });

  ws.send('something');
});