import React from 'react';
import '../landing/LandingPage.css';
import Map from '../landing/map/Map';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LeftSection from './leftSection/leftSection';
import Card from './cards/cards';
import ResizePanel from 'react-resize-panel-ts';
import { Button, Input } from '@mui/material';
import AccountMenu from '../../main/components/dropDownMenu';
const LandingPage: React.FC = () => {
  return (
    <>
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
            <div className="profile_section">
              <div className="notification">
                <NotificationsNoneIcon />
              </div>
              <div className="profile_section_logo">
                <AccountMenu />
              </div>
            </div>
          </header>
          <main className="main_section">
            <section className="serch_section">
              <Input placeholder="Search" type="search" className="search_comp" />
              <Button color="primary" className="button_comp">
                send
              </Button>
            </section>
            <section className="card_section">
              <Card />
            </section>
          </main>
        </section>

        <ResizePanel direction="w" handleClass="customHandle" borderClass="customResizeBorder">
          <section className="sidebar panel">
            <Map />
          </section>
        </ResizePanel>
      </section>
    </>
  );
};

export default LandingPage;
