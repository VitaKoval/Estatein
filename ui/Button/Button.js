import styles from './Button.module.css'

/**
 * Reusable button component
 *
 * @component
 * @example
 * // Usage example with different props
 * <Button size="large" variant="accent">Click me</Button>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {() => void} [props.onClick] - Function triggered on click
 * @param {'small' | 'medium' | 'large'} [props.size='large'] - Button size
 * @param {'dark' | 'accent'} [props.variant='dark'] - Button style
 * @returns {JSX.Element} Button element
 */

function Button({children, onClick, size='large', variant='dark'}) {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
