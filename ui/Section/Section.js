import styles from './Section.module.css'

function Section({ children, className = '', ...props }) {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
