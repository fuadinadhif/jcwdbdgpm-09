# Git, GitHub Steps

## Memeriksa Setup Git

1. `git -v`: Memeriksa versi git yang terpasang
2. `git config --list`: Memeriksa pengaturan git
3. `git config --global user.name fuadinadhif`
4. `git config --global user.email nadhiffuadi@gmail.com`

## Membuat Git Repository (Folder)

1. `git init`: Mengubah folder biasa menjadi Git repository

## Menambahkan File ke dalam Git Repository Local

1. `git status`
2. `git add .`
3. `git commit -m "[PESAN COMMIT]"`
4. `git log`

## Memasukkan Git Repository Local ke Git Repository Remote (GitHub)

1. Buat folder/repository GitHub terlebih dahulu
2. `git remote add origin [URL]`
3. `git branch -M main`
4. `git push -u origin main`

## Menambahkan File ke dalam Git Repository Local & Remote

1. `git add .`
2. `git commit -m "[PESAN COMMIT]`
3. `git push`
