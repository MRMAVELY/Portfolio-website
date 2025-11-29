import React from 'react';
import { Switch } from '../../src/components/ui/switch'

import styles from './index.module.scss';

const Component = () => {
  const [selected, setSelected] = React.useState(false)
  return (
    <div className={styles.frame2147206607}>
      <div className={styles.component2}>
        <Switch className={styles.toggleButton} aria-label="Toggle image" isSelected={selected} onChange={setSelected} />
        <div className={styles.frame2147206605}>
          <div
            className={styles.frame2147206603}
          style={
            selected
              ? {
                    backgroundImage: 'url(/Frame 2147206607.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }
              : {
                    backgroundImage: 'url(/Frame 2147206605.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }
          }
          >
            <p className={styles.weekJpg}>Week.jpg</p>
          </div>
        </div>
      </div>
      <p className={styles.iMaProductDesignerWi}>
        I’m a Product Designer with 2+ years of experience. I design SaaS products,
        mobile apps, and websites. I started as an intern and later became a
        founding designer. I enjoy making products simple, useful, and visually
        clear. I build end-to-end product experiences and work with Vibe Code when
        needed.
      </p>
    </div>
  );
}

export default Component;
