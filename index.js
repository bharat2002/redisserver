const express=require('express');
const app=express();
const redis=require('redis');
const client=redis.createClient();
const Publisher=client.duplicate();

client.connect();
Publisher.connect();

app.listen(3001,()=>{
    console.log('listening on port 3001');
})

app.post('/publish',(req,res)=>{
    Publisher.publish('my-channel','Sending from Publisher Port 3001');
    res.send('Message Sent from Publisher.');
})