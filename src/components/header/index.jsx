import React from "react";
import styles from "./index.module.css"
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuVisible: true,
    }
  }

  show = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible})
  }

  render() {
    const ulClasses = `${styles.ul} ${this.state.isMenuVisible ? styles.hideListMenu : styles.showListMenu}`;
    return(
      <header className={styles.header}>
        <div className={styles.left}>
          <Link className={styles.title} to="/"><h1>Personal Notes App</h1></Link>
        </div>
        <div className={styles.right}>
          <button className={styles.hamburger} onClick={this.show}>≡</button>
          <div className={styles.container}>
            <ul className={ulClasses}>
              <Link className={styles.a} to="/"> <li className={styles.li}> Catatan Aktif </li></Link>
              <Link className={styles.a} to="/create-note"> <li className={styles.li}> Buat Catatan </li></Link>
              <Link className={styles.a} to="/archive-note"> <li className={styles.li}> Arsip </li></Link>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;