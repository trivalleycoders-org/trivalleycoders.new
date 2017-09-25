// Sponsors
import React from 'react';
import { Component } from 'react';
import sZelda from './images/zelda.sponsor.jpeg'
import Sponsor from './Sponsor';
import styles from './style.css';
import SectionTitle from '../../elements/SectionTitle'

class Sponsors extends Component {


  render() {
    const arrSponsors = [
      {
        id: 100,
        picture: sZelda,
        name: 'Zelda Kohn',
        tagLine: 'For all you realestate needs in the Tri-valley!',
      },
    ]

    const sponsors = arrSponsors.map((s) => (
      <Sponsor
        key={s.id}
        picture={s.picture}
        name={s.name}
        tagLine={s.tagLine}
      />
    ))
    return (
      <section id='sponsors' className='wrapperFullWidth'>
        <div className='wrapperMaxWidth1080'>
          <SectionTitle>Ouru Sponsors</SectionTitle>
          <div className={styles.sponsors}>
            {sponsors}
          </div>
        </div>
      </section>
    )
  }
}
export default Sponsors;
