# Chat-App
Users can join or create their own chat rooms and then chat online with each other and also share their current location. The link to 
the website is :
https://common-chat-app.herokuapp.com

# Features
Web sockets protocol is implemented using socket.io wherein a client's message is sent to the server and then broadcasted by the server to 
every person present in the common room.

# Stack
* Express Framework - To set up a node.js server environment
* MustacheJS - To implement templating and render dynamic messages
* MomentJS - To format the timestamp when the message was sent by the client
* QueryString - To parse the username and room name as an object present in the query string of the URL
