import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import carsOperations from 'redux/operations';

import Layout from './layout/Layout';

const Home = lazy(() => import('pages/home/Home'));
const Catalog = lazy(() => import('pages/catalog/Catalog'));
const Favorite = lazy(() => import('pages/favorite/Favorite'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carsOperations.fetchAds({ p: 1, l: 12 }));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
