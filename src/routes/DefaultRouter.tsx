import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';

function DefaultRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/upbit-trade' element={<Main />} />
    </Routes>
  );
}
export default DefaultRouter;
