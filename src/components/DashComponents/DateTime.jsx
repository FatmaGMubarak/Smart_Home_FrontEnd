import { useState, useEffect } from "react";
export default function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        setCurrentDate(new Date());
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 60000);
  
    try {
      setCurrentDate(new Date());
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  
    return () => clearInterval(intervalId);
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const displayTodaysDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", { month: "short" })} ${currentDate.getFullYear()}`;
  const displayDayName = currentDate.toDateString().split(" ")[0];
  const hours = currentDate.getHours() % 12 || 12;
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
  const displayTime = `${hours}:${minutes} ${ampm}`;

  return (
    <>
      <div>
        <p>{displayTodaysDate}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>{displayDayName} | {displayTime}</p>
      </div>
    </>
  );
}
