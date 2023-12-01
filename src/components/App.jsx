import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';

const Home = lazy(() => import('pages/home/Home'));
const Catalog = lazy(() => import('pages/catalog/Catalog'));
const Favorite = lazy(() => import('pages/favorite/Favorite'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
