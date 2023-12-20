import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css"

class DetailNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div className={styles.container}>
          <h3 className={styles.title}>{this.props.dataNote.title}</h3>
          <div className={styles.content}>
            <p className={styles.body}>{this.props.dataNote.body}</p>
            <p className={styles.createdAt}>{new Date(this.props.dataNote.createdAt).toUTCString()}</p>
          </div>
        </div>
      )
  }
}

DetailNote.propTypes = {
  dataNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired
};

export default DetailNote;