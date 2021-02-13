import { ContentHeader } from 'components/ContentHeader';
import { ContentWrapper } from 'components/ContentWrapper';
import { MainWrapper } from 'components/MainWrapper';
import { Page } from 'lib/enums';
import { useRouter } from 'next/router';

export default function Recipe() {
  const router = useRouter();
  const { recipeId } = router.query;
  return (
    <div>
      <MainWrapper currentPage={Page.RECIPE}>
        <ContentWrapper>
          <ContentHeader title={`Recipes`} />
          <h2 className="text-xl">{recipeId}</h2>
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
}
