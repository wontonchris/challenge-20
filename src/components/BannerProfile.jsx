import React from "react";

const profileImg = 'https://cdn.discordapp.com/attachments/398697045919137803/1089823409942302790/WontonChris_8k_super_detail_luxury_cyber_futuristic_ninja_cyber_5cba28d1-af1e-4268-b372-3864f4fcee62.png';
const bannerImg = 'https://img.freepik.com/premium-vector/abstract-grid-with-perspective-view-futuristic-widescreen-design-banner-technology-retro_499863-95.jpg?w=2000';

function BannerProfile() {
  return (
    <div>
      <div className="banner">
        <img
          className="banner-image"
          src={bannerImg}
          alt="Banner"
        />
      </div>

      <div className="banner-profile">
        <img
          className="profile-image"
          src={profileImg}
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default BannerProfile;
