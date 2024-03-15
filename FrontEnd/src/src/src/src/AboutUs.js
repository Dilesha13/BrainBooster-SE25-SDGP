import React, { useState } from 'react';
import './AboutUs.css';

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      bio: 'John is a software engineer with 5 years of experience in web development.',
      imgSrc: 'https://picsum.photos/id/1015/200/300',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      bio: 'Jane is a product manager with 7 years of experience in product management and project management.',
      imgSrc: 'https://picsum.photos/id/1018/200/300',
    },
    // Add more team members here
  ];

  const handleMouseEnter = (member) => {
    setActiveMember(member);
  };

  const handleMouseLeave = () => {
    setActiveMember(null);
  };

  return (
    <div className="team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member"
            onMouseEnter={() => handleMouseEnter(member)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
      {activeMember && (
        <div className="active-member">
          <img src={activeMember.imgSrc} alt={activeMember.name} />
          <h3>{activeMember.name}</h3>
          <p>{activeMember.position}</p>
          <p>{activeMember.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Team;