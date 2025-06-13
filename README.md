# Textractor Web UI

A simple frontend app that reads messages from Textractor using the web_socket extension and displays them in your browser to use with Yomitan or Yomichan.

![image](https://github.com/user-attachments/assets/edb4532c-b36c-46d9-baee-115b3a3eb90c)

## How to use

1) Set up  [Textractor](https://github.com/Artikash/Textractor)
2) Install and enable [textractor-websocket](https://github.com/AuroraWright/textractor-websocket) extension - it creates ws server and stream messages from Textractor
3) Hook Textractor up to the game
4) Run this frontend (the hard way, in dev mode 😎)
```shell
cd whatever/textractor-web-ui
npm i
npm run dev
```
This will start a dev server on http://localhost:3000.
If all goes according to plan, your Textractor with the websocket extension should be running by then and ready to send messages on port 6677. Trigger new message and expect it to appear on the screen. Enjoy!

## Features
Just one for now: all messages stored in the LS. You can clear them using context menu 

## Issues
I built this UI for myself, so I didn’t really bother with polishing, bug hunting, writing detailed instructions and stuff. No clue if anyone will ever stumble across it and try to run it. If it doesn’t work for you and you're not up for forking and fixing it, feel free to open an issue — I’ll either fix it or at least share some thoughts.

## Development
```shell
cd textractor-web-ui
npm i
npm run dev
```
