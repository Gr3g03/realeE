import React from 'react';
import useGetUser from '../../main/hooks/useGetUser';
import LeftSection from '../landing/leftSection/leftSection';
import './profile.css';

export default function Profile() {
  // const user = useGetUser();
  return (
    <section className="bodyContainer">
      <section className="left_section">
        <LeftSection />
      </section>
      <section className="profile_container">
        <div className="profile"></div>
        <div className="profile_data"></div>
      </section>
    </section>
  );
}

{
  /* <div className="profile__top">
        <img src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg" alt="" />
        <i className="material-icons profile__topAvatar">
          <img
            className="user_avatar"
            src="https://mpng.subpng.com/20180528/ccc/kisspng-computer-icons-user-avatar-woman-avatar-5b0c5b2f6ecaa1.2446433615275364314538.jpg"
            alt=""
          />{' '}
        </i>
        <h2>{user.firstName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="profile__bottom">
        <p>Booked</p>
        <div className="booked_container">
          <div className="main-body">
            <Link to={`/connections/${user.id}`} key={user.id} className="users_list_item">
              <div className="user_card">
                <div className="card">
                  <div className="card-body">
                    <img src={user.avatar} alt="User" className="logo_card" />
                    <p className="user_proffesion">{user.phone}$</p>
                    <p className="User_location">Start Date</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */
}
