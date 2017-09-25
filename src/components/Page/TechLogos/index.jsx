// TechLogos
import React from 'react';
import TechLogo from './TechLogo';
import styles from './style.css';
import { basicsLogos, mernLogos } from './logo-data'
import { Image } from 'react-bootstrap'
import iWomenLearning from './images/women-learning.jpeg'
import Responsive from 'react-responsive'
import { breakPoints } from '../TopBar/topbar.config'
import SectionTitle from '../../elements/SectionTitle'
import classNames from 'classnames'

const TechLogos = (props) => {
  const NarrowWidth = ({ children }) => <Responsive maxWidth={breakPoints.narrowWidthMax} children={children} />
  const MediumWidth = ({ children }) => <Responsive minWidth={breakPoints.mediumWidthMin} maxWidth={breakPoints.mediumWidthMax} children={children} />
  const WideWidth = ({ children }) => <Responsive minWidth={breakPoints.wideWidthMin} children={children} />

  const styleMediumWidth = classNames({
    [styles.techlogosMediumContainer]: true,
    [styles.wrapperNarrowText]: true,
  })

  const styleNarrowWidth = classNames({
    [styles.techlogosMediumContainer]: true,
    [styles.wrapperNarrowText]: true,
  })

  const basics = basicsLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
    />
  ))

  const mern = mernLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      style={t.style}
      url={t.image}
    />
  ))

  return (

    <div className='wrapperFullWidth greenBackground'>
      <div className='wrapperMaxWidth1080'>
        <SectionTitle>Learn With Us</SectionTitle>
        <WideWidth>
          <div className={styles.techlogosWideContainer}>
            <div className={styles.techlogosWideTopContainer}>
              <div>
                <Image src={iWomenLearning} responsive className={styles.imgWomenLearning} alt='women learning' />
              </div>
              <div className={styles.techlogosWideRight}>
                <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
                <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>

              </div>
            </div>
            <div className={styles.techlogosWideBottom}>
              <h3 className={styles.logoTitle}>The Basics</h3>
              <div className={styles.logoRow}>
                {basics}
              </div>
              <h3 className={styles.logoTitle}>MERN Stack</h3>
              <div>
                <div className={styles.logoRow}>
                  {mern}
                </div>
              </div>
            </div>
          </div>
        </WideWidth>
        <MediumWidth>
          <div className={styleMediumWidth}>
            <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
            <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
            <h3 className={styles.logoTitle}>The Basics</h3>
            <div className={styles.logoRow}>
              {basics}
            </div>
            <h3 className={styles.logoTitle}>MERN Stack</h3>
            <div>
              <div className={styles.logoRow}>
                {mern}
              </div>
            </div>
          </div>
        </MediumWidth>
        <NarrowWidth>
          <div className={styleNarrowWidth}>
            <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
            <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
            <h3 className={styles.logoTitle}>The Basics</h3>
            <div className={styles.logoRow}>
              {basics}
            </div>
            <h3 className={styles.logoTitle}>MERN Stack</h3>
            <div>
              <div className={styles.logoRwo}>
                {mern}
              </div>
            </div>
          </div>
        </NarrowWidth>
      </div>
    </div>
      )
      }

      export default TechLogos;
