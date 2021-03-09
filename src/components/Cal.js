import React, { useState, useEffect } from "react";
import axios from "../apis/api";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = (props) => {
    const defaultValue = {
        year: 2019,
        month: 10,
        day: 5,
    };
    const [selectedDay, setSelectedDay] = useState(defaultValue);

    useEffect(() => {
        const fetchData = async () => {
            
            const date1 = `${selectedDay.day}`+'/'+`${selectedDay.month}`+'/'+`${selectedDay.year}`
            console.log(date1)
            const result = await axios.get("", {
             
                headers: {
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Content-Type": "Application/Json",
                    "api_key":
                        "da7b0a5b6396da422ef093ce1c59fc0ee8971406b480f02e2d64cf39f42b896e",
                    year: "",
                    class: "",
                    section: "A",
                    semester: 3,
                    stream: "str003",
                    request_date: `${date1}`,
                    school_id: "SCH10100",
                },
            });

            props.setEvent(result);
        };
        fetchData();
    }, [selectedDay]);

    return (
        <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
        />
    );
};

export default Calender;
