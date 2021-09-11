import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../constants';
import { fetchMeals } from '../actions/meal'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const history = useHistory();
  const today = new Date();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, []);
  return (
    <main>
      <div className="container">
        <div className="">
          <div className="">
          <h3 className="text-center pt-5">Calories</h3>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-xs" onClick={() =>history.push(ROUTES.ADD_MEAL)}><b>+</b> Add New Meal</button>
            </div>
          
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">No. of calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{today.toDateString()}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
