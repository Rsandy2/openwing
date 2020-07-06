import React from 'react';
import Axios from 'axios';
import { createClient } from 'pexels';


// Axios.get('https://api.pexels.com/v1')
//         .then((res) =>{
//             response = res;
//             console.log(response);
//         })
//         .catch((err) =>{
//             console.log('Error');
//         });
 const client = createClient('563492ad6f917000010000016b5faf330ec243be85721faa86d904e9');
    const query = 'Forest'
    let response = '';

client.photos.search({ query, per_page: 1 }).then(photos => {
    Object.assign(response, photos);
    console.log(photos);
});
class Pexels extends React.Component {
   
    render() {
        return (
            <div>
                Res: <br />
                {this.response}
            </div>
        );
    }
}

export default Pexels;