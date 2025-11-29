import React from 'react';
import iconUrl from '../../src/assets/Frame 2147206597.svg';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2147206593}>
      <div className={styles.rectangle1} />
      <div className={styles.frame2147206591}>
        <p className={styles.contactMe}>Contact Me</p>
        <div className={styles.autoWrapper}>
          <img src={iconUrl} className={styles.vector} onError={(e) => { e.currentTarget.src = '../image/middg5ug-off39pu.svg'; }} />
        </div>
      </div>
    </div>
  );
}

export default Component;
