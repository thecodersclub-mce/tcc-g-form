#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if deploying to a custom domain
# echo 'www.example.com' > CNAME

# create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# initialize git repository if not already initialized
git init
git checkout -b main
git add -A
git commit -m 'Deploy to GitHub Pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -