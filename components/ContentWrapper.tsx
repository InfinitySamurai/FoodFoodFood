import { Header } from './Header';
import { SidePanel } from './SidePanel';

interface IProps {
  children?: React.ReactNode;
}

export const ContentWrapper = (props: IProps) => {
  return (
    <div>
      <div>This is the wrapper that contains the consistent stuff</div>
      <Header />
      <SidePanel />
      {props.children}
    </div>
  );
};
