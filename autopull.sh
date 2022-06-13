#!/bin/bash

# add this line below to your .bashrc or .zshrc
# alias cd='f() { cd $1 && ~/autopull.sh };f'

if [ -d "$(pwd)/.git" ]; then
  echo "Pulling changes..."
  git pull origin main
fi
