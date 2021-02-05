import { Footer } from './Footer';
import { Header } from './Header';
import { SidePanel } from './SidePanel';

interface IProps {
  children?: React.ReactNode;
}

export const ContentWrapper = (props: IProps) => {
  return (
    <div className="flex flex-col container mx-5 my-5 h-screen">
      <Header />
      <div className="flex flex-grow flex-row">
        <SidePanel />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
