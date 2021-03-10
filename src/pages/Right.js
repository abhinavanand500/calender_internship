import React from "react";
import Crd from "../components/Crd";
const Right = ({ events }) => {
    if (events !== undefined) {
        const todayDay = events.day;

        const rendered = events.weekdays.map((data, i) => {
            if (data.day === todayDay) {
                return <Crd data={data.lec} key={i} />;
            } else {
                return null;
            }
        });

        return <div>{rendered}</div>;
    } else {
        return <h1>Wait. Your time table is loading</h1>;
    }
};

export default Right;
