
import express from 'express'
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Your Telegram bot token
const BOT_TOKEN = process.env.API_KEY;

// Set up your webhook endpoint
app.post(`/webhook/${BOT_TOKEN}`, async (req, res) => {
  // Handle incoming Telegram updates here
  // You can process messages, commands, etc.
  // Example: Log the update
  console.log(req.body);

  // Respond to the Telegram API (optional)
  // Example: Send a message back
  const chatId = req.body.message.chat.id;
  const text = 'Hello from your Telegram bot!';
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
