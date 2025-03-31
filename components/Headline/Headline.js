import { Button } from '@/ui'
import { Stars } from '../icons'
import styles from './Headline.module.css'

/**
 * The `Headline` component displays a title, subtitle, and optional action buttons.
 * It accepts a `data` prop, which should contain the `title`, `subtitle`, and `actions` for the section.
 * Each action button is rendered based on the `actions` array, where each action object includes an `id`, `label`, and `link`.
 *
 * Example of `data` object:
 * ```js
 * const data = {
 *   title: 'Featured Properties',
 *   subtitle: 'Explore our handpicked selection of featured properties.',
 *   actions: [
 *     { id: 1, label: 'View All Properties', link: '#' }
 *   ]
 * }
 * ```
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Object} props.data - The data object containing the title, subtitle, and actions.
 * @param {string} props.data.title - The title of the headline.
 * @param {string} props.data.subtitle - The subtitle of the headline.
 * @param {Array<Object>} [props.data.actions] - An optional array of action objects that define the action buttons.
 * @param {number} props.data.actions[].id - A unique identifier for each action. This is used as the key when rendering each button.
 * @param {string} props.data.actions[].label - The label of the action button. This text is displayed on the button.
 * @param {string} props.data.actions[].link - The URL or link that the action button points to. This can be a local or external link.
 *
 * @returns {JSX.Element} The rendered `Headline` component.
 */

function Headline({ data }) {
  const { title, subtitle, actions } = data
  return (
    <div className={styles.headline}>
      <Stars />
      <div className={styles.headline__wrap}>
        <div className={styles.headline__content}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={styles.headline__actions}>
          {actions &&
            actions.map(({ id, label, link }) => (
              <Button key={id} variant="alt-dark">
                {label}
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Headline
