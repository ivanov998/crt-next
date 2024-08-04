import type { NextPage } from 'next';
import { useTheme } from '../contexts/ThemeContext';

const SwitchThemeButton: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='container position-relative'>
      <button
        onClick={() => toggleTheme()}
        className='btn theme-switch-btn position-absolute end-0 m-4 border-2 border-info text-info fs-2 py-0 px-2'
        type='button'
        aria-label='Toggle theme'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='icon icon-tabler'
        >
          {theme === 'dark' ? (
            <>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path>
              <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path>
            </>
          ) : (
            <>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
            </>
          )}
        </svg>
      </button>
    </div>
  );
};

export default SwitchThemeButton;
