
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import CompanyManual from './pages/docs/CompanyManual/index';
import Header from './components/layout/Header';


const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen font-sans text-steel-900 dark:text-steel-50 transition-colors duration-300">
        {children}
    </div>
  );
};


import LoginPage from './pages/LoginPage';
import { useAuth } from './contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return null; // Or a loading spinner
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading) return null;
    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<PublicRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Route>
          
          <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/docs/company-manual" element={<CompanyManual />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};


export default App;
