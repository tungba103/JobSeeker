import { Navigate } from 'react-router-dom';
import Home from '../../pages/Company/CompanyHome';
import { Header, Footer } from '../index';

function CompanyLayout({ children }) {
  if (sessionStorage.getItem('permission') == 'company') {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <Navigate to={'/signin'} />;
  }
}

export default CompanyLayout;
