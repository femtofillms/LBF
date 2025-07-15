import os
import json
from pathlib import Path


def main():
    repo_root = Path(__file__).resolve().parent.parent
    images_dir = repo_root / "images"
    image_extensions = {".jpg", ".jpeg", ".png", ".gif", ".JPG", ".JPEG", ".PNG", ".GIF"}
    image_paths = []

    for root, dirs, files in os.walk(images_dir):
        for file in files:
            if Path(file).suffix.lower() in {ext.lower() for ext in image_extensions}:
                full_path = Path(root) / file
                rel_path = full_path.relative_to(repo_root)
                image_paths.append(rel_path.as_posix())

    output_file = images_dir / "image_list.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(sorted(image_paths), f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    main()
