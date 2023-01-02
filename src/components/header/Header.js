import {React, Fragment, useContext} from "react";
import Nav from './Nav';
import ImageContainer from "./ImageContainer";
import albumsContext from "../../contexts/albums-context";

const Header = props => {

const ctx = useContext(albumsContext);
    console.log(ctx.selectedAlbum)

    return <Fragment>
        <Nav/>
        <ImageContainer image = {ctx.selectedAlbum} />
    </Fragment>
};

export default Header;