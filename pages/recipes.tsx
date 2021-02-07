import { ContentHeader } from 'components/ContentHeader';
import { ContentWrapper } from 'components/ContentWrapper';
import { MainWrapper } from 'components/MainWrapper';
import { Page } from 'lib/enums';

export default function Recipes() {
  return (
    <div>
      <MainWrapper currentPage={Page.RECIPE}>
        <ContentWrapper>
          <ContentHeader title="Recipes" />
          <div>This would be the content</div>
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
}
