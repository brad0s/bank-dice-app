// import { useContext, useRef, useEffect } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import InfoModal from './InfoModal';

function Header() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#242424',
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        width={20}
        height={20}
      >
        <path
          fill='currentColor'
          d='m243.4 2.6-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0M128 224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224h-64v192h-40V224h-64v192h-48V224h-64v192h-40zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64'
        />
      </svg>
      <p
        style={{
          margin: 0,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          fontSize: '0.875rem',
        }}
      >
        Bank Dice Game
      </p>
      <button
        style={{
          border: 'none',
          background: 'none',
          padding: '0.35rem 0.75rem',
        }}
        onClick={() => setShowInfoModal(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          width={20}
          height={20}
        >
          <path
            fill='currentColor'
            d='M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-86.2-346.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0'
          />
        </svg>
      </button>
      {showInfoModal &&
        createPortal(<InfoModal onClose={() => setShowInfoModal(false)} />, document.body)}
    </header>
  );
}

export default Header;
