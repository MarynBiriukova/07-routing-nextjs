'use client';

import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';
import css from './NotePreview.module.css'; 

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewClientProps) {
  return (
    <Modal>
      <article className={css.container || ''} >

        <h2 className={css.title || ''} >
          {note.title}
        </h2>

        {note.tag && (
          <span className={css.tag || ''} >
            {note.tag}
          </span>
        )}

        <p className={css.content || ''} >
          {note.content}
        </p>

        <div 
          className={css.meta || ''} >
          <span>Create: {new Date(note.createdAt).toLocaleDateString()}</span>
        </div>
      </article>
    </Modal>
  );
}