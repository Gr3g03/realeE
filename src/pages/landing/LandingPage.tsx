import React from 'react';
import '../landing/LandingPage.css';
import Map from '../landing/map/Map';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import LeftSection from './leftSection/leftSection';
import Card from './cards/cards';

const LandingPage: React.FC = () => {
  return (
    <section className="body_container">
      <section className="left_section">
        <LeftSection />
      </section>

      <section className="info_section">
        <header className="header">
          <div className="tags_area">
            <h3 className="text_area">discover</h3>
            <div className="selected_tag">tags</div>
          </div>
          <div className="profile">
            <div className="notification">
              <NotificationsNoneIcon />
            </div>
            <div className="profile_logo">
              <Avatar />
            </div>
          </div>
        </header>

        <main className="main_section">
          <section className="serch_section">
            <input type="search" />
            <button>send</button>
          </section>
          <section className="card_section">
            <Card />
          </section>
        </main>
      </section>

      <section className="map_section">
        <Map />
      </section>
    </section>
  );
};

export default LandingPage;
