import classes from './AvailableMeals.module.css';
import Card from '..//UI/Card';
import MealItem from './MealItem/MealItem';
//import mealsImage from '../../assets/amala.jpg'; 

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Amala',
        description: 'Nigerian swallow with delicious taste made with yam flour',
        price: 22.99,
      //  image: {mealsImage}, 
    },
    {
        id: 'm2',
        name: 'Jollof Rice',
        description: 'A Nigerian specialty',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Pounded Yam',
        description: 'Nigerian swallow made from yam',
        price: 32.44,
    },
    {
        id: 'm4',
        name: 'Rice and Beans with Chicken',
        description: 'Nigerian delicacy',
        price: 15.99,
    }
]


const AvailableMeals = () => {
   const mealsList = DUMMY_MEALS.map((meal) => (
   <MealItem 
    key= {meal.id} 
   id = {meal.id}
    name ={meal.name} 
    description = {meal.description} 
    price ={ meal.price}/>));
   
    return (
       <section className={classes.meals}>
           <Card>
           <ul>
               {mealsList}
           </ul>
           </Card>
       </section>
   )
    }; 

export default AvailableMeals;