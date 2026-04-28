import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import CodeEditor from './pages/CodeEditor';
import Interview from './pages/Interview';
import './index.css';

export default function App() {
  return (
    <BrowserRouter basename="/ai-video-studio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/editor/:problemId" element={<CodeEditor />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}
