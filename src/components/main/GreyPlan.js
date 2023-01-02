import { Fragment } from 'react';
import classes from './mainstyles.module.css';
import Button from '../../store/Button';

const GreyPlan = props => {

  const changeHeaderHandler = el => {
    el.preventDefault()
  }
  
  return  <Fragment>
          <li className={classes["greyPlanItem"]}>
      <div className={classes["item-album__container"]}>
          <img src={props.image} alt={props.text} />
      </div>
     <div>
      <h3>{props.title}</h3>
     <Button onClick = {changeHeaderHandler}> YES!</Button>
     </div>
  </li>
    </Fragment>
   
 
}

export default GreyPlan;