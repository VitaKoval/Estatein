import styles from './SectionContainer.module.css'

/**
 * Reusable Styled component for section's container
 *
 * @component
 * @example
 * // Usage example with different props
 * <SectionContainer variant="large">
 *    Section Content
 * </SectionContainer>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {'primary' | 'large'} [props.variant='primary'] - Container width
 */

function SectionContainer({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default SectionContainer
