import React from 'react';
import '../landing/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <section className="body_container">
      <section className="left_section">
        <div className="logo_container">logo</div>
        <nav className="redirect_urls">
          <ul className="ul_section">
            <li>home</li>
            <li>discover</li>
            <li>favourite</li>
            <li>chat</li>
            <li>settings</li>
          </ul>
        </nav>
      </section>

      <section className="info_section">
        <header className="header">
          <div className="tags_area">
            <h3 className="text_area">discover</h3>
            <div className="selected_tag">tags</div>
          </div>
          <div className="profile">
            <div className="notification">notification</div>
            <div className="profile_logo">profile</div>
          </div>
        </header>

        <main className="main_section">
          <section className="serch_section">search</section>
          <section className="card_section">cards</section>
        </main>
      </section>

      <section className="map_section"></section>
    </section>
  );
};

export default LandingPage;
