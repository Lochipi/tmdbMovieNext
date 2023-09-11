import styles from './page.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footerHead}>Open MovieDB</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Laudantium, non?</p>
      <div className={styles.copyright}>
        <p>Copyright &copy;2023</p>
      </div>
    </div>
  )
}

export default Footer
