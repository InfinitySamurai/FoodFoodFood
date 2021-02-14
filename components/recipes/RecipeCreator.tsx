import { Button, MenuItem } from '@material-ui/core';
import { Formik, Form, Field, FieldArray } from 'formik';
import { measurementData, Recipe } from 'lib/types';
import { TextField, Select } from 'formik-material-ui';

interface Props {
  initialValues?: Recipe;
  closeButtonFunction: () => void;
}

export const RecipeCreator = (props: Props) => {
  const initialValues: Recipe = {
    name: '',
    ingredients: [
      {
        ingredient: { name: 'Ginger' },
        amount: 50,
        measurement: 'TABLESPOON',
      },
    ],
    method: [],
    ...props.initialValues,
  };
  return (
    <div>
      <h2>Recipe Creator</h2>
      <Formik<Recipe>
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
        validate={validateRecipe}
      >
        {(formikProps) => (
          <Form>
            <Field
              component={TextField}
              name="name"
              type="input"
              label="Name"
            />
            <h3>Ingredients</h3>
            <FieldArray
              name="ingredients"
              render={(arrayHelper) => (
                <div>
                  {formikProps.values.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <Field
                        component={TextField}
                        name={`ingredients.${index}.amount`}
                        type="input"
                        label="Amount"
                      />
                      <Field
                        component={Select}
                        name={`ingredients.${index}.measurement`}
                        label="Measurement"
                      >
                        {Object.keys(measurementData).map((key, index) => {
                          return (
                            <MenuItem key={index} value={key}>
                              {measurementData[key].long}
                            </MenuItem>
                          );
                        })}
                      </Field>
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      arrayHelper.push({});
                    }}
                  >
                    Add Ingredient
                  </Button>
                </div>
              )}
            />
            <Button
              color="primary"
              type="submit"
              onClick={formikProps.submitForm}
            >
              Save
            </Button>
            <Button color="secondary" onClick={props.closeButtonFunction}>
              Close
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

function validateRecipe(recipe: Recipe) {
  // TODO fix this type
  const errors: any = {};
  if (!recipe.name) {
    errors.name = 'Required';
  }
  if (recipe.ingredients.length <= 0) {
    errors.ingredients = 'Must have ingredients';
  }
  if (recipe.method.length <= 0) {
    errors.method = 'Must have steps';
  }
  return errors;
}
