// src/App.tsx
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ArticlesList from "./ArticlesList";
import ArticleDetail from "./ArticleDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
