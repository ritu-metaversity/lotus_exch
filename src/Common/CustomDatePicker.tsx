import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [show, setShow] = useState(false);

  const toggleDatePicker = () => setShow(!show);

  return (
    <div className="date-picker-container">
      <button onClick={toggleDatePicker} className="open-picker-btn">Date Range</button>
      {show && (
        <div className="date-picker-popup">
          <div className="date-picker-header">
            <h2>Date Range</h2>
            <button className="close-btn" onClick={toggleDatePicker}>X</button>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={36}
            calendarClassName="custom-calendar"
          />
          <div className="date-picker-footer">
            <div className="quick-select-buttons">
              <button>Today</button>
              <button>3 days</button>
              <button>7 days</button>
            </div>
            <div className="selected-date">
              {startDate ? `${startDate.toLocaleDateString()} - ${endDate ? endDate.toLocaleDateString() : ''}` : 'No date selected'}
            </div>
            <button className="apply-btn">Apply</button>
            <button className="clear-dates-btn" onClick={() => { setStartDate(null); setEndDate(null); }}>Clear Dates</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
