import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import ArchiveNoteWrapper from './archiveNote';
import ActiveNoteWrapper from './activeNotes';
import CreateNotePage from './createNote';
import DetailArchiveNotePage from './detailNote/archive';
import DetailActiveNotePage from './detailNote/active';
import NotFound from './notFound';

function NoteApp() {
  return (
    <div className="note-app">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<ActiveNoteWrapper/>} />
          <Route path="/create-note" element={<CreateNotePage/>} />
          <Route path="/archive-note" element={<ArchiveNoteWrapper/>} />
          <Route path="/archive-note/:id" element={<DetailArchiveNotePage/>} />
          <Route path="/active-note" element={<ActiveNoteWrapper/>} />
          <Route path="/active-note/:id" element={<DetailActiveNotePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  );
}
 
export default NoteApp;