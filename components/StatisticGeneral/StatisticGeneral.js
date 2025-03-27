import { StatisticCard } from '@/ui'
import statisticData from './definition.js'
import styles from './StatisticGeneral.module.css'

function StatisticGeneral() {
  return (
    <div className={styles.statistic}>
        {statisticData?.map((item) => <StatisticCard key={item.id} {...item}/>)}
    </div>
  )
}

export default StatisticGeneral
