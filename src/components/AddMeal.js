import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES, SELECTED_MEAL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { createMeal, updateMeal } from "../actions/meal";

const AddMeal = () => {
  const [mealInfo, setmealInfo] = useState({ ...SELECTED_MEAL });
  const history = useHistory();
  const state = useSelector((state) => state.meal.selected_meal);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setmealInfo(state);
  }, []);

  const handleInput = (value, field) => {
    setmealInfo((mealInfo) => ({ ...mealInfo, [field]: value }));
  };

  const addMeal = () => {
    setSubmitted(true);
    if (mealInfo.description && mealInfo.noOfCal) {
      if (mealInfo._id) {
        dispatch(updateMeal(mealInfo, mealInfo._id, history));
      } else {
        mealInfo.created_on = new Date().toDateString();
        dispatch(createMeal(mealInfo, history));
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => history.push(ROUTES.MAIN)}
          >
            back
          </button>
        </div>
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">{mealInfo._id ? 'Edit' : 'Add'}  Meal</h3>
                <div className="form-group">
                  <label htmlFor="description" className="text-info">
                    Description:
                  </label>
                  <br />
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    className={
                      "form-control" +
                      (submitted && !mealInfo.description ? " is-invalid" : "")
                    }
                    value={mealInfo.description}
                    onChange={(e) => handleInput(e.target.value, "description")}
                  ></textarea>
                  {submitted && !mealInfo.description && (
                    <div className="invalid-feedback">
                      Description is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="noOfCal" className="text-info">
                    No. of Calories:
                  </label>
                  <br />
                  <input
                    type="number"
                    name="noOfCal"
                    id="noOfCal"
                    className={
                      "form-control" +
                      (submitted && !mealInfo.noOfCal ? " is-invalid" : "")
                    }
                    value={mealInfo.noOfCal}
                    onChange={(e) => handleInput(e.target.value, "noOfCal")}
                  />
                  {submitted && !mealInfo.noOfCal && (
                    <div className="invalid-feedback">
                      No. of Calories is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    style={{ width: "100%" }}
                    type="button"
                    onClick={addMeal}
                    name="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMeal;
