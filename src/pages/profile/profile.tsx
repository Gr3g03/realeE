import React from 'react';
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
