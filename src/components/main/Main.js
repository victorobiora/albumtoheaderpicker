import classes from './mainstyles.module.css'
import { useContext } from 'react';
import GreyPlan from './GreyPlan';
import albumsContext from '../../contexts/albums-context';


const Main = props => {
    const ctx = useContext(albumsContext);

    const albumsList = ctx.albums.map (el => (
        <GreyPlan title = {el.title} image = {el.image} text = {el.title}
         artistName = {el.artistName} key= {el.id}/>
    ))
    
    
    return  <section className={classes["grey-plans"]}>
   <ul className={classes["greyPlanItems"]}>
       {albumsList}
   </ul>
    </section>
}

export default Main;