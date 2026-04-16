/**
 * CONFIG - Konfigurasi Frontend
 * PENTING: Ganti APPS_SCRIPT_URL dengan URL deployment Apps Script Anda
 */
const CONFIG = {
  // URL Web App dari Google Apps Script (ganti setelah deploy)
  APPS_SCRIPT_URL: 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL_HERE',
  
  // Google OAuth Client ID (dari Google Cloud Console)
  // Ini BUKAN rahasia - Client ID memang harus di frontend untuk Google Sign-In
  GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
  
  // App info
  APP_NAME: 'Sistem Pembiayaan Beasiswa',
  APP_ORG: 'Lembaga Zakat Baitul Maal - BRI Kantor Pusat',
  APP_VERSION: '2.0.0',
  
  // Session config
  TOKEN_KEY: 'beasiswa_token',
  USER_KEY: 'beasiswa_user',
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours in ms
};
