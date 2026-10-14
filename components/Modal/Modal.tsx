/*
import { createPortal } from 'react-dom'
import css from './Modal.module.css'
//import NoteForm from '../NoteForm/NoteForm'
import { useEffect, useState } from 'react';

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true); // Спрацює тільки в браузері
    return () => setMounted(false);
  }, []);


  useEffect(() => {
    if (!mounted) return ;

    //****************************************************** 
  
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mounted, onClose]);

  /****************************************************** 
  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  const targetContainer = modalRoot || document.body;
  
  return createPortal(
    /*********************************************************** 
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
                
      </div>
    </div>,

    targetContainer

    //document.getElementById('modal-root') as HTMLDivElement,
  );
}

//*********************************************************** */
//*********************************************************** */

'use client';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();
  
  const close = () => router.back();

  return (
    <div>
      <div>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;