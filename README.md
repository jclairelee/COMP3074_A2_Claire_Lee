# 📱 A2_Claire_Lee — Currency Converter App
COMP3074 — Assignment 2 (Fall 2025)

This project is a React Native (Expo) mobile application that converts currency values using the FreeCurrencyAPI.  
It includes input validation, API error handling, navigation and a reusable component.

---

## 🚀 Features

### 🟦 Main Screen
- Enter **base currency code** (default: CAD)
- Enter **destination currency code**
- Enter **amount** (default: 1)
- **Validation**
   - Currency codes must be **3 uppercase letters**
   - Amount must be **positive**
- Calls **FreeCurrencyAPI** to retrieve the latest exchange rate
- Displays:
   - Converted amount
   - Exchange rate used
- **Error handling** (invalid key, missing rates, network errors, etc.)
- **Loading indicator** during API call
- Convert button is **disabled while loading**
- Uses a reusable UI component (`LabeledInput`)

### 🟩 About Screen
- Shows **full student name**
- Shows **student ID**
- Short description of the app

---

## 📦 Installation & Running

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npx expo start
```

### 3. Run the app
Choose one of the following:

- Press **a** → Android Emulator
- Scan QR code with **Expo Go** on your phone
- Press **w** → Web preview (limited)

---


Your Babel config must include:

```js
[
  "module:react-native-dotenv",
  { "moduleName": "@env", "path": ".env" }
]
```

Use in code:

```js
import { FREE_CURRENCY_API_KEY } from "@env";
```

---

## 📁 Project Structure

```
A2_Claire_Lee/
│ App.js
│ package.json
│ app.json
│ README.md
│
├──screens/
│   ├── MainScreen.js
│   └── AboutScreen.js
│
├──components/
│   └── LabeledInput.js
│
└──assets/
```

## 📝 AI Usage Declaration
The file `aud.pdf` is included as required.

---

## 🧾 License
This project was created for academic purposes for COMP3074.

