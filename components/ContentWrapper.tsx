import { Header } from './Header';
import { SidePanel } from './SidePanel';

export const ContentWrapper = (children) => {
  return (
    <div>
      <div>This is the wrapper that contains the consistent stuff</div>
      <Header />
      <SidePanel />
    </div>
  );
};
