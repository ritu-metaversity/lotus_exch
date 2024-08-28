import React, { useState } from 'react';
import './style.scss'

const CustomDateRangePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = (event, dateType) => {
    const { value } = event.target;
    if (dateType === 'start') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    
    let daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(
        <div key={i} className="calendar-day" onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }
    return daysArray;
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().substring(0, 10);
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate('');
    } else if (startDate && !endDate) {
      setEndDate(selectedDate);
      setShowCalendar(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start Date"
        value={startDate}
        onFocus={() => setShowCalendar(true)}
        onChange={(e) => handleDateChange(e, 'start')}
      />
      <input
        type="text"
        placeholder="End Date"
        value={endDate}
        onFocus={() => setShowCalendar(true)}
        onChange={(e) => handleDateChange(e, 'end')}
      />

      {showCalendar && (
        <div className="calendar-container">
          <div className="calendar">
            {generateCalendarDays()}
          </div>
        </div>
      )}

      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          setShowCalendar(false);
          // Apply your logic here
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default CustomDateRangePicker;
