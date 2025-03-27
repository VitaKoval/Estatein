import { StatisticGeneral } from '@/components'
import { Button, SectionContainer, StatisticCard } from '@/ui'
import Image from 'next/image'
import introImage from '../../assets/intro_home.png'
import styles from './Intro.module.css'

function Intro() {
  return (
    <section className={styles.section__intro}>
      <SectionContainer>
        <div className={styles.intro__wrap}>
          <div className={styles.intro__content}>
            <div className={styles.content__text}>
              <h1>Discover Your Dream Property with Estatein</h1>
              <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>
            <div className={styles.content__actions}>
              <Button>Learn More</Button>
              <Button variant="accent">Browse Properties</Button>
            </div>
            <StatisticGeneral />
          </div>
          <div className={styles.intro__image}>
            <Image src={introImage} alt="Modern glass building" />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Intro
