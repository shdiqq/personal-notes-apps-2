import React, { useState } from "react";
import { addActiveNote, deleteArchiveNote, getArchiveNotes } from "../../utils";
import SearchBar from "../../components/searchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArchiveNote from "../../contents/dashboard/archiveNote";
import PropTypes from 'prop-types';

function ArchiveNoteWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  }

  return <ArchiveNotePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

function ArchiveNotePage(props) {
  const [archiveNotes, setArchiveNotes] = useState(getArchiveNotes());
  const [keyword, setKeyword] = useState(props.defaultKeyword || '');
  const navigate = useNavigate();

  const onDeleteHandler = ({ id }) => {
    deleteArchiveNote(id);

    setArchiveNotes(getArchiveNotes());
  }

  const onMoveToActiveHandler = (data) => {
    onDeleteHandler({ id: data.id });

    addActiveNote(data);
  }

  const onDetailHandler = ({ id }) => {
    navigate(`archive-note/${id}`);
  }

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    props.keywordChange(newKeyword);
  }

  const notes = archiveNotes.filter((note) => {
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
        <ArchiveNote archiveNote={notes} onMoveToActive={onMoveToActiveHandler} onDelete={onDeleteHandler} onDetail={onDetailHandler} />
      </div>
    </>
  );
}

ArchiveNotePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default ArchiveNoteWrapper;