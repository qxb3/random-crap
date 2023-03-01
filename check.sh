#!/bin/bash

folder_path="/data/data/com.termux/files/home/Music"
corrupt_files=()

for file in "$folder_path"/*.mp3
do
  echo "Checking file: $file"
  if ffmpeg -v error -i "$file" -f null - 2>&1 | grep -q "Invalid data found when processing input"; then
    corrupt_files+=("$file")
  fi
done

if [ ${#corrupt_files[@]} -ne 0 ]; then
  echo ""
  echo "Corrupt Mp3's:"

  for file in "${corrupt_files[@]}"
  do
    echo "• $file"
  done
else
  echo "No corrupt Mp3's found."
fi
