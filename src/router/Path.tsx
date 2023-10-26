import { lazy, Suspense } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Principal/Home'));
const Test = lazy(() => import('../pages/Principal/Test'));
const Layout = lazy(() => import('../containers/Layout'));
const BasicIntegrals = lazy(() => import('../pages/Exercices/BasicIntegrals'));
const IntegralsBySubstitution = lazy(() => import('../pages/Exercices/IntegralBySubstitution'));
const IntegralByParts = lazy(() => import('../pages/Exercices/IntegralByParts'));
const BasicPage = lazy(() => import('../pages/Play/BasicPage'));
const SubstitutionPage = lazy(() => import('../pages/Play/SubstitutionPage'));
const PartsPage = lazy(() => import('../pages/Play/PartsPage'));
const BasicTutorialPage = lazy(() => import('../pages/Tutorials/BasicTutorialPage'));
const BySubstitutionTutorialPage = lazy(() => import('../pages/Tutorials/BySubstitutionTutorialPage'));
const ByPartsTutorialPage = lazy(() => import('../pages/Tutorials/ByPartsTutorialPage'));
const LoadingPage = lazy(() => import('../pages/LoadingPage'));

export const Path = () => {
  return (
    <HashRouter basename="/">
      <Suspense fallback={<LoadingPage />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BasicIntegrals" element={<BasicIntegrals />} />
            <Route
              path="/BasicIntegrals/Tutorial"
              element={<BasicTutorialPage />}
            />
            <Route path="/BasicIntegrals/Play/:id" element={<BasicPage />} />
            <Route
              path="/IntegralsBySubsitution"
              element={<IntegralsBySubstitution />}
            />
            <Route
              path="/IntegralsBySubsitution/Tutorial"
              element={<BySubstitutionTutorialPage />}
            />
            <Route
              path="/IntegralsBySubsitution/Play/:id"
              element={<SubstitutionPage />}
            />
            <Route path="/IntegralByParts" element={<IntegralByParts />} />
            <Route path="/IntegralByParts/Tutorial" element={<ByPartsTutorialPage />} />
            <Route path="/IntegralByParts/Play/:id" element={<PartsPage />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </Layout>
      </Suspense>
    </HashRouter>
  );
};
