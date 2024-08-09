import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2>MarkNotes</h2>
      <button>Create +</button>
    </div>
  )
}
