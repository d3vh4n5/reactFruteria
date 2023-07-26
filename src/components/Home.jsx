import React from 'react';
import Advertencia from './Advertencia';
import Fetching from './Fetching';

const style = {
    minHeight: '77%',
}


const Home = ()=>{

    return(
        <div style={style}>
            <Advertencia 
                warn={true}
                mensaje={'🚧🏗️ Página en desarrollo.. 🛠️⚙️'}
            ></Advertencia>
            
            <Fetching></Fetching>
        </div>
    )
}

export default Home;