import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendarr() {
    const [value, onChange] = useState(new Date());

    return (
        <main className="shadow-lg border-none">
            <Calendar onChange={onChange} showWeekNumbers={true} value={value} />
        </main>

    );
}
