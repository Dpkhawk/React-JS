export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
export default function Practise (){
    return(<>
    {recipes.map(e=><><h1>{e.name}</h1><ul>{e.ingredients.map(el=><li keys={e.id}>{el}</li>)}</ul></>)}


    {/* <ul>{recipes.map(e=>e.ingredients.map(el=><li>{el}</li>))}</ul> */}
    </>)
} 