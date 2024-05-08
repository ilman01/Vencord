import os

os.system("git pull origin main")
os.system("npm i -g pnpm@8.10.2")
os.system("pnpm i")
os.system("pnpm build")
os.system("pnpm inject")