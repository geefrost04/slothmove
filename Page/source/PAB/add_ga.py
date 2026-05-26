#!/usr/bin/env python3
import os
import re

GA_ID = "G-W60TF5WHSB"

GA_CODE = '''    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){{dataLayer.push(arguments);}}
        gtag('js', new Date());
        gtag('config', '{id}');
    </script>'''.format(id=GA_ID)

def add_ga_to_file(filepath):
    """Add GA code to a single HTML file after favicon link."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has GA
    if f"gtag/js?id={GA_ID}" in content:
        print(f"⚠️  SKIP: {filepath} (already has GA)")
        return
    
    # Check if has favicon
    if 'rel="icon"' not in content and "rel='icon'" not in content:
        print(f"⚠️  SKIP: {filepath} (no favicon found)")
        return
    
    # Find favicon line and insert GA after it
    # Match <link rel="icon" ...> or similar
    favicon_pattern = r'(<link[^>]*rel=["\']icon["\'][^>]*>)'
    
    def insert_ga_after_favicon(match):
        return match.group(1) + '\n' + GA_CODE
    
    new_content = re.sub(favicon_pattern, insert_ga_after_favicon, content, count=1)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ DONE: {filepath}")

def main():
    pab_dir = "/Users/geefrost/Documents/SlothMove/Page/source/PAB"
    root_index = "/Users/geefrost/Documents/SlothMove/index.html"
    
    print("🔍 Processing HTML files in PAB folder...")
    print("")
    
    # Find all HTML files in PAB
    for root, dirs, files in os.walk(pab_dir):
        for filename in files:
            if filename.endswith('.html'):
                filepath = os.path.join(root, filename)
                add_ga_to_file(filepath)
    
    # Process root index.html
    print("")
    print("🔍 Processing root index.html...")
    if os.path.exists(root_index):
        add_ga_to_file(root_index)
    else:
        print(f"⚠️  SKIP: {root_index} (file not found)")
    
    print("")
    print("🎉 All done! GA code added to all applicable files.")

if __name__ == "__main__":
    main()
