import { MainWrapper } from 'components/MainWrapper';
import { Page } from 'lib/enums';

export default function Recipes() {
  return (
    <MainWrapper currentPage={Page.RECIPE}>
      <div>more content here</div>
    </MainWrapper>
  );
}
