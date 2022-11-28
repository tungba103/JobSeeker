import { Navigate } from 'react-router-dom';
import Home from '../../pages/Company/CompanyHome';
import { Header, Footer } from '../index';

function AdminLayout({ children }) {
  if (sessionStorage.getItem('permission') == 'admin') {
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

export default AdminLayout;
