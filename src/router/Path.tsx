import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from '../pages/Principal/Home';
import Test from '../pages/Principal/Test';
import Layout from '../containers/Layout';
import BasicIntegrals from '../pages/Exercices/BasicIntegrals';
import IntegralsBySubstitution from '../pages/Exercices/IntegralBySubstitution';
import IntegralByParts from '../pages/Exercices/IntegralByParts';
import BasicPage from '../pages/Play/BasicPage';
import SubstitutionPage from '../pages/Play/SubstitutionPage';
import PartsPage from '../pages/Play/PartsPage';
import BasicTutorialPage from '../pages/Tutorials/BasicTutorialPage';
import BySubstitutionTutorialPage from '../pages/Tutorials/BySubstitutionTutorialPage';
import ByPartsTutorialPage from '../pages/Tutorials/ByPartsTutorialPage';

export const Path = () => {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
};
