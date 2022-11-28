import { Navigate } from 'react-router-dom';
import Home from '../../pages/Company/CompanyHome';
import { Header, Footer } from '../index';

function ViewerLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ViewerLayout;
