import React from 'react';
import './AboutUs.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Imashi Thakshila',
      imgSrc: 'Imashi.jpg',
      position:'Leader'
    },
    {
      id: 2,
      name: 'Tharushi Dilisha',
      imgSrc: 'Tharushi.jpg',
    },
    {
      id: 3,
      name: 'Akash Perera',
      imgSrc: 'Akash.jpg',
    },
    {
      id: 4,
      name: 'Harini Tharupa',
      imgSrc: 'Tharupa.jpg',
    },
    {
      id: 5,
      name: 'Nipuni Pathirana',
      imgSrc: 'Nipuni.jpg',
    },
    // Add more team members here
  ];


  return (
    <div className="team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img style={{ width: '150px', height: '180px' }} src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Team