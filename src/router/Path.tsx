import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from '../pages/Principal/Home';
import Test from '../pages/Principal/Test';
import Layout from '../containers/Layout';
import BasicIntegrals from '../pages/Exercices/BasicIntegrals';
import IntegralsBySubstitution from '../pages/Exercices/IntegralBySubstitution';
import IntegralByParts from '../pages/Exercices/IntegralByParts';
import BasicPage from '../pages/Play/BasicPage';

export const Path = () => {
  return (
    <HashRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BasicIntegrals" element={<BasicIntegrals />} />
          <Route path="/BasicIntegrals/Play/:id" element={<BasicPage />} />
          <Route
            path="/IntegralsBySubsitution"
            element={<IntegralsBySubstitution />}
          />
          <Route path="/IntegralByParts" element={<IntegralByParts />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
