@echo off
git add vite.config.js public/404.html
git commit -m "Fix: base path /CodeCraft/ for GitHub Pages"
git push origin main
echo PUSH_DONE
