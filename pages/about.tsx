import { NextPage } from 'next';
import Link from 'next/link';
import loadContent from '../utils/LoadContent';

export async function getStaticProps() {
  const theoryText = await loadContent('theory');
  return { props: { theoryText } };
}

const Home: NextPage = ({ theoryText }: any) => {
  return (
    <div className='px-3 px-lg-5'>
      <Link href='/' className='fs-4'>
        Back to the calculator...
      </Link>
      <div className='mt-5'>
        <div
          className='mt-5 fw-bold'
          dangerouslySetInnerHTML={{ __html: theoryText }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
