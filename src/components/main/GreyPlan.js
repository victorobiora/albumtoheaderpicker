import { Fragment } from 'react';
import classes from './mainstyles.module.css'

const GreyPlan = props => {
  return  <Fragment>
          <li className={classes["greyPlanItem"]}>
      <div className={classes["item-album__container"]}>
          <img src={props.image} alt={props.text} />
      </div>
     <div>
      <h3>{props.title}</h3>
      <button>YES!</button>
     </div>
  </li>
    </Fragment>
   
 
}

export default GreyPlan;