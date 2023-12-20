import React from "react";
import { getActiveNotesById } from "../../../utils";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import DetailNote from "../../../contents/dashboard/detailNote";

function DetailActiveNotePageWrapper() {
  const { id } = useParams();
  return <DetailActiveNotePage id={Number(id)} />;
}

class DetailActiveNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailNote: getActiveNotesById(props.id),
    };
  }

  render() {
    return(
      <>
        <div className="list-notes" id="catatan-aktif">
          <DetailNote dataNote={this.state.detailNote}/>
        </div>
      </>
    )
  }
}

DetailActiveNotePage.propTypes = {
  id: PropTypes.number.isRequired,
}

export default DetailActiveNotePageWrapper;