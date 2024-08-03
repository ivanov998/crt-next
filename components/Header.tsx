import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <header className='masthead text-light'>
      <div className='masthead-content'>
        <div className='container text-start'>
          <h1 className='masthead-heading mb-0'>
            <strong>Chinese Remainder&nbsp;</strong>
          </h1>
          <h1 className='masthead-subheading mb-0'>
            <strong>Theorem Calculator</strong>
          </h1>
        </div>
      </div>
      <div className='bg-circle-1 bg-circle'></div>
      <div className='bg-circle-2 bg-circle'></div>
      <div className='bg-circle-3 bg-circle'></div>
      <div className='bg-circle-4 bg-circle'></div>
    </header>
  );
};

export default Home;
