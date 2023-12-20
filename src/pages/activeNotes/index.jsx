import { useState } from "react";
import { addArchiveNote, deleteActiveNote, getActiveNotes } from "../../utils";
import SearchBar from "../../components/searchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import ActiveNote from "../../contents/dashboard/activeNote";
import PropTypes from 'prop-types';

function ActiveNoteWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  }

  return <ActiveNotePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

function ActiveNotePage(props) {
  const [activeNotes, setActiveNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState(props.defaultKeyword || '');
  const navigate = useNavigate();

  const onDeleteHandler = ({ id }) => {
    deleteActiveNote(id);

    setActiveNotes(getActiveNotes());
  }

  const onMoveToArchiveHandler = (data) => {
    onDeleteHandler({ id: data.id });

    addArchiveNote(data);
  }

  const onDetailHandler = ({ id }) => {
    navigate(`active-note/${id}`);
  }

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    props.keywordChange(newKeyword);
  }

  const notes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <div className="search-notes" id="pencarian">
        <h2>Pencarian Catatan</h2>
        <br></br>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      <div className="line"></div>
      <div className="list-notes" id="catatan-aktif">
        <ActiveNote dataNotes={notes} onMoveToArchive={onMoveToArchiveHandler} onDelete={onDeleteHandler} onDetail={onDetailHandler} />
      </div>
    </>
  );
}

ActiveNotePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default ActiveNoteWrapper;