import { Stars } from '@/components/icons'
import { Button, Container, Section } from '@/ui'
import styles from './FeaturedProperties.module.css'

function FeaturedProperties() {
  return (
    <Section>
      <Container>
        <Stars />
        <div className={styles.headline}>
          <div className={styles.headline__content}>
            <h3>Featured Properties</h3>
            <p>
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <div className={styles.headline__actions}>
            <Button variant="alt-dark">View All Properties</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FeaturedProperties
