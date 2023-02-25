import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import token from '@/lib/token';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '@/contexts/UserContextProvider';
import { useContext } from 'react';

const Nav = () => {
  const { isLogin, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    setIsLogin(!!token.getToken(ACCESS_TOKEN_KEY));
    navigate('/signin');
  };

  return (
    <nav className="py-2 border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          {Object.keys(routerMeta).map((componentKey: string) => {
            const menu: IRouterMeta = routerMeta[componentKey];

            if (menu.isShow)
              return (
                <li key={menu.path} className="nav-item">
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      `nav-link link-dark px-2 ${isActive ? 'active' : ''}`
                    }
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
          })}
        </ul>
        {isLogin ? (
          <button
            type="button"
            onClick={onLogout}
            className="btn btn-outline-dark me-2"
          >
            로그아웃
          </button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
