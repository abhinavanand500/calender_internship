import React from "react";
import Crd from "../components/Crd";
const Right = ({ events }) => {
    if (events != undefined) {
        console.log("Hii byee ee");
        const todayDay = events.day;

        const rendered = events.weekdays.map((data) => {
            if (data.day == todayDay) {
                return <Crd data={data.lec} />;
            }
        });

        return <div>{rendered}</div>;
    } else {
        return <h1>Wait. Your time table is loading</h1>;
    }
};

export default Right;
