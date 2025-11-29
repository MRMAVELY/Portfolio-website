import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.macBookAir3}>
      <div className={styles.autoWrapper}>
        <img src="../image/midi7dmz-koy33gx.svg" className={styles.vector1} />
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
            <br />I build end-to-end product experiences and work with Vibe Code
            when needed.
          </p>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/midi7dmz-tgjfv94.svg" className={styles.toggleButton} />
        <div className={styles.frame2147206605}>
          <div className={styles.frame2147206603}>
            <p className={styles.weekJpg}>Week.jpg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
