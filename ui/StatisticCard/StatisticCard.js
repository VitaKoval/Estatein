import styles from './StatisticCard.module.css'

/**
 * StatisticCard component for displaying statistical data.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.count - The number or value to display in the heading (e.g., "200+").
 * @param {string} props.label - The text description of the statistic, e.g., "Happy Customers".
 * 
 * @returns {JSX.Element} - The component structure to display the statistics.
 */

function StatisticCard({count, label}) {
  return (
    <div className={styles.card}>
        <h4>{count}</h4>
        <p>{label}</p>
    </div>
  )
}

export default StatisticCard
