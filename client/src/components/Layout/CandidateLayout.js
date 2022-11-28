import { Navigate } from 'react-router-dom';
import { Header, Footer } from '../index';

function CandidateLayout({ children }) {
  if (sessionStorage.getItem('permission') == 'candidate') {
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

export default CandidateLayout;
