import sqlite3

DB = "brcrawl.sqlite3"
OUTPUT = "sites.js"

conn = sqlite3.connect(DB)
rows = conn.execute(
    "SELECT domain FROM feeds WHERE status_id=1 ORDER BY domain"
).fetchall()
conn.close()

urls = [f"    'https://{row[0]}/'" for row in rows]

js = "var zanzar = {\n  paginas: [\n"
js += ",\n".join(urls)
js += "\n  ],\n  ignorar: []\n};\n"

with open(OUTPUT, "w") as f:
    f.write(js)

print(f"{len(rows)} sites escritos em {OUTPUT}")
