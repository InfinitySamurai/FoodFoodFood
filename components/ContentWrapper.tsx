import { MenuItem } from './MenuItems';
import { SidePanel } from './SidePanel';

interface IProps {
  children?: React.ReactNode;
}

export const ContentWrapper = (props: IProps) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
      <SidePanel>
        <MenuItem text="Recipes" link="recipes"></MenuItem>
        <MenuItem text="Ingredients" link="ingredients"></MenuItem>
        <MenuItem text="Tags" link="tags"></MenuItem>
      </SidePanel>
      {props.children}
    </div>
  );
};
