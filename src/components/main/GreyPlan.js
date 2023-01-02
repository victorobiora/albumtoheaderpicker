import { Fragment, useContext } from 'react';
import classes from './mainstyles.module.css';
import Button from '../../store/Button';
import albumsContext from '../../contexts/albums-context';

const GreyPlan = props => {
  const ctx = useContext(albumsContext)

  const changeHeaderHandler = el => {
    el.preventDefault()
    ctx.newHeaderImageHandler(props.image)
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