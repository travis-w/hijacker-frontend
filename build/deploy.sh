#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

checkout_hijacker() {
  git clone https://github.com/travis-w/hijacker ./tmp
  rm -rf tmp/src/frontend
  mv ./dist ./tmp/src/frontend
}

commit_hijacker() {
  cd tmp
  git remote add tmp-remote https://${GH_TOKEN}@github.com/travis-w/hijacker.git
  git add src/frontend/*
  git status
  git commit -am "Merge hijacker-frontend. Travis build: $TRAVIS_BUILD_NUMBER"
  git push --quiet --set-upstream tmp-remote master
}

cleanup() {
  cd ..
  rm -rf tmp
}

setup_git
checkout_hijacker
commit_hijacker
cleanup
