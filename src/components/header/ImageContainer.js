import {React, Fragment} from "react";
import classes from './headernav.module.css'


const ImageContainer = props => {


    return   <Fragment>
<div className= {classes["imageContainer"]}>
   <div className= {classes["header-image"]} >
    <img src={props.image} alt="CHOOSE GREYSPRING TODAY"/>
    </div>
    <h1>GreySpring Music</h1> 
</div>
    </Fragment>   

}

export default ImageContainer;