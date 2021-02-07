import { Page } from 'lib/enums';
import { MenuItem } from './MenuItems';
import { SidePanel } from './SidePanel';

interface IProps {
  currentPage: Page;
  children?: React.ReactNode;
}

export const MainWrapper = (props: IProps) => {
  const { currentPage } = props;
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
      <SidePanel>
        <MenuItem
          text="Recipes"
          link="recipes"
          selected={currentPage === Page.RECIPE}
        ></MenuItem>
        <MenuItem
          text="Ingredients"
          link="ingredients"
          selected={currentPage === Page.INGREDIENTS}
        ></MenuItem>
        <MenuItem
          text="Tags"
          link="tags"
          selected={currentPage === Page.TAGS}
        ></MenuItem>
      </SidePanel>
      {props.children}
    </div>
  );
};
