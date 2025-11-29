import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2147206602}>
      <p className={styles.aboutMe3}>
        <span className={styles.aboutMe}>About&nbsp;</span>
        <span className={styles.aboutMe2}>Me</span>
      </p>
      <p className={styles.iMaProductDesignerWi}>
        I’m a Product Designer with 2+ years of experience.
        <br />I design SaaS products, mobile apps, and websites.
        <br />I started as an intern and later became a founding designer.
        <br />I enjoy making products simple, useful, and visually clear.
        <br />I build end-to-end product experiences and work with Vibe Code when
        needed.
      </p>
      <div className={styles.bio}>
        <h3 className={styles.sectionTitle}>Professional Bio</h3>
        <p className={styles.sectionText}>
          [CONTENT TO BE PROVIDED] Add 3–5 sentences summarizing your background, passion for design, and current focus.
        </p>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.sectionTitle}>Key Skills</h3>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>User Experience Design</li>
          <li className={styles.skillItem}>Visual & UI Design</li>
          <li className={styles.skillItem}>Prototyping & Interaction</li>
          <li className={styles.skillItem}>Design Systems</li>
          <li className={styles.skillItem}>Product Strategy</li>
        </ul>
      </div>
      <div className={styles.values}>
        <h3 className={styles.sectionTitle}>Personal Values</h3>
        <p className={styles.sectionText}>
          [CONTENT TO BE PROVIDED] Brief mission statement or core values that guide your work.
        </p>
      </div>
      <div className={styles.education}>
        <h3 className={styles.sectionTitle}>Education & Certifications</h3>
        <p className={styles.sectionText}>
          [CONTENT TO BE PROVIDED] Degree, bootcamp, or certificates relevant to design.
        </p>
      </div>
      <div className={styles.interests}>
        <h3 className={styles.sectionTitle}>Personal Interests</h3>
        <p className={styles.sectionText}>
          [CONTENT TO BE PROVIDED] Hobbies or interests that add personality to your profile.
        </p>
      </div>
    </div>
  );
}

export default Component;
