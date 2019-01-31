import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <Image/>
      </div>
      <div>
        <div className={styles.aboutRight}>
          <h2>Hello, I'm Manasa.</h2>
          <p>
            I am a <b>Bay Area</b> native, a 2018 <b>UT Austin</b> grad, and currently<br/>
            a self-taught and passionate <b>front-end</b> developer and<br/>
            software engineer at <b>Target</b>.
          </p>
          <p>
            I spend most of my time listening to music, exploring, and <br/>
            reading. Other passions include photography, watching the <br/>
            office, portfolio design, playing badminton, and my guitar.
          </p>
          <p>

          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
