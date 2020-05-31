import React from 'react';
import Wrapper from './Wrapper'
import AddConv from '../Components/AddConv'
class AddCode extends React.Component {
    render() {

        return (
            <Wrapper>
                <div className="formularz">
                    <div className="AdminPanel">
                        <AddConv />
                    </div>
                </div >
            </Wrapper >
        )
    }
} export default AddCode;