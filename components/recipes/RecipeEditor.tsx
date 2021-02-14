import { Button, MenuItem } from '@material-ui/core';
import { Formik, Form, Field, FieldArray } from 'formik';
import { measurementData, Recipe } from 'lib/types';
import { TextField, Select } from 'formik-material-ui';
import { Alert } from '@material-ui/lab';

interface Props {
  recipe?: Recipe;
  closeButtonFunction: () => void;
}

interface FormRecipe {
  name: string;
  ingredients: {
    name: string;
    amount: number;
    measurement: string;
  }[];
  method: string[];
}

export const RecipeEditor = (props: Props) => {
  let initialValues: FormRecipe = {
    name: '',
    ingredients: [],
    method: [],
  };

  if (props.recipe) {
    initialValues = recipeToFormRecipe(props.recipe);
  }

  return (
    <div>
      <h2>Recipe Editor</h2>
      <Formik<FormRecipe>
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
                      <Field
                        component={TextField}
                        name={`ingredients.${index}.name`}
                        type="input"
                        label="Name"
                      />
                    </div>
                  ))}
                  {formikProps.touched.ingredients &&
                    formikProps.errors.ingredients && (
                      <Alert severity="error">
                        {formikProps.errors.ingredients}
                      </Alert>
                    )}
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

            <h3>Method</h3>
            <FieldArray
              name="method"
              render={(arrayHelper) => (
                <div>
                  {formikProps.values.method.map((method, index) => (
                    <div key={index}>
                      <Field
                        component={TextField}
                        name={`method.${index}`}
                        type="input"
                        label="Method"
                        id="standard-textarea"
                        placeholder="Placeholder"
                        multiline
                      />
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      arrayHelper.push('');
                    }}
                  >
                    Add Method
                  </Button>
                </div>
              )}
            />
            {formikProps.touched.method && formikProps.errors.method && (
              <Alert severity="error">{formikProps.errors.method}</Alert>
            )}
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

function validateRecipe(recipe: FormRecipe) {
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

function recipeToFormRecipe(recipe: Recipe): FormRecipe {
  const formRecipe: FormRecipe = {
    name: recipe.name,
    ingredients: recipe.ingredients.map((ingredient) => ({
      name: ingredient.ingredient.name,
      amount: ingredient.amount,
      measurement: ingredient.measurement.long,
    })),
    method: recipe.method,
  };

  return formRecipe;
}
