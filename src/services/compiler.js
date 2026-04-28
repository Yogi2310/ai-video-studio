// ================================================
// CodeCraft Pro — Compiler Service
// Simulated execution + Judge0 API ready
// Add your JUDGE0_API_KEY from rapidapi.com to enable real execution
// ================================================

const JUDGE0_API_KEY = ''; // paste your RapidAPI key here

const LANGUAGE_IDS = {
  python:     71,
  javascript: 63,
  typescript: 74,
  nodejs:     63,  // Node.js via Judge0 JS runtime
  java:       62,
  cpp:        54,
  c:          50,
  csharp:     51,
  sql:        82,  // SQLite
};

// ---- Simulated Output Engine ----
function simulateOutput(code, language) {
  switch (language) {
    case 'python': {
      const lines = [];
      const printRegex = /print\(([^)]+)\)/g;
      let m;
      while ((m = printRegex.exec(code)) !== null) {
        lines.push(m[1].replace(/['"]/g, '').replace(/f['"]([^'"]+)['"]/, '$1'));
      }
      return lines.length ? lines.join('\n') : 'Program executed successfully.';
    }
    case 'javascript':
    case 'typescript':
    case 'nodejs': {
      const lines = [];
      const logRegex = /console\.log\(([^)]+)\)/g;
      let m;
      while ((m = logRegex.exec(code)) !== null) {
        const inner = m[1].replace(/[`'"]/g, '').replace(/\$\{[^}]+\}/g, '...');
        lines.push(inner);
      }
      if (language === 'nodejs' && code.includes('require(')) {
        lines.push('[Node.js modules loaded]');
      }
      return lines.length ? lines.join('\n') : 'Script executed successfully.';
    }
    case 'java': {
      const lines = [];
      const printRegex = /System\.out\.println\(([^)]+)\)/g;
      let m;
      while ((m = printRegex.exec(code)) !== null) {
        lines.push(m[1].replace(/['"]/g, ''));
      }
      return lines.length ? lines.join('\n') : 'Java program compiled and ran successfully.';
    }
    case 'cpp': {
      const lines = [];
      const coutRegex = /cout\s*<<\s*["']([^"']+)["']/g;
      let m;
      while ((m = coutRegex.exec(code)) !== null) lines.push(m[1]);
      return lines.length ? lines.join('\n') : 'C++ program compiled and ran successfully.';
    }
    case 'csharp': {
      const lines = [];
      const writeRegex = /Console\.Write(?:Line)?\(([^)]+)\)/g;
      let m;
      while ((m = writeRegex.exec(code)) !== null) {
        lines.push(m[1].replace(/['"]/g, ''));
      }
      return lines.length ? lines.join('\n') : '.NET program compiled and ran successfully.';
    }
    case 'sql': {
      const lower = code.toLowerCase();
      if (lower.includes('select')) {
        return `id | name       | salary\n---+------------+--------\n 1 | Alice Smith | 95000\n 2 | Bob Jones   | 87500\n 3 | Carol White | 82000\n\n(3 rows returned)`;
      }
      if (lower.includes('insert')) return 'INSERT 1\n(1 row affected)';
      if (lower.includes('update')) return 'UPDATE 2\n(2 rows affected)';
      if (lower.includes('delete')) return 'DELETE 1\n(1 row affected)';
      if (lower.includes('create')) return 'CREATE TABLE\nTable created successfully.';
      return 'Query executed successfully.';
    }
    default:
      return 'Program executed successfully.';
  }
}

// ---- Syntax Check ----
function checkSyntax(code, language) {
  if (code.trim().length < 3) return 'Error: Code is too short or empty.';
  const checks = {
    python: [
      { re: /def \w+\([^)]*\)\s*:\s*$/, msg: 'SyntaxError: unexpected EOF — function body is empty.' },
      { re: /if .+:\s*$/, msg: 'SyntaxError: unexpected EOF — if-block body is empty.' },
    ],
    csharp: [
      { re: /class \w+\s*\{[^}]*$/, msg: 'CS1513: } expected — class block not closed.' },
    ],
    cpp: [
      { re: /int main\(\)\s*\{[^}]*$/, msg: 'error: expected } at end of input.' },
    ],
  };
  const rules = checks[language] || [];
  for (const { re, msg } of rules) {
    if (re.test(code)) return msg;
  }
  return null;
}

// ---- Main Export ----
export async function runCode(code, language, stdin = '') {
  if (JUDGE0_API_KEY) return await runWithJudge0(code, language, stdin);
  return await simulateExecution(code, language);
}

async function simulateExecution(code, language) {
  // Realistic delay
  await new Promise(r => setTimeout(r, 900 + Math.random() * 700));

  const syntaxErr = checkSyntax(code, language);
  if (syntaxErr) return { success: false, output: '', error: syntaxErr };

  const output = simulateOutput(code, language);
  return {
    success: true,
    output,
    error: '',
    time: (0.04 + Math.random() * 0.35).toFixed(3) + 's',
    memory: Math.floor(800 + Math.random() * 6000) + ' KB',
  };
}

async function runWithJudge0(code, language, stdin) {
  const langId = LANGUAGE_IDS[language] || 63;
  const b64 = (s) => btoa(unescape(encodeURIComponent(s)));

  const res = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': JUDGE0_API_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({ source_code: b64(code), language_id: langId, stdin: b64(stdin) }),
  });

  const data = await res.json();
  const decode = (b64str) => b64str ? decodeURIComponent(escape(atob(b64str))) : '';

  return {
    success: data.status?.id === 3,
    output: decode(data.stdout) || '',
    error: decode(data.stderr) || decode(data.compile_output) || '',
    time: (data.time || '0') + 's',
    memory: (data.memory || 0) + ' KB',
  };
}
