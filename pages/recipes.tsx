import { Button } from '@material-ui/core';
import { MainWrapper } from 'components/MainWrapper';
import { RecipeCreator } from 'components/recipes/RecipeCreator';
import { RecipeViewer } from 'components/recipes/RecipeViewer';
import { Page } from 'lib/enums';
import { useState } from 'react';

export default function Recipes() {
  const [addRecipe, setAddRecipe] = useState(false);

  const openRecipeCreator = () => {
    setAddRecipe(true);
  };
  const closeRecipeCreator = () => {
    setAddRecipe(false);
  };

  return (
    <MainWrapper currentPage={Page.RECIPES}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1>Recipes</h1>
        {!addRecipe && (
          <Button color="primary" onClick={openRecipeCreator}>
            Add Recipe
          </Button>
        )}
      </div>

      {addRecipe && <RecipeCreator closeButtonFunction={closeRecipeCreator} />}
      {!addRecipe && <RecipeViewer recipes={[]} />}
    </MainWrapper>
  );
}
