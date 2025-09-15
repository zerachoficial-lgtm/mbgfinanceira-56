# Deploy Instructions for Hostinger

## 📋 Prerequisites
- Node.js 18+ installed locally for building
- Hostinger hosting account

## 🚀 Build Process

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Upload to Hostinger:**
   - Upload ALL contents of the `dist/` folder to your public_html directory
   - Upload the `.htaccess` file to the root of public_html
   - **DO NOT** upload src/, node_modules/, or any development files

## 📁 File Structure on Hostinger
```
public_html/
├── index.html          (from dist/)
├── assets/            (from dist/assets/)
├── .htaccess          (for React Router)
└── other built files  (from dist/)
```

## ⚙️ Hostinger Configuration
- **PHP Version:** Not needed (pure HTML/CSS/JS)
- **Node.js:** Not needed on server (only for building)
- **Database:** Not needed
- **SSL:** Enable for better security

## 🔧 Troubleshooting
- If routes don't work: Check if `.htaccess` is uploaded correctly
- If assets don't load: Check file paths in the built files
- If WhatsApp doesn't work: Verify phone number format in constants.ts

## 📞 Contact Information
Update company info in `src/lib/constants.ts` before building.