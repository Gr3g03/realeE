import React from 'react';
import { FC } from 'react';
import './leftSection.css';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import RentLogo from '../../../images/RentE.png';

const LeftSection: FC = () => {
  return (
    <>
      <div className="logo_container">
        <img className="image_logo" src={RentLogo} alt="logo" />
      </div>
      <nav className="redirect_urls">
        <ul className="ul_section">
          <li>
            <CottageOutlinedIcon color="primary" /> home{' '}
          </li>
          <li>
            {' '}
            <TravelExploreIcon color="primary" />
            discover
          </li>
          <li>
            <FavoriteBorderIcon color="primary" /> favourite
          </li>
          <li>
            {' '}
            <ChatBubbleOutlineIcon color="primary" />
            chat
          </li>
          <li>
            {' '}
            <SettingsIcon color="primary" />
            settings
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LeftSection;
