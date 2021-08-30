import React,{useState} from 'react'
import AppBackgroundimg from '../../my-app/src/AppBackgroundimg';
import StarsIcon from '@material-ui/icons/Stars';
import Input from '@material-ui/core/Input';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const THIRD_STATE =[ 

    {id:1, content:"esatback" ,isContent:false},
    {id:2, content:"eatbacak", isContent:false }
]

 function Favorite() {

    const [favori,setFavori] = useState(THIRD_STATE);
    const [newfavori,setNewFavori] = useState("");


    return (

        <div>

            <AppBackgroundimg/> 
            <h1 className="content-kategory" >Favorite</h1>  
            <ul>
                {favori.map(eleman => (<li id="category-li"  key={eleman.id}   >{eleman.content}<StarsIcon  onClick={()=> {setFavori(favori.map(e => e.id === eleman.id ? {...e,isContent: !e.isContent}: e))}} className={eleman.isContent ? "category-li-favori" : ""} id="star-border-icon" /></li>))}
                {/* className="star-border-icon" */}

               
            </ul>
            <Input  value={newfavori} onChange={(event) =>  setNewFavori(event.target.value)}  type="text" name="name" placeholder="New Category" className="content-input"/>
             <AddCircleIcon  className="add-content-icon" onClick={()=> {setFavori([...favori,{id:Date.now(),content:newfavori, isContent:false}]);setNewFavori("")}}/>
   
        </div>
    )
}

export default Favorite;
