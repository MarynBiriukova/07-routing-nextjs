
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import { connection } from 'next/server';

type Props = {
  params: Promise<{ id: string }>;
};


const NotePreview = async ({ params }: Props) => {

    await connection();
    
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;


//************************************************************************** */import { fetchNoteById } from '@/lib/api';
/*'use client'

import Modal from '@/components/Modal/Modal';
//import Loader from '@/components/Loader/Loader';
import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function NotePreview({ params }: PageProps) {
  
  const { id } = use(params);
  const router = useRouter();
  
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetchNoteById(id)
      .then((data) => {
        setNote(data);
      })
      .catch((err) => {
        console.error('Error note loading :', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


    const handleClose = () => { 
        router.back();
    };

    if (loading)
       {  return (
      <Modal onClose={handleClose}>
        <p>Загрузка данных заметки...</p>
        </Modal>
      )}
    
    if (!note) {
       return (
    <Modal onClose={handleClose}>
      <p>Note not found</p>
    </Modal>
  ); 
    }

  return (
    <Modal onClose={handleClose}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
*/
