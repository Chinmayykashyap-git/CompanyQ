const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
const cssMatches = [...html.matchAll(/href=["']([^"']+\.css)["']/g)].map(m => m[1]);

console.log("Checking HTML asset references:");
for (const c of cssMatches) {
  if (fs.existsSync(c)) {
    console.log("✓ CSS exists:", c);
  } else {
    throw new Error("Missing CSS: " + c);
  }
}

for (const s of scriptMatches) {
  if (fs.existsSync(s)) {
    console.log("✓ Script exists:", s);
  } else {
    throw new Error("Missing script: " + s);
  }
}

console.log("\nALL HTML ASSETS VERIFIED SUCCESSFULLY!");

