# ReplyBot

## Description
ReplyBot is a Discord bot programmed in JavaScript using the discord.js-selfbot-v13 library. It listens for messages in a specific server and channel and replies with predefined responses stored in a JSON file. The bot also introduces random delays before replying to messages.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd replybot
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and add your Discord bot token, server ID, channel ID, and user ID:
plaintext
Copy code
DISCORD_TOKEN=your_discord_bot_token
SERVER_ID=your_server_id
CHANNEL_ID=your_channel_id
USER_ID=your_user_id
Start the bot:
bash
Copy code
npm start
Usage
Once the bot is running, it will listen for messages in the specified server and channel.
When a message matches one of the predefined messages in the replies.json file, the bot will reply with the corresponding response after a random delay.
Dependencies
discord.js-selfbot-v13: A powerful JavaScript library for interacting with the Discord API.
dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.
Author
TheFoamer
License
This project is licensed under the ISC License.