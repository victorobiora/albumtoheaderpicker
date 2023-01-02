import {React, Fragment, useContext} from "react";
import Nav from './Nav';
import ImageContainer from "./ImageContainer";
import albumsContext from "../../contexts/albums-context";

const Header = props => {

    const ctx = useContext(albumsContext);
    console.log(ctx.albums[0])

    return <Fragment>
        <Nav/>
        <ImageContainer />
    </Fragment>
};

export default Header;