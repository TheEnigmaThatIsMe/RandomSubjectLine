# 📬 Random Subject Line Generator

A simple React app that generates random email subject lines using OpenAI’s GPT model. Great for marketers, writers, or anyone looking to spice up their email campaigns with fresh, engaging subject lines in a variety of styles.

## ✨ Features
🎯 Choose from multiple subject line styles:
-	Funny
-	Serious
-	Random
-	Urgent
-	Friendly
-	Clickbait
-	Inspirational
-	Question-Based
-	Emoji-Powered

🔄 Instantly generate subject lines using OpenAI’s GPT-4o

⚡ Clean UI with Material-UI components

💬 Real-time results

## 🚀 Getting Started

Prerequisites:
-	Node.js (v14 or later)
-	npm or yarn
-	An OpenAI API key

## Installation
```bash
git clone https://github.com/TheEnigmaThatIsMe/RandomSubjectLine.git
cd RandomSubjectLine
npm install
```

## Setup
Create a .env file (or directly replace in the code) and add your OpenAI API key:
```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```
> Note: The current implementation passes the key via the client (with dangerouslyAllowBrowser: true), which is not secure. For production use, implement a backend proxy.

## Run the App
```bash
npm run dev
```
The app will be available at [http://localhost:5173/](http://localhost:5173/).

## 🧠 How It Works
-	The app uses OpenAI's `chat.completions.create` method with GPT-4o.
-	You select a style from a dropdown.
-	On click, the app sends a prompt like:
"Generate a friendly email subject line."
-	The AI returns a creative subject line based on the selected style.

## 🛡️ Disclaimer

This project sends API requests directly from the browser, which can expose your API key. Use a secure backend if deploying publicly.
