import routerMeta from '@/lib/routerMeta';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return <Navigate to={routerMeta.TodoPage.path} replace={true} />;
};

export default HomePage;
