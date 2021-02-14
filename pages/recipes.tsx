import { Button } from 'components/Button';
import { ContentHeader } from 'components/ContentHeader';
import { ContentWrapper } from 'components/ContentWrapper';
import { MainWrapper } from 'components/MainWrapper';
import { Page } from 'lib/enums';

export default function Recipes() {
  return (
    <MainWrapper currentPage={Page.RECIPE}>
      <ContentWrapper>
        <ContentHeader title="Recipes" />
        <div>
          <Button text="New Recipe" />
        </div>
        <div>more content here</div>
      </ContentWrapper>
    </MainWrapper>
  );
}
