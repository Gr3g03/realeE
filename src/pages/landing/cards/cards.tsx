import { FC } from 'react';
import './cards.css';
import imgageTest from '../../../images/img.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
const Card: FC = () => {
  return (
    <div>
      <div className="main_card_wrapper">
        <img src={imgageTest} alt="img" />
        <div className="card_info">
          <span className="card_body_info">
            <div className="card_body_topsection">
              <h1>address</h1>
              <FavoriteBorderIcon color="primary" />
            </div>
          </span>
          <div className="card__section">
            <h1 className="test">appartamentType</h1>
            <h3 className="price_tag">100$ /month</h3>
          </div>
          <div className="footer_card_info">
            <span>
              <KingBedOutlinedIcon />3
            </span>
            <span>
              <BathtubOutlinedIcon />2
            </span>
            <span>
              <SquareOutlinedIcon />
              100
            </span>
            <span>
              <ViewQuiltOutlinedIcon />4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
