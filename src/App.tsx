import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>Clutter to Kubernetes</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src="https://raw.githubusercontent.com/OsmiumOP/OsmiumOP/main/dev_cat.gif" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <img src="https://cdn.pixabay.com/photo/2014/01/14/01/38/cat-244060_960_720.jpg" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <img src="https://th.bing.com/th/id/OIP.sE5NsJDsYsRUmkdEySpSRwHaHa?pid=ImgDet&rs=1" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
