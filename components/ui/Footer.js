import { motion } from 'framer-motion'
import styles from '../../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
      Crafted with passion and precision by Ram Rohith ❤️. 
      </motion.p>
    </motion.footer>
  )
}

export default Footer
