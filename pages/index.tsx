import type { NextPage } from 'next';
import CongruenceForm from '../components/CongruenceForm';

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
          <CongruenceForm />
        </div>
        <div className='col-md-6 col-lg-7 col-xl-6'>
          <div className='d-flex justify-content-evenly flex-wrap mt-3 mt-md-0'>
            <div className='d-inline-block'>
              <input
                type='checkbox'
                id='btn-2'
                className='btn-check'
                checked={true}
              />
              <label
                className='form-label d-inline-flex flex-column justify-content-center align-items-center btn mx-sm-2 py-lg-4 position-relative shadow-sm mb-3'
                data-bs-toggle='tooltip'
                data-bss-tooltip=''
                htmlFor='btn-2'
                title='Get a comprehensive breakdown of each step in solving CRT problems'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-circle circle-icon position-absolute text-muted fs-5'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-check-circle-fill d-none circle-icon position-absolute fs-5'
                >
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
                </svg>
                <i className='la la-lightbulb-o main-icon fs-1 mb-2 text-muted'></i>
                <span className='fw-bold'>Explain steps</span>
                <span className='text-muted'>
                  #steps&nbsp;
                  <a
                    className='text-decoration-none text-primary'
                    href='#steps'
                    aria-label='Explain Steps'
                  >
                    <i className='la la-external-link'></i>
                  </a>
                </span>
              </label>
            </div>
            <div className='d-inline-block'>
              <input
                type='checkbox'
                id='btn-3'
                className='btn-check'
                checked={true}
              />
              <label
                className='form-label d-inline-flex flex-column justify-content-center align-items-center btn mx-sm-2 py-lg-4 position-relative shadow-sm mb-3'
                data-bs-toggle='tooltip'
                data-bss-tooltip=''
                htmlFor='btn-3'
                title='Show the solution after the steps'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-circle text-muted circle-icon position-absolute fs-5'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-check-circle-fill d-none circle-icon position-absolute fs-5'
                >
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
                </svg>
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
                  className='icon icon-tabler icon-tabler-target-arrow main-icon fs-1 mb-2 text-muted'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
                  <path d='M12 7a5 5 0 1 0 5 5'></path>
                  <path d='M13 3.055a9 9 0 1 0 7.941 7.945'></path>
                  <path d='M15 6v3h3l3 -3h-3v-3z'></path>
                  <path d='M15 9l-3 3'></path>
                </svg>
                <span className='fw-bold'>Solution First</span>
                <span className='text-muted'>
                  #solution&nbsp;
                  <a
                    className='text-decoration-none text-primary'
                    href='#chart'
                    aria-label='Generate Chart'
                  >
                    <i className='la la-external-link'></i>
                  </a>
                </span>
              </label>
            </div>
            <div className='d-inline-block'>
              <input
                type='checkbox'
                id='btn-1'
                className='btn-check'
                disabled={false}
              />
              <label
                className='form-label d-inline-flex flex-column justify-content-center align-items-center btn mx-sm-2 py-lg-4 position-relative shadow-sm mb-3'
                data-bs-toggle='tooltip'
                data-bss-tooltip=''
                htmlFor='btn-1'
                title='Interactive practice mode to help you master solving CRT problems'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-circle text-muted circle-icon position-absolute fs-5'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-check-circle-fill d-none circle-icon position-absolute fs-5'
                >
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  enable-background='new 0 0 24 24'
                  height='1em'
                  viewBox='0 0 24 24'
                  width='1em'
                  fill='currentColor'
                  className='main-icon fs-1 mb-2 text-muted'
                >
                  <g>
                    <path d='M0,0h24v24H0V0z' fill='none'></path>
                  </g>
                  <g>
                    <g>
                      <path d='M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z'></path>
                      <path d='M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14.01,15 c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04C15.04,14.53,14.6,15,14.01,15z M16.51,8.83 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52c0-0.41-0.06-1.08,0.26-1.65c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26 C16.87,6.87,17.08,7.99,16.51,8.83z'></path>
                    </g>
                  </g>
                </svg>
                <span className='fw-bold'>Practice mode</span>
                <span className='text-muted'>
                  #practice&nbsp;
                  <a
                    className='text-decoration-none text-primary'
                    href='#practice'
                    aria-label='Practice Mode'
                  >
                    <i className='la la-external-link'></i>
                  </a>
                </span>
              </label>
            </div>
            <div className='d-inline-block'>
              <input type='checkbox' id='btn-4' className='btn-check' />
              <label
                className='form-label d-inline-flex flex-column justify-content-center align-items-center btn mx-sm-2 py-lg-4 position-relative shadow-sm mb-3'
                data-bs-toggle='tooltip'
                data-bss-tooltip=''
                htmlFor='btn-4'
                title='Display all possible solutions for X based on the given congruences'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-circle text-muted circle-icon position-absolute fs-5'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-check-circle-fill d-none circle-icon position-absolute fs-5'
                >
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
                </svg>
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
                  className='icon icon-tabler icon-tabler-infinity main-icon fs-1 mb-2 text-muted'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828'></path>
                </svg>
                <span className='fw-bold'>All Solutions</span>
                <span className='text-muted'>
                  #allsolutions&nbsp;
                  <a
                    className='text-decoration-none text-primary'
                    href='#congruence'
                    aria-label='Congruence Relations'
                  >
                    <i className='la la-external-link'></i>
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
