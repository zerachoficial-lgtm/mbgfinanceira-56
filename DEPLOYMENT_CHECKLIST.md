# 🚀 Deployment Checklist for Hostinger

## ✅ Pre-deployment Steps
- [ ] Update company information in `src/lib/constants.ts`
- [ ] Test the application locally with `npm run dev`
- [ ] Build the application with `npm run build`
- [ ] Check that the `dist/` folder was created successfully

## 📁 Files to Upload to Hostinger
1. **Upload ALL contents of the `dist/` folder** to `public_html/`
2. **Upload the `.htaccess` file** to the root of `public_html/`

### ⚠️ Important: DO NOT upload these files/folders:
- ❌ `src/` folder
- ❌ `node_modules/` folder  
- ❌ `package.json`
- ❌ `vite.config.ts`
- ❌ Any TypeScript files (.ts, .tsx)

## 🔧 Hostinger Settings
- **PHP Version:** Not needed (pure HTML/CSS/JS)
- **SSL Certificate:** Enable for better security
- **Custom Error Pages:** Not needed (handled by React Router)

## 🧪 Post-deployment Testing
- [ ] Check if the homepage loads correctly
- [ ] Test navigation between pages (About, Services, Contact, etc.)
- [ ] Verify WhatsApp button works with correct number
- [ ] Test contact forms and animations
- [ ] Check if all images load properly
- [ ] Test on mobile devices

## 🔍 Troubleshooting Common Issues
- **Routes show 404 error:** Check if `.htaccess` is uploaded correctly
- **Images don't load:** Verify all image files were uploaded from `dist/assets/`
- **WhatsApp doesn't work:** Check phone number format in `src/lib/constants.ts`
- **Broken styles:** Ensure all CSS files from `dist/assets/` were uploaded

## 📞 Contact Information
Update these values in `src/lib/constants.ts` before building:
- Company name
- Phone number (WhatsApp format: 5511999999999)
- Address
- Instagram handle