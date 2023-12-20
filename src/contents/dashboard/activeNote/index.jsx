import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/card";
import styles from "./index.module.css"

class ActiveNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <>
          <h2 className={styles.h2}>Catatan Aktif</h2>
          <div className={styles.container}>
            {this.props.dataNotes.length === 0 
            ?
              <p>Tidak ada catatan</p>
            : 
            this.props.dataNotes.map((dataNote) => (
              <Card key={dataNote.id} data={dataNote} text={"Arsip"} onDelete={this.props.onDelete} onMove={this.props.onMoveToArchive} onDetail={this.props.onDetail}/>
            ))}
          </div>
        </>
      )
  }
}

ActiveNote.propTypes = {
  dataNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onMoveToArchive : PropTypes.func.isRequired,
  onDelete : PropTypes.func.isRequired,
  onDetail : PropTypes.func.isRequired,
};

export default ActiveNote;