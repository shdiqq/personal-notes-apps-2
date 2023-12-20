import React from "react";
import { getArchiveNotesById } from "../../../utils";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import DetailNote from "../../../contents/dashboard/detailNote";

function DetailArchiveNotePageWrapper() {
  const { id } = useParams();
  return <DetailArchiveNotePage id={Number(id)} />;
}

class DetailArchiveNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailNote: getArchiveNotesById(props.id),
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

DetailArchiveNotePage.propTypes = {
  id: PropTypes.number.isRequired,
}

export default DetailArchiveNotePageWrapper;