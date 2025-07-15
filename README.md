# La Bande à FEMTO

This project contains a simple photo mosaic gallery and related experiments. It uses plain HTML, CSS and JavaScript with minimal dependencies delivered via CDNs.

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) for layout and components.
- [Bootstrap Icons](https://icons.getbootstrap.com/) for iconography.
- Google Fonts **Source Sans 3** and **Red Rose**.

All dependencies are loaded from their respective CDN links in `index.html` and `test.html`.

## Usage

Clone the repository or download the files, then open either `index.html` or `test.html` directly in your web browser. No build step is required.

Both files display a responsive image grid using Bootstrap and custom CSS.

### Updating the image list

Any time you add or remove files in the `images/` folder, run:

```bash
python3 scripts/generate_image_list.py
```

This script scans the `images/` directory and updates `images/image_list.json` which is used by `test.html` to load the gallery dynamically.
