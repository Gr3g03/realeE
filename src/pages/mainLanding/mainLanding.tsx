import { FC } from 'react';
import { Link } from 'react-router-dom';
import './mainLanding.css';
const MainLanding: FC = () => {
  return (
    <section className="header_landing">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo-wrapper">
            <Link to={'/home'}>
              <img id="logo-pic" src={`/assets/logoworkin.png`} alt="" />
            </Link>
          </div>
        </div>
        <div className="center-nav"></div>
        <div className="right-nav">
          <div className="sign-in-header-wrapper">sign in</div>
          <div></div>
          <div className="want-to-hire-header-wrapper">
            <span id="want-to-hire">| want to hire</span>
          </div>
          <div className="want-to-work-header-wrapper">
            <span id="want-to-work">| want to work</span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default MainLanding;
