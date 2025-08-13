import styles from '@/app/ui/aurora.module.css';

export default function Aurora({ page }) {
  const getColor = (page, index) => {
    const offset = page === 'about' ? 1 : page === 'work' ? 2 : 0;
    const newIndex = (index + offset) % 4;

    return (
      newIndex === 1 ? styles.pink :
        newIndex === 2 ? styles.blue :
          newIndex === 3 ? styles.violet :
            styles.indigo
    );
  };

  return (
    <div className={styles.sticky}>
      <div className={styles.container}>
        <div className={`${styles.base} ${styles.top_left} ${getColor(page, 0)}`}></div>
        <div className={`${styles.base} ${styles.bot_left} ${getColor(page, 1)}`}></div>
        <div className={`${styles.base} ${styles.bot_right} ${getColor(page, 2)}`}></div>
        <div className={`${styles.base} ${styles.top_right} ${getColor(page, 3)}`}></div>
      </div>
    </div>
  )
}