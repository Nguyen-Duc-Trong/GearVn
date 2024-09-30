import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesProps from '@/interface/route';
import { Fragment } from 'react/jsx-runtime';
import publicRoute from './publicRoute';

const createRoutes = (routes: RoutesProps[]) => {
  return (
    <Router>
      <Routes>
        {routes.map((r, index) => {
          const Layout: React.ComponentType<React.PropsWithChildren<{}>> =
            r.layout || Fragment;
          const Page: React.ComponentType = r.page;

          return (
            <Route
              key={index}
              path={r.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

const router = createRoutes(publicRoute);
export default router;
