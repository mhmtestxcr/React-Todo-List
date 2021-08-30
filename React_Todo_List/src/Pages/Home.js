
import AppBackgroundimg from '../../my-app/src/AppBackgroundimg';
// import HeaderComponent from '../HeaderCompanent';
import {useTranslation} from "react-i18next";


 function Home() {

    const {t, i18n} = useTranslation('header');
    
    return (
   
        <div> 
            <AppBackgroundimg/> 

            <h1 className="home-p-1">{t("welcome.title", {framework:"React"})}</h1>
            <h1 className="home-p-2">To</h1>
            <h1 className="home-p-3">Todo-List</h1>
         
        </div>
    )
}

export default Home;