import { Headline } from '@/components'
import { Container, Section } from '@/ui'
import styles from './FAQ.module.css'

const questionsHeadline = {
  title: 'Frequently Asked Questions',
  subtitle:
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  actions: [
    {
      id: 1,
      label: 'View All FAQ’s',
      link: '#',
    },
  ],
}

function FAQ() {
  return (
    <Section>
      <Container>
        <div className={styles.questions__wrap}>
          <Headline data={questionsHeadline} />
          Questions
        </div>
      </Container>
    </Section>
  )
}

export default FAQ
