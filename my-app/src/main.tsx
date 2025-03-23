
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LessonPage from '../src/pages/LessonPage';
import Homepage from './Homepage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/:unitId/:lessonId" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);