import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleNote, handleDeleteNote}) => {
  return (
    
    <div className='notes-list'>
      {notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
      <AddNote handleNote= {handleNote}/>
    </div>
    
  )
}

export default NotesList