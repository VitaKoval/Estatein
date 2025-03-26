import styles from "./SectionContainer.module.css";

function SectionContainer({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default SectionContainer
