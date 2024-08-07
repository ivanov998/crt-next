import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <p className='brief-description d-none d-lg-block px-5 rounded-3 fs-5 py-3 shadow-sm mx-3 mx-lg-5 text-'>
        The Chinese Remainder Theorem (CRT) is a powerful mathematical concept
        with numerous applications in number theory, cryptography, and computer
        science. However, solving CRT problems can be challenging and
        time-consuming. But not anymore! With our free online tool, you can
        effortlessly solve Chinese Remainder Theorem problems in no time.
      </p>
      <div className='row g-0 mt-md-3 mt-lg-5'>
        <div className='col-md-6 col-lg-5 col-xl-6 d-flex justify-content-center mb-3 mb-md-0'>
          <div className='fs-4 text-muted'>
            <div className='congruence-wrapper mb-3'>
              <div className='congruence rounded-start shadow-sm d-inline-block py-1 ps-3 ps-lg-4 me-2 me-lg-4'>
                <strong>x</strong>
                <span className='ms-3'>≡</span>
                <input
                  type='number'
                  className='text-center fw-bold text-primary mx-2'
                  placeholder='a'
                />
                <span>(mod</span>
                <input
                  type='number'
                  className='text-center fw-bold text-primary mx-2'
                  placeholder='n'
                />
                <span>)</span>
                <span className='fs-6 text-danger ms-3 align-text-top'></span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                viewBox='0 0 16 16'
                className='bi bi-x-lg text-danger fs-5'
              >
                <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z'></path>
              </svg>
            </div>
            <button className='btn fw-bold w-100 mb-3 mt-2' type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                viewBox='0 0 16 16'
                className='bi bi-plus text-warning fs-2'
              >
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'></path>
              </svg>
              &nbsp;Add new congruence
            </button>
            <div className='d-flex justify-content-around'>
              <button
                className='btn btn-secondary px-3 px-lg-4 py-2 shadow-sm rounded-0 fw-bold'
                type='button'
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
                  className='icon icon-tabler icon-tabler-sparkles me-2 fs-5'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z'></path>
                </svg>
                RANDOMIZE
              </button>
              <button
                className='btn btn-primary px-3 px-lg-4 py-2 shadow-sm rounded-0 fw-bold'
                type='button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-check-lg me-2 fs-5'
                >
                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022'></path>
                </svg>
                SOLVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
