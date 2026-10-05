LumiNest Foundation - Offline Editable Project

Structure
- index.html       Main page
- assets/css/      Custom CSS extracted from the original HTML
- assets/js/       Page interactions and Stories of Hope carousel
- assets/images/   New locally generated story avatars
- assets/vendor/   Reserved for local vendor files if you later want to self-host Tailwind/Font Awesome/fonts

Requested changes made
1. Location: Beirut 1107, Lebanon
2. Fundraising copy now refers to Beirut.
3. Donation amounts converted from the original NGN figures to USD using approximately 1 USD = NGN 1,327.62 (Oct 5, 2026 reference).
   - NGN 50,000,000 -> about USD 37,661
   - NGN 20,000,000 -> about USD 15,064
4. Donation modal is USD-only.
5. Added 7 additional Stories of Hope, making 9 carousel stories total.
6. Added seven locally generated avatar SVGs for the new stories.
7. Existing design/layout and original image URLs are otherwise preserved.

Important image note
The original five website photos are still referenced from their exact original Unsplash URLs in index.html. This preserves the exact images used by the supplied website. If you want a completely self-contained offline copy of those five source photos, save/download those images into assets/images and update the five img src values to their local filenames.
