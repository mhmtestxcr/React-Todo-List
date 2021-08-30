import React,{useState} from 'react'
import AppBackgroundimg from '../../my-app/src/AppBackgroundimg';
import Input from '@material-ui/core/Input';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



const SECOND_STATE =[ 

    {id:1, content:"esatback" ,isContent:false},
    {id:2, content:"eatbacak", isContent:false }
]




function Category() {

    const [content,setContent] = useState(SECOND_STATE);
    const [newcontent,setNewContent] = useState("");

  
    const handleContentDelete= ({id}) =>{

        setContent(content.filter((eleman)=>eleman.id !== id))
    }
    
    return (
        <div>
            
            <AppBackgroundimg/> 
            <h1 className="content-kategory" >Category</h1>  
            <ul>
                {content.map(eleman => (<li id="category-li"  key={eleman.id}   >{eleman.content}<DeleteForeverIcon onClick={() => handleContentDelete(eleman) }  id="content-delete-icon" /></li>))}
                {/* className="star-border-icon" */}
 
            </ul>
            <Input  value={newcontent} onChange={(event) =>  setNewContent(event.target.value)}  type="text" name="name" placeholder="New Category" className="content-input"/> 
            <AddCircleIcon  className="add-content-icon" onClick={()=> {setContent([...content,{id:Date.now(),content:newcontent, isContent:false}]);setNewContent("")}}/>

        </div>

    )
}

export default Category;

