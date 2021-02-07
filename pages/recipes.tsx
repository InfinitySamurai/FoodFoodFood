import { ContentTitle } from 'components/ContentTitle';
import { ContentWrapper } from 'components/ContentWrapper';
import { MainWrapper } from 'components/MainWrapper';
import { Page } from 'lib/enums';

export default function Recipes() {
  return (
    <div>
      <MainWrapper currentPage={Page.RECIPE}>
        <ContentWrapper>
          <ContentTitle title="Recipes" />
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
}
