import { Routes, Route, Navigate } from 'react-router-dom';

import { useInitLanguage } from './hooks/useInitLanguage';
import AppView from './layouts/AppView';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  useInitLanguage();

  return (
    <Routes>
      <Route path="/" element={<AppView />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
