import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, CheckCircle2, ChevronLeft, ChevronRight, Terminal, BookOpen, Maximize2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { problems } from '../data/problems';
import { runCode } from '../services/compiler';
import { useProgress } from '../hooks/useProgress';
import './CodeEditor.css';

const LANGUAGES = [
  { id: 'python',     label: 'Python 3',      monacoId: 'python',     group: 'Backend' },
  { id: 'javascript',label: 'JavaScript',     monacoId: 'javascript', group: 'Frontend' },
  { id: 'typescript',label: 'TypeScript',     monacoId: 'typescript', group: 'Frontend' },
  { id: 'nodejs',    label: 'Node.js',        monacoId: 'javascript', group: 'Backend' },
  { id: 'java',      label: 'Java',           monacoId: 'java',       group: 'Backend' },
  { id: 'cpp',       label: 'C++',            monacoId: 'cpp',        group: 'Systems' },
  { id: 'csharp',    label: 'C# / .NET',      monacoId: 'csharp',     group: 'Backend' },
  { id: 'sql',       label: 'SQL',            monacoId: 'sql',        group: 'Database' },
];

export default function CodeEditor() {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const { isSolved, markProblemSolved } = useProgress();

  const problem = problemId
    ? problems.find(p => p.id === Number(problemId))
    : null;

  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [running, setRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[language] || '');
    } else {
      setCode(getDefaultCode(language));
    }
    setOutput(null);
  }, [language, problemId]);

  const getDefaultCode = (lang) => ({
    python:     '# Python 3\nprint("Hello, World!")',
    javascript: '// JavaScript\nconsole.log("Hello, World!");',
    typescript: '// TypeScript\nconst greet = (name: string): string => `Hello, ${name}!`;\nconsole.log(greet("World"));',
    nodejs:     '// Node.js\nconst os = require("os");\nconsole.log("Hello from Node.js!");\nconsole.log("Platform:", os.platform());',
    java:       'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    cpp:        '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}',
    csharp:     'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
    sql:        '-- SQL Practice Sandbox\n-- Write your queries here\n\nSELECT \n    id,\n    name,\n    salary\nFROM employees\nWHERE salary > 50000\nORDER BY salary DESC\nLIMIT 10;',
  })[lang] || '';

  const handleRun = async () => {
    if (!code.trim()) {
      toast.error('Please write some code first!');
      return;
    }
    setRunning(true);
    setOutput(null);
    try {
      const result = await runCode(code, language, customInput);
      setOutput(result);
      if (result.success && problem && !isSolved(problem.id)) {
        markProblemSolved(problem.id);
        toast.success('🎉 Problem solved! Great work!');
      }
    } catch (e) {
      setOutput({ success: false, output: '', error: 'Execution failed. Please try again.' });
    }
    setRunning(false);
  };

  const handleReset = () => {
    const defaultCode = problem ? problem.starterCode[language] : getDefaultCode(language);
    setCode(defaultCode || '');
    setOutput(null);
    toast('Code reset to starter template', { icon: '🔄' });
  };

  const currentIdx = problem ? problems.findIndex(p => p.id === problem.id) : -1;

  return (
    <div className="editor-page page-wrapper">
      <Toaster position="top-right" toastOptions={{ style: { background: '#1a2030', color: '#e6edf3', border: '1px solid rgba(139,148,158,0.12)' } }} />

      <div className="editor-layout">
        {/* LEFT: Problem Panel */}
        <div className="problem-panel">
          {/* Problem Nav */}
          {problem && (
            <div className="problem-nav">
              <button className="icon-btn" onClick={() => currentIdx > 0 && navigate(`/editor/${problems[currentIdx - 1].id}`)} disabled={currentIdx <= 0}>
                <ChevronLeft size={16} />
              </button>
              <span className="problem-nav-title">#{problem.id} {problem.title}</span>
              <button className="icon-btn" onClick={() => currentIdx < problems.length - 1 && navigate(`/editor/${problems[currentIdx + 1].id}`)} disabled={currentIdx >= problems.length - 1}>
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* Tabs */}
          <div className="problem-tabs">
            {['description', 'examples', 'hints'].map(t => (
              <button key={t} className={`ptab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="problem-body">
            {!problem ? (
              <div className="free-editor-msg">
                <BookOpen size={32} />
                <h3>Free Coding Sandbox</h3>
                <p>Write and run any code in your chosen language. Choose a problem from the <a href="/practice">Practice</a> page for a guided challenge.</p>
              </div>
            ) : activeTab === 'description' ? (
              <>
                <div className="problem-title-row">
                  <h2>{problem.title}</h2>
                  <div className="problem-badges">
                    <span className={`badge badge-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
                    {isSolved(problem.id) && <span className="badge badge-easy"><CheckCircle2 size={11} /> Solved</span>}
                  </div>
                </div>
                <div className="problem-description">{problem.description}</div>
                <div className="problem-constraints">
                  <h4>Constraints</h4>
                  <ul>{problem.constraints.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </div>
              </>
            ) : activeTab === 'examples' ? (
              <div className="examples-list">
                <h3>Examples</h3>
                {problem.examples.map((ex, i) => (
                  <div key={i} className="example-block">
                    <div className="example-label">Example {i + 1}</div>
                    <div className="example-row"><strong>Input:</strong> <code>{ex.input}</code></div>
                    <div className="example-row"><strong>Output:</strong> <code>{ex.output}</code></div>
                    {ex.explanation && <div className="example-row"><strong>Explanation:</strong> {ex.explanation}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="hints-panel">
                <h3>Hints</h3>
                <p>Think about the time complexity. Can you solve it in O(n)?</p>
                <p>Consider using a hash map for O(1) lookups.</p>
                <p>Try a two-pointer approach if the array is sorted.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Editor Panel */}
        <div className="editor-panel">
          {/* Toolbar */}
          <div className="editor-toolbar">
            <select
              className="lang-select"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              {['Frontend','Backend','Systems','Database'].map(grp => (
                <optgroup key={grp} label={`── ${grp} ──`}>
                  {LANGUAGES.filter(l => l.group === grp).map(l => (
                    <option key={l.id} value={l.id}>{l.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <button className="icon-btn" onClick={handleReset} title="Reset code">
              <RotateCcw size={15} />
            </button>
            <button
              className={`btn btn-green run-btn ${running ? 'running' : ''}`}
              onClick={handleRun}
              disabled={running}
            >
              {running ? <span className="spinner" /> : <Play size={15} fill="currentColor" />}
              {running ? 'Running...' : 'Run Code'}
            </button>
          </div>

          {/* Monaco Editor */}
          <div className="monaco-wrapper">
            <Editor
              height="100%"
              language={LANGUAGES.find(l => l.id === language)?.monacoId || 'python'}
              value={code}
              onChange={val => setCode(val || '')}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: 'JetBrains Mono, Fira Code, monospace',
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                roundedSelection: true,
                automaticLayout: true,
                tabSize: 4,
                wordWrap: 'on',
                padding: { top: 16 },
              }}
            />
          </div>

          {/* Custom Input */}
          <div className="custom-input-section">
            <label className="custom-input-label">Custom Input (stdin)</label>
            <textarea
              className="custom-input"
              value={customInput}
              onChange={e => setCustomInput(e.target.value)}
              placeholder="Enter custom input..."
              rows={2}
            />
          </div>

          {/* Output Console */}
          <div className={`output-console ${output ? (output.success ? 'success' : 'error') : ''}`}>
            <div className="console-header">
              <Terminal size={14} />
              <span>Output Console</span>
              {output && (
                <span className={`console-status ${output.success ? 'ok' : 'err'}`}>
                  {output.success ? '● Accepted' : '● Error'}
                </span>
              )}
              {output?.time && <span className="console-meta">{output.time} · {output.memory}</span>}
            </div>
            <div className="console-body">
              {!output && !running && <span className="console-placeholder">Run your code to see output here...</span>}
              {running && <span className="console-running">⏳ Executing your code...</span>}
              {output && (
                <>
                  {output.output && <pre className="console-out">{output.output}</pre>}
                  {output.error && <pre className="console-err">{output.error}</pre>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
