import { useParams } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';
import EditRecipeForm from '../components/EditRecipeForm';
import DeleteRecipeButton from '../components/DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === parseInt(recipeId)));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;