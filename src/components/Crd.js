import React from "react";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
const Crd = ({ data }) => {
    const upload = () => {
        alert("Hii");
        
    };

    const rend = data.map((dat, i) => {
        return (
            <div className='row mt-3' key={i}>
                <div className='col-md-3 col-sm-4'>
                    <h3>{dat.timing}</h3>
                </div>
                <div className='col-md-9 col-sm-8'>
                    <div
                        className='card'
                        style={{ backgroundColor: "green", color: "white" }}>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Subject Code : {dat.subject_code}
                            </h5>
                            <p className='card-text'>
                                Subject : {dat.subject_name}
                            </p>
                            <p className='card-text'>
                                Faculty : {dat.teacher_name}
                            </p>
                            <p className='card-text'>
                                Subject Type: {dat.subject_type}
                            </p>
                        </div>
                        <AccessAlarm onClick={upload} />
                    </div>
                </div>
            </div>
        );
    });

    return <div>{rend}</div>;
};

export default Crd;
