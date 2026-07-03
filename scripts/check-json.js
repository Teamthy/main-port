const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat && stat.isDirectory()) {
            if (file === 'node_modules' || file === '.next' || file === '.git') return;
            results = results.concat(walk(full));
        } else {
            if (file.endsWith('.json')) results.push(full);
        }
    });
    return results;
}

const files = walk(process.cwd());
let bad = 0;
files.forEach(f => {
    try {
        const s = fs.readFileSync(f, 'utf8');
        JSON.parse(s);
    } catch (err) {
        bad++;
        console.error('BAD:', f, err.message);
    }
});
if (bad === 0) console.log('All JSON valid');
process.exit(bad === 0 ? 0 : 1);
