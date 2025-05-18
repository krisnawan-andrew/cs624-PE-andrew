# PE04 - Profile Cards

**REFERENCE:**

**Dabit, N. (2019). React
Native in Action. Manning Publications. (ISBN 9781617294051)**

# Input

The tools used for this app are React, Expo, and VS Code/GitHub Codespace for optional Cloud IDE.

The input is a list of ProfileCard object that contains an image, name, occupation, description, and showThumbnail for each object. User can tap on these ProfileCard to expand them and see the content.

# Process

The 6 ProfileCards are displayed as thumbnails. The layout uses flexDirection: row and flexWrap: wrap in the parent container, creating a responsive grid for different screen sizes. When a ProfileCard is clicked, it will be enlarged to its original size by toggling showThumbnail between true/false using immutability-helper. This triggers a setState update in the parent component, causing React to re-render the affected card.

# Output

The output of this program is a 2x3 grid of scaled down ProfileCards for a total of 6 ProfileCards. Tapping the ProfileCard will expand it to show its content and tapping it again will shrink it back to the thumbnail size. Each card can be clicked independently.
