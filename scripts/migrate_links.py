from pathlib import Path
import re
root = Path(r'c:\Users\USER\Desktop\PROJECTS\main port')
files = [p for p in root.rglob('*.tsx') if 'node_modules' not in p.parts]
for p in files:
    text = p.read_text(encoding='utf-8')
    orig = text
    text = text.replace('import { Link } from "react-router-dom";', 'import Link from "next/link";')
    text = text.replace('import { Link, useParams } from "react-router-dom";', 'import Link from "next/link";')
    text = text.replace('import { Link, useLocation } from "react-router-dom";', 'import Link from "next/link";')
    text = re.sub(r'<Link(\s+[^>]*?)\bto=', r'<Link\1href=', text)
    text = re.sub(r'<Link(\s+[^>]*?)\bto\{', r'<Link\1href{', text)
    if text != orig:
        p.write_text(text, encoding='utf-8')
        print('updated', p)
