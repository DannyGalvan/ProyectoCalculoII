import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from '../pages/Principal/Home';
import Test from '../pages/Principal/Test';
import Layout from '../containers/Layout';

export const Path = () => {
  return (
    <HashRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};
