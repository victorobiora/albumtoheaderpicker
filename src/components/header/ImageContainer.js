import {React, Fragment} from "react";
import classes from './headernav.module.css'
import KendrickHeader from '../../store/wp5741903-kendrick-lamar-computer-wallpapers.jpg'

const ImageContainer = props => {
    return   <Fragment>
<div className= {classes["imageContainer"]}>
   <div className= {classes["header-image"]} >
    <img src={KendrickHeader} alt="CHOOSE GREYSPRING TODAY"/>
    </div>
    <h1>GreySpring Music</h1> 
</div>
    </Fragment>   

}

export default ImageContainer;