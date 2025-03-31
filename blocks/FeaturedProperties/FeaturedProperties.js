import { Headline } from '@/components'
import { Container, Section } from '@/ui'
import styles from './FeaturedProperties.module.css'

const featured = {
  title: 'Featured Properties',
  subtitle:
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.',
  actions: [
    {
      id: 1,
      label: 'View All Properties',
      link: '#',
    },
  ],
}

function FeaturedProperties() {
  return (
    <Section>
      <Container>
        <div className={styles.featured__wrapper}>
          <Headline data={featured} />
          <div>scroll</div>
        </div>
      </Container>
    </Section>
  )
}

export default FeaturedProperties
