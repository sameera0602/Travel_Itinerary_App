import React, { useState } from "react";
import Taskbar from "./Taskbar"; // Import the Taskbar component

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2025-03-27");

  const toggleMode = () => setDarkMode(!darkMode);
  const isDark = darkMode;

  const activities = {
    "2025-03-27": [
      {
        image: "activity1.jpg",
        title: "Senso-ji Temple & Nakamise Shopping Street",
        time: "Morning 8:15 AM",
        pickup: "Pick up from hotel",
      },
      {
        image: "activity2.jpg",
        title: "Tokyo Sky Tree",
        time: "Afternoon 1:00 PM",
        pickup: "Pick up from Hanakimi Street",
      },
      {
        image: "activity3.jpg",
        title: "Kimono Wearing",
        time: "Evening before 8:00 PM",
        pickup: "Pick up from hotel",
      },
    ],
  };

  const dates = [
    { day: "Mon", date: "27" },
    { day: "Tue", date: "28" },
    { day: "Wed", date: "29" },
    { day: "Thu", date: "30" },
    { day: "Fri", date: "31" },
  ];

  const baseCardStyle = {
    backgroundColor: isDark ? "#111" : "#fff",
    borderRadius: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    overflow: "hidden",
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "#000" : "#f5f5f5",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: '"Poppins", sans-serif',
        transition: "0.3s",
      }}
    >
      {/* Add Taskbar Component */}
      <Taskbar /> {/* Inserted Taskbar here */}

      {/* Toggle Button */}
      <button
        onClick={toggleMode}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "8px 12px",
          borderRadius: "20px",
          backgroundColor: isDark ? "#444" : "#aaa",
          color: isDark ? "#fff" : "#000",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isDark ? "Light" : "Dark"} Mode
      </button>

      {/* Welcome Section */}
      <h2 style={{ marginTop: "60px" }}>Hello Chhavi!</h2>
      <p style={{ marginBottom: "20px", fontSize: "16px", color: isDark ? "#ccc" : "#555" }}>
        Ready for the trip?
      </p>

      {/* Trip Card */}
      <div style={{ ...baseCardStyle, borderRadius: "20px", marginBottom: "30px", position: "relative" }}>
        <img
          src="/img/tokyo.jpg"
          alt="Tokyo"
          style={{ width: "100%", height: "250px", objectFit: "cover", filter: isDark ? "brightness(0.7)" : "brightness(0.9)" }}
        />

        {/* Overlay Top Left */}
        <div style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#fff",
        }}>
          <h2 style={{ fontSize: "28px", marginBottom: "5px", fontWeight: "bold" }}>TOKYO</h2>
          <p style={{ fontSize: "14px" }}>27.01.2025 — 02.02.2025</p>
        </div>

        {/* Overlay Bottom */}
        <div style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "500",
        }}>
          <span>8 Days</span>
          <span>4 (2M,2F)</span>
          <span>14 Activities</span>
        </div>
      </div>

      {/* Flight Details */}
      <div
        style={{
          backgroundColor: "#4361EE",
          color: "#fff",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "30px",
        }}
      >
        <h4>Flight Details</h4>
        <p style={{ marginTop: "10px" }}>26.01.2025, 10:50 AM</p>
        <p style={{ marginTop: "5px" }}>DEL (Delhi) ➔ NRT (Narita Tokyo)</p>
      </div>

      {/* Accommodation */}
      <h3 style={{ marginBottom: "10px" }}>Accommodation</h3>
      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          paddingBottom: "10px",
          marginBottom: "30px",
        }}
      >
        {[ 
          {
            img: "/img/hotel1.jpg",
            name: "Shinagawa Prince Hotel",
            checkin: "26 Jan",
            checkout: "28 Jan",
            status: "Confirmed",
            statusColor: "lightgreen",
          },
          {
            img: "/img/hotel2.jpg",
            name: "Mercure Tokyo Hotel",
            checkin: "28 Jan",
            checkout: "30 Jan",
            status: "Pending",
            statusColor: "orange",
          },
        ].map((hotel, idx) => (
          <div key={idx} style={{ ...baseCardStyle, minWidth: "220px" }}>
            <img
              src={hotel.img}
              alt={hotel.name}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>{hotel.name}</p>
              <p style={{ fontSize: "12px", color: isDark ? "#aaa" : "#666" }}>
                Check In: {hotel.checkin} | Check Out: {hotel.checkout}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  color: hotel.statusColor,
                }}
              >
                {hotel.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Activities Section */}
      <h2 style={{ marginBottom: "15px" }}>Activities</h2>

      {/* Day Selector */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
        {dates.map((d) => {
          const fullDate = `2025-03-${d.date}`;
          const isSelected = selectedDate.endsWith(d.date);
          return (
            <button
              key={d.date}
              onClick={() => setSelectedDate(fullDate)}
              style={{
                flex: "none",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: isSelected ? "#4361EE" : isDark ? "#333" : "#eee",
                color: isSelected ? "#fff" : isDark ? "#ccc" : "#333",
                border: "none",
                minWidth: "60px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              <div>{d.day}</div>
              <div>{d.date}</div>
            </button>
          );
        })}
      </div>

      {/* Activities List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "50px" }}>
        {activities[selectedDate]?.length > 0 ? (
          activities[selectedDate].map((act, index) => (
            <div key={index} style={{ ...baseCardStyle, display: "flex" }}>
              <img
                src={`/img/${act.image}`}
                alt={act.title}
                style={{ width: "120px", height: "100%", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ marginBottom: "5px" }}>{act.title}</h3>
                <p style={{ fontSize: "14px", color: isDark ? "#aaa" : "#666" }}>{act.time}</p>
                <p style={{ fontSize: "14px", color: isDark ? "#aaa" : "#666" }}>{act.pickup}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No activities planned for today.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
