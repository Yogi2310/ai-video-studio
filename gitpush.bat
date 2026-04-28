@echo off
git add vite.config.js public/404.html
git commit -m "Fix: base path /ai-video-studio/ for GitHub Pages"
git push origin main
echo PUSH_DONE
