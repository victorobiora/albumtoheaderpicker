import { useState } from "react";
import albumsContext from "./albums-context";
import Kendrick from '../store/wp5741903-kendrick-lamar-computer-wallpapers.jpg'
import Kanye from '../store/kanye.jpg';
import Travis from '../store/cactus.jpg';




const albumsReal = [{
   image:  Travis,
   artistName: 'Travis scott', 
   title:'CACTUS JACK',
   id: 'a1'

},
{
    image: Kendrick,
    artistName: 'Kendrick Lamar', 
    title:'To Pimp a Butterfly',
    id: 'a2'

 },
 {
    image: Kanye,
    artistName: 'Kanye west', 
    title:'Graduation',
    id: 'a3'
 }]
const AlbumContext = props => {

const [selAlbum, setSelAlbums] = useState(albumsReal[0].image)

    const alContext = {
         albums: albumsReal,
        selectedAlbum : selAlbum,
        newHeaderImageHandler: (el) =>{
         console.log('here')
           setSelAlbums(el)
        }
    }

    return <albumsContext.Provider value={alContext}>
         {props.children}
    </albumsContext.Provider>
}

export default AlbumContext;