#!/bin/bash
# IndexNow URL Submission Script for Al-Hakeem's Tonsorial
# Usage: ./indexnow-submit.sh [url]
# Example: ./indexnow-submit.sh https://alhakeems.com/blog/new-article

INDEXNOW_KEY="2a169fd49fc68f79a574d8ed3d48311d"
HOST="alhakeems.com"
KEY_LOCATION="https://alhakeems.com/${INDEXNOW_KEY}.txt"

# If a specific URL is provided, submit just that URL
if [ -n "$1" ]; then
    echo "Submitting single URL to IndexNow: $1"
    curl -X POST "https://api.indexnow.org/indexnow" \
        -H "Content-Type: application/json" \
        -d "{
            \"host\": \"${HOST}\",
            \"key\": \"${INDEXNOW_KEY}\",
            \"keyLocation\": \"${KEY_LOCATION}\",
            \"urlList\": [\"$1\"]
        }"
    echo ""
    exit 0
fi

# Default: Submit all main site URLs
echo "Submitting all site URLs to IndexNow..."

curl -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json" \
    -d "{
        \"host\": \"${HOST}\",
        \"key\": \"${INDEXNOW_KEY}\",
        \"keyLocation\": \"${KEY_LOCATION}\",
        \"urlList\": [
            \"https://alhakeems.com/\",
            \"https://alhakeems.com/about\",
            \"https://alhakeems.com/blog\",
            \"https://alhakeems.com/cranial-prosthesis\",
            \"https://alhakeems.com/blog/modern-barbershop-experience\"
        ]
    }"

echo ""
echo "Done! URLs submitted to IndexNow (Bing, Yandex, and other participating search engines)"
