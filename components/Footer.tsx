import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className='py-5 bg-black'>
      <div className='container'>
        <p className='text-center text-white m-0 small'>
          Copyright&nbsp;© chinese-remainder-calculator.com 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
