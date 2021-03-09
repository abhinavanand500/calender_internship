import React from "react";

const Crd = ({ data }) => {
    const rend = data.map((dat) => {
        return (
            <div className='row mt-3'>
                <div className='col-md-3 col-sm-4'>
                    <h3>{dat.timing}</h3>
                </div>
                <div className='col-md-9 col-sm-8'>
                    <div class='card'>
                        <div class='card-body'>
                            <h5 class='card-title'>
                                Subject Code : {dat.subject_code}
                            </h5>
                            <p class='card-text'>
                                Subject : {dat.subject_name}
                            </p>
                            <p class='card-text'>
                                Faculty : {dat.teacher_name}
                            </p>
                            <p class='card-text'>
                                Subject Type: {dat.subject_type}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div>{rend}</div>;
};

export default Crd;
