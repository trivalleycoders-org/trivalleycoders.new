// Members
import React from 'react';
import { Component } from 'react';
import { members } from './member-data'
import Member from './Member';
import SectionTitle from '../../elements/SectionTitle'
import styles from './style.css';

class Members extends Component {
  render() {
    console.log('members', members)

    const renderMembers = members.map((m) => (
      <Member
        key={m.id}
        _id={m.id}
        picture={m.picture}
        name={m.name}
        role={m.role}
        index={m.index}
      />
    ))
    return (
      <section id='members' className='wrapperFullWidth green-background'>
        <div className='wrapperMaxWidth1080'>
          <SectionTitle>Team</SectionTitle>
          <div className={styles.members}>
            {renderMembers}
          </div>
        </div>
      </section>
    )

  }
}


export default Members;
