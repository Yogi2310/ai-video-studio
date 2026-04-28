import { useState, useEffect } from 'react';

const STORAGE_KEY = 'codecraft_progress';

const defaultProgress = {
  solvedProblems: [],
  completedLessons: [],
  streak: 0,
  lastActiveDate: null,
  totalSubmissions: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markProblemSolved = (problemId) => {
    setProgress(prev => ({
      ...prev,
      solvedProblems: prev.solvedProblems.includes(problemId)
        ? prev.solvedProblems
        : [...prev.solvedProblems, problemId],
      totalSubmissions: prev.totalSubmissions + 1,
    }));
  };

  const markLessonComplete = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
    }));
  };

  const isSolved = (problemId) => progress.solvedProblems.includes(problemId);
  const isLessonDone = (lessonId) => progress.completedLessons.includes(lessonId);

  return {
    progress,
    markProblemSolved,
    markLessonComplete,
    isSolved,
    isLessonDone,
  };
}
