import React, {useState, useEffect}from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../constants';

const AddMeal = () => {
    const [mealInfo, setmealInfo] = useState({ description: '', noOfCal: '' });
    const history = useHistory();

    useEffect(() => {
     
    }, []);
    
    const handleInput = (value, field) => {
      setmealInfo(mealInfo => ({ ...mealInfo, [field]: value }));
    }
  
    const addMeal = () => {
  
    }
    // date, text, and num of calories.
  return (
    <div>
<div className="container">
<           div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline-secondary" onClick={() =>history.push(ROUTES.MAIN)}>back</button>
            </div>
    <div id="login-row" className="row justify-content-center align-items-center">
        <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                    <h3 className="text-center text-info">Add Meal</h3>
                    <div className="form-group">
                        <label htmlFor="description" className="text-info">Description:</label><br/>
                        <textarea type="text" name="description" id="description" className="form-control"
                        value={mealInfo.description}
                        onChange={(e) => handleInput(e.target.value, "description")}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noOfCal" className="text-info">No. of Calories:</label><br/>
                        <input type="number" name="noOfCal" id="noOfCal" className="form-control"
                        value={mealInfo.noOfCal}
                        onChange={(e) => handleInput(e.target.value, "noOfCal")}
                        />
                    </div>
                    <div className="form-group">
                        <input style={{width: '100%'}} type="button" onClick={addMeal} name="submit" className="btn btn-info btn-md" value="submit"/>
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
</div>  </div>
  );
}

export default AddMeal;
