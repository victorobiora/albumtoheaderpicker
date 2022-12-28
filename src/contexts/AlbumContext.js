import albumsContext from "./albums-context";

const AlbumContext = props => {

    const alContext = {
        albums: []
    } 
    return <albumsContext.Provider value={alContext}>
         {props.children}
    </albumsContext.Provider>
}

export default AlbumContext;