import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../constants';
import { fetchMeals, fetchSelectedMeal, removeMeal } from '../actions/meal'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
  const history = useHistory();
  const today = new Date();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const meals = useSelector(state => state.meal.meals);
  console.log(state)

  useEffect(() => {
    dispatch(fetchMeals(history));
  }, []);

  const addorEditMeal = (meal) => {
    dispatch(fetchSelectedMeal(meal));
    history.push(ROUTES.ADD_MEAL);
  }

  const deleteRow = (id) => {
      const res = window.confirm('Are you sure');
      if(res){
        dispatch(removeMeal(id));
      }
  }

// _id: null,
// description: '',
// noOfCal: '',
// created_on: '',
// color: ''
  return (
    <main>
      <div className="container">
        <div className="">
          <div className="">
          <h3 className="text-center pt-5">Calories</h3>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-xs" onClick={() => addorEditMeal(null)}><b>+</b> Add New Meal</button>
            </div>
          
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">No. of calories</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  meals?.map((ele, i) => {
                  return (<tr key={ele._id} style={{color: ele.color === 'red' ? 'red' : 'green' }}>
                    <th scope="row">{i+1}</th>
                    <td >{ele?.created_on}</td>
                    <td>{ele?.description}</td>
                    <td>{ele?.noOfCal}</td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary btn-xs" onClick={() => addorEditMeal(ele)}>Edit</button>
                        <button className="btn btn-primary btn-xs" onClick={() => deleteRow(ele._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>)
                  })
                }
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
