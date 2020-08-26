import React, {useEffect, useState} from 'react';
import axios from 'axios';

function DisplayShoes(props){
    const[shoes, setShoes] = useState([]);

    useEffect(()=>{
        getShoes();
    }, []);

    async function getShoes(){
        let res = await axios.get(`http://localhost:9033/shoes`);
        console.log(res.data);
        setShoes(res.data);
    }

    return(
        <React.Fragment>
            <br/><br/>
            <div className="container displayShoes">
                <div className="row">
                <table className="table">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoes.map(
                                    (r) =>
                                        <tr key={r.shoeId}>
                                            <td>
                                                {r.shoeBrand.shoeBrandName}
                                            </td>
                                            <td>
                                                {r.shoeColor}
                                            </td>
                                            <td>
                                                {r.shoeName}
                                            </td>
                                            <td>
                                                {r.shoeSize}
                                            </td>
                                        </tr>
                                )}
                            </tbody>
                        </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DisplayShoes;