import routerMeta from '@/lib/routerMeta';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '@/components/HOC/ProtectedRoute';
import Loading from './components/Loading';

const lazyImport = (pageName: string) =>
  lazy(() => import(`./pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    props: routerMeta[componentKey],
  };
});

const Router = () => (
  <Routes>
    {assignedRouter.map(({ Component, props }: any) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <ProtectedRoute path={props.path}>
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          </ProtectedRoute>
        }
      />
    ))}
    <Route path="/*" element={<Navigate to="/todo" replace={true} />} />
  </Routes>
);

export default Router;
