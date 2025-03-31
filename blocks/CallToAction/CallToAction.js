import { Button, Container, Section } from '@/ui'
import styles from './CallToAction.module.css'

function CallToAction() {
  return (
    <Section className={styles.action}>
      <Container>
        <div className={styles.action__wrap}>
          <div className={styles.action__content}>
            <h3>Start Your Real Estate Journey Today</h3>
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className={styles.action__btn}>
            <Button variant="accent">Explore Properties</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CallToAction
