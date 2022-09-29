import React from 'react';
import useGetUser from '../../main/hooks/useGetUser';
import LeftSection from '../landing/leftSection/leftSection';
import './profile.css';

export default function Profile() {
  const user = useGetUser();
  return (
    <section className="bodyContainer">
      <section className="left_section">
        <LeftSection />
      </section>
      <section className="profile_container">
        <div className="profile"></div>

        <div className="profile_data">
          {/* <img className="user_avatar" src={user.avatar} alt="" /> */}
          <img
            className="user_avatar"
            src="https://mpng.subpng.com/20180528/ccc/kisspng-computer-icons-user-avatar-woman-avatar-5b0c5b2f6ecaa1.2446433615275364314538.jpg"
            alt=""
          />
          <div className="profile_section_container">
            <div className="profile_leftSection_info">
              <p className="user_proffesion">{user.userName}$</p>
              <h2>{user.firstName}</h2>
              <h4>{user.email}</h4>
              <p className="user_proffesion">{user.phone}$</p>
              <p className="user_proffesion">{user.address}$</p>
            </div>

            <div className="profile_rightSection_info">
              <p className="user_proffesion">{user.userName}$</p>
              <h2>{user.firstName}</h2>
              <h4>{user.email}</h4>
              <p className="user_proffesion">{user.phone}$</p>
              <p className="user_proffesion">{user.address}$</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
