import os

os.system("git pull origin main")
os.system("npm i -g pnpm@9.1.0")
os.system("pnpm i")
os.system("pnpm build")
os.system("pnpm inject")