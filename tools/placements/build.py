#!/usr/bin/env python3
"""Build placements.html from index.html's shell (head, top bar, footer, dock, chat, menu sheet, scripts)
plus the placements body, CSS and JS in this folder. Run from anywhere:  python3 tools/placements/build.py

Why a build: the top bar, footer, dock and chat are shared with the homepage. Regenerating keeps them identical
whenever the homepage changes. The homepage's desktop layer (min-width:1024px) applies here too; the placements desktop rules live in pl.css.
"""
import os, re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
body = open(os.path.join(HERE, 'body.html'), encoding='utf-8').read()
css = open(os.path.join(HERE, 'pl.css'), encoding='utf-8').read()
js = open(os.path.join(HERE, 'pl.js'), encoding='utf-8').read()

def cut(s, start, end, include_end=True, frm=0):
    i = s.index(start, frm)
    j = s.index(end, i) + (len(end) if include_end else 0)
    return s[i:j]

# ---- head
head = src[:src.index('<body>')]
head = re.sub(r'<title>.*?</title>', '<title>Placements · Newton School of Technology</title>', head, count=1, flags=re.S)
head = re.sub(r'(<meta name="description" content=")[^"]*(")', r'\1Internships and placements at Newton School of Technology: 98.3% of our first batch held a paid internship in their second year; CTC of ₹20–50 lakhs offered to freshers.\2', head, count=1)
assert head.count('</style>\n</head>') == 1
head = head.replace('</style>\n</head>', css + '\n</style>\n</head>')

# ---- body pieces from the homepage
nav_variants = cut(src, '<script>/* nav variants */', '</script>')
header = cut(src, '<header class="nav"', '</header>')
footer = cut(src, '<footer class="ft"', '</footer>')
wins = cut(src, '<section class="wins"', '</section>')
grid = cut(src, '<div class="grid" data-node="76:10567">', '\n    </div>\n\n    <div class="companies"', include_end=False) + '\n    </div>'
ctc = cut(src, '<div class="ctc">', '\n    </div>\n  </section>', include_end=False) + '\n    </div>'
tail = src[src.index('<div class="vid" id="vid"'):]

body = body.replace('<!--@commute-->', open(os.path.join(HERE, 'commute.svg'), encoding='utf-8').read())   # node tools/placements/commute.mjs regenerates it
# photos that have not arrived yet: leave the <img> out (the card shows initials) rather than request a missing file
for src in re.findall(r'<img src="(assets/pl/google-[a-z]+\.jpg)"[^>]*>', body):
    if not os.path.exists(os.path.join(ROOT, src)):
        body = re.sub(r'<img src="' + re.escape(src) + r'"[^>]*>', '', body)
body = body.replace('<!--@wins-->', wins).replace('<!--@grid-->', grid)

# links that point at homepage sections must leave this page
def homeify(block):
    block = re.sub(r'href="#(?!")(?!top")([\w-]+)"', r'href="index.html#\1"', block)
    block = block.replace('href="#top"', 'href="index.html"')
    return block
header = homeify(header).replace('href="index.html#co"', 'href="placements.html"')
footer = homeify(footer)
tail_html, tail_js = tail[:tail.index('<script')], tail[tail.index('<script'):]
tail_html = homeify(tail_html)

# ---- the homepage's main script runs every homepage section in one function; keep only the blocks this page uses,
#      plus the helper functions those blocks call (defined inside homepage-only blocks)
KEEP = ('sticky bottom bar', 'anchors:', 'menu sheet', 'desktop nav', 'internship cards', 'video overlay', '==================== Newton, the AI chat')
HELPERS = ('onSeen', 'drift', 'hairlines', 'easeOutCubic')
ms = tail_js.index('<script>\n(function(){\n  var reduce'); me = tail_js.index('</script>', ms)
main = tail_js[ms + len('<script>\n'):me]
lines = main.split('\n')
starts = [i for i, l in enumerate(lines) if l.startswith('  /* ---- ') or l.startswith('  /* ====')]
pre = '\n'.join(lines[:starts[0]])
def func_src(block, name):
    m = re.search(r'\n  function ' + name + r'\(', '\n' + block)
    if not m: return ''
    i = m.start(); depth = 0; j = block.index('{', i)
    for k in range(j, len(block)):
        if block[k] == '{': depth += 1
        elif block[k] == '}':
            depth -= 1
            if depth == 0: return block[i:k + 1] + '\n'
    return ''
kept = [pre]
for n, st in enumerate(starts):
    en = starts[n + 1] if n + 1 < len(starts) else len(lines)
    block = '\n'.join(lines[st:en])
    if any(k in lines[st] for k in KEEP) or n + 1 == len(starts) or lines[st].startswith('  /* ==================== Newton'):
        kept.append(block)
    else:
        for h in HELPERS:
            f = func_src(block, h)
            if f: kept.append('  /* helper kept from: ' + lines[st].strip().replace('/*', '').replace('*/', '').strip(' -')[:60] + ' */\n' + f)
# everything after the chat heading belongs to the chat and the page's closing code
chat_i = next(i for i, l in enumerate(lines) if l.startswith('  /* ==================== Newton'))
kept = [b for b in kept if not b.startswith('  /* ==================== Newton')]
kept.append("  /* ---- placements: the homepage hairlines, rising into the sectors and hanging over the recruiters ---- */\n"
            "  hairlines(document.getElementById('plLinesUp'), document.querySelector('.pl-wins'), '#E1E5EA', false);\n"
            "  hairlines(document.getElementById('plLinesDown'), document.getElementById('recruiters'), '#E1E5EA', true);\n")
kept.append('\n'.join(lines[chat_i:]))
kept = list(dict.fromkeys(kept))
tail_js = tail_js[:ms] + '<script>\n' + '\n'.join(kept) + tail_js[me:]

page = (head + '<body>\n' + nav_variants + '\n<div class="page" id="page">\n\n  ' + header + '\n\n' + body + '\n\n  ' + footer + '\n</div>\n\n' + tail_html + tail_js)
import json
cm = json.load(open(os.path.join(HERE, 'commute.json')))
js = js.replace('__CM_WINDOWS__', str(cm['windows'])).replace('__CM_UNIT__', json.dumps(cm['unit'])).replace('__CM_FROM__', str(cm['from'])).replace('__CM_TO__', str(cm['to']))
i = page.rindex('</body>')
page = page[:i] + '<script>\n' + js + '\n</script>\n' + page[i:]
open(os.path.join(ROOT, 'placements.html'), 'w', encoding='utf-8').write(page)
print('placements.html', len(page))
