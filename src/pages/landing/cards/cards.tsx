import { FC } from 'react';
import './cards.css';
import imgageTest from '../../../images/img.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import Tooltip from '@mui/material/Tooltip';

const Card: FC = () => {
  return (
    <div>
      <div className="main_card_wrapper">
        <img src={imgageTest} alt="img" />
        <div className="card_info">
          <span className="card_body_info">
            <div className="card_body_topsection">
              <h5>address</h5>
              <FavoriteBorderIcon color="primary" />
            </div>
          </span>
          <div className="card__section">
            <h1 className="test">appartamentType</h1>
            <h3 className="price_tag">100$ /month</h3>
          </div>
          <div className="footer_card_info">
            <Tooltip title="Bedrooms">
              <span>
                <KingBedOutlinedIcon color="primary" />3
              </span>
            </Tooltip>
            <Tooltip title="bathrooms">
              <span>
                <BathtubOutlinedIcon color="primary" />2
              </span>
            </Tooltip>
            <Tooltip title="Square meters">
              <span>
                <SquareOutlinedIcon color="primary" />
                100
              </span>
            </Tooltip>
            <Tooltip title="rooms">
              <span>
                <ViewQuiltOutlinedIcon color="primary" />4
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
