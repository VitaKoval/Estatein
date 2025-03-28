import styles from './Container.module.css'

/**
 * Reusable Styled component for section's container
 *
 * @component
 * @example
 * // Usage example with different props
 * <Container variant="large">
 *    Section Content
 * </Container>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {'primary' | 'large'} [props.variant='primary'] - Container width
 */

function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default Container
