import { Headline } from '@/components'
import { Container, Section } from '@/ui'
import styles from './Testimonials.module.css'

const testimonialsHeadline = {
  title: 'What Our Clients Say',
  subtitle:
    'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.',
  actions: [
    {
      id: 1,
      label: 'View All Testimonials',
      link: '#',
    },
  ],
}

function Testimonials() {
  return (
    <Section>
      <Container>
        <div className={styles.testimonials__wrapper}>
          <Headline data={testimonialsHeadline} />
          Content
        </div>
      </Container>
    </Section>
  )
}

export default Testimonials
