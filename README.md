# 🔗 URL Shortener App

A simple and user-friendly React-based **URL Shortener** that allows users to shorten long URLs, optionally create custom shortcodes, and view basic statistics like click data and expiry time.

---

## 🚀 Features

- ✅ Add 1–5 long URLs at once  
- ✅ Optional custom shortcode for each URL  
- ✅ Enter validity (expiry time in minutes)  
- ✅ Redirect short URL to actual long URL (demo logic)  
- ✅ Simulated statistics page with clicks and locations  
- ✅ Styled cleanly with Material UI  
- ✅ Logs every action using a custom middleware logger  

---

## 🛠️ Tech Stack

- React JS (via Create React App)  
- Material UI (MUI)  
- React Router DOM  
- Axios (future API integration)  
- Custom Logging Middleware  

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Likitha456/url-shortener-app.git
cd url-shortener-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

Then open 👉 `http://localhost:3000` in your browser.

---

## 🧪 Example Inputs

| Long URL                     | Validity (mins) | Custom Shortcode |
|-----------------------------|------------------|------------------|
| https://www.google.com       | (blank)          | google           |
| https://www.youtube.com      | 45               | yt45             |
| https://chat.openai.com      | 60               | openai-bot       |

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── URLShortenerForm.js
│   ├── URLStatsPage.js
│   └── RedirectHandler.js
├── middleware/
│   └── logger.js
├── App.js
├── index.js
```

---

## 🤖 Note

This project **does not use any real backend**.  
All redirection and stats are simulated locally using dummy data.

---

## 👩‍💻 Author

**Likitha Putta Reddy**  
B.Tech - Information Technology  
SV College of Engineering, Tirupati

---

## 🌐 Live Demo (Optional)

_You can deploy it on Netlify or GitHub Pages later and add the link here._

---

## 📄 License

This project is open source and free to use.
