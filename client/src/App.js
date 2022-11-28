import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLayout, CandidateLayout, CompanyLayout, ViewerLayout } from './components';
import { SignIn, SignUp } from './pages';
import { publicRoutes, adminRoutes, companyRoutes, candidateRoutes } from './routes';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/signin'} />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ViewerLayout>
                <Page />
              </ViewerLayout>
            }
          />
        );
      })}
      {adminRoutes.map((route, index) => {
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <AdminLayout>
                <Page />
              </AdminLayout>
            }
          />
        );
      })}
      {candidateRoutes.map((route, index) => {
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <CandidateLayout>
                <Page />
              </CandidateLayout>
            }
          />
        );
      })}
      {companyRoutes.map((route, index) => {
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <CompanyLayout>
                <Page />
              </CompanyLayout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
