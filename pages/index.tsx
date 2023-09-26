import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Sidebar } from '../components/layout/Sidebar';
import { CenterContent } from '../components/layout/CenterContent';
import { RightMenu } from '../components/layout/RightMenu';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <CenterContent />
      <RightMenu />
    </div>
  );
};
 export default Home;