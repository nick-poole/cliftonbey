#!/bin/bash

# List of void elements
void_elements="br|img|meta|link|input|hr"

# Process only staged HTML files
for file in $(git diff --cached --name-only --diff-filter=ACM | grep '\.html$'); do
  sed -i -E "s/<($void_elements)\/>/<\1>/g" "$file"
done

echo "Trailing slashes removed from void elements in staged HTML files."
