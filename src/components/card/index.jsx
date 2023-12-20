import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Barrier from "../barrier";
import styles from "./index.module.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>{this.props.data.title}</h3>
          <p className={styles.createdAt}>{new Date(this.props.data.createdAt).toUTCString()}</p>
          <p className={styles.body}>{this.props.data.body}</p>
        </div>
        <div className={styles.buttonOption}>
          <div className={styles.archiveButton}><Button text={this.props.text} data={this.props.data} onClickHandler={this.props.onMove}/></div>
          <Barrier/>
          <div className={styles.detailButton}><Button text={"Detail"} data={this.props.data} onClickHandler={this.props.onDetail}/></div>
          <Barrier/>
          <div className={styles.deleteButton}><Button text={"Delete"} data={this.props.data} onClickHandler={this.props.onDelete}/></div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  text: PropTypes.string,
  onMove : PropTypes.func.isRequired,
  onDelete : PropTypes.func.isRequired,
  onDetail : PropTypes.func.isRequired,
};

export default Card;
