import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { HomePage } from './pages/Home/HomePage';
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetail />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
  },
], {
  basename: import.meta.env.PROD ? '/portfolio' : '/',
});

export function Router() {
  return <RouterProvider router={router} />;
}
