@echo off
echo === Staging all new files ===
git add .
git status --short
echo === Committing ===
git commit -m "Add GitHub Pages hosting config + FAANG content update" 2>nul || echo "Nothing new to commit, continuing..."
echo === Setting remote ===
git remote remove origin 2>nul
git remote add origin https://github.com/Yogi2310/ai-video-studio.git
git branch -M main
echo === Pushing to GitHub (force) ===
git push -u origin main --force
echo PUSH_DONE
