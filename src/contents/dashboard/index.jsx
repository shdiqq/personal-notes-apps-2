import React from "react";
import { getInitialData } from "../../utils";
import Header from "../../components/header";
import ListNote from "./listNote";
import CreateNote from "./createNote";
import ArchiveNotes from "./archiveNote";
import SearchBar from "../../components/searchBar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataNotes: getInitialData(),
      archiveNotes: [],
      searchValue: ""
    };
  }

  addNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        dataNotes: [
          ...prevState.dataNotes,
          {
            id: +new Date(),
            title,
            body: body,
            createdAt: new Date().toString(),
            archived: false,
          },
        ],
      };
    });
  }

  deleteNoteHandler = ({id}) => {
    const newDataNotes = this.state.dataNotes.filter((notes) => notes.id !== id);
    this.setState({ dataNotes: newDataNotes });
  }

  moveToArchiveNoteHandler = (data) => {
    this.deleteNoteHandler({ id: data.id });
    this.setState((prevState) => {
      return {
        archiveNotes: prevState.archiveNotes.concat(data),
      };
    });
  }

  deleteArchiveNoteHandler = ({id}) => {
    const newArchiveDataNotes = this.state.archiveNotes.filter((notes) => notes.id !== id);
    this.setState({ archiveNotes: newArchiveDataNotes });
  }

  moveToNoteHandler = (data) => {
    this.deleteArchiveNoteHandler({ id: data.id });
    this.setState((prevState) => {
      return {
        dataNotes: prevState.dataNotes.concat(data),
      };
    });
  }

  onChangeSearchEventHandler = (event) => {
    this.setState({searchValue: event.target.value})
  }

  render() {
      return(
        <>
          <Header/>
          <div className="search-notes" id="pencarian">
            <h2>Pencarian Catatan</h2>
            <br></br>
            <SearchBar searchValue={this.state.searchValue} onChange={this.onChangeSearchEventHandler}/>
          </div>
          <div className="line"></div>
          <div className="list-notes" id="catatan-aktif">
            <ListNote dataNote={this.state.dataNotes} searchValue={this.state.searchValue} moveToArchiveNote={this.moveToArchiveNoteHandler} deleteNote={this.deleteNoteHandler}/>
          </div>
          <div className="line"></div>
          <div className="create-notes" id="buat-catatan">
            <CreateNote addNote={this.addNoteHandler}/>
          </div>
          <div className="line"></div>
          <div className="archive-notes" id="arsip">
            <ArchiveNotes archiveNote={this.state.archiveNotes} moveToNote={this.moveToNoteHandler} deleteArchiveNote={this.deleteArchiveNoteHandler}/>
          </div>
        </>
      )
  }
}

export default Dashboard;