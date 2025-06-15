import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FaGraduationCap, FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import icons

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Poppins', sans-serif;
            overflow-y: auto;
            height: 100vh;
          }

          .page-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #fff0f5, #ffd1dc, #ffe4e1);
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 60px;
            padding-bottom: 60px;
            position: relative;
            animation: glow 4s ease-in-out infinite alternate;
          }

          @keyframes glow {
            0% { background: linear-gradient(135deg, #fff0f5, #ffd1dc, #ffe4e1); }
            100% { background: linear-gradient(135deg, #ffe4e1, #ffd1dc, #fff0f5); }
          }

          .card {
            max-width: 450px;
            width: 100%;
            background: rgba(255, 255, 255, 0.97);
            border-radius: 24px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 28px rgba(255, 105, 180, 0.4);
          }

          .header .title {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            background: linear-gradient(45deg, #ff69b4, #db7093, #ff8c94);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 16px;
            text-shadow: 0 3px 8px rgba(255, 105, 180, 0.3);
            letter-spacing: 1px;
            animation: shimmer 3s infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

         .header .invitation {
  font-size: 28px;
  color: #4A2C40;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 12px;
  letter-spacing: 0.8px;
  animation: fadeInText 2s ease-in-out;
  font-family: 'Poppins', 'Roboto', 'Arial', sans-serif; /* Thêm font dự phòng */
}

          @keyframes fadeInText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .header .name {
            font-family: 'Playfair Display', serif;
            font-size: 52px;
            color: #db7093;
            font-weight: 700;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(255, 105, 180, 0.2);
          }

          .image-container {
  margin: 32px auto;
  position: relative;
  width: 280px;
  height: 280px; 
  margin-left: auto;
  margin-right: auto;
  overflow: hidden; 
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain; 
  border: 6px solid #ff69b4;
}

          .content {
            margin-bottom: 24px;
          }

          .event-details {
            background: linear-gradient(45deg, #fff5f5, #ffe4e1);
            padding: 18px;
            border-radius: 8px;
            margin: 20px 0;
            border: 2px dashed #ffd1dc;
            box-shadow: 0 3px 10px rgba(255, 105, 180, 0.25);
          }

          .event-details h2 {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: #4A2C40;
            margin-bottom: 12px;
            letter-spacing: 0.8px;
          }

          .event-details p {
            font-size: 17px;
            color: #4A2C40;
            margin: 6px 0;
            font-weight: normal;
            line-height: 1.7;
          }

          .event-details p strong {
            color: #ff69b4;
          }

          .quote {
            font-size: 16px;
            color: #4A2C40;
            font-style: italic;
            padding: 0 16px;
            margin-top: 12px;
            line-height: 1.8;
          }

          .quote-author {
            color: #db7093;
            font-weight: 600;
          }

          .button-container {
            text-align: center;
          }

          .rsvp-button {
            display: inline-block;
            background: linear-gradient(45deg, #ff69b4, #ff8c94);
            color: #4A2C40;
            padding: 14px 40px;
            border-radius: 32px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .rsvp-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(255, 105, 180, 0.6);
          }

          .rsvp-button:active {
            transform: scale(0.95);
            box-shadow: 0 2px 10px rgba(255, 105, 180, 0.3);
          }
        `}
      </style>
      <div className="page-container">
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={windowSize.width <= 768 ? 20 : 30}
          gravity={0.03}
          wind={0.01}
          colors={["#ffb6c1", "#ffe4e1", "#ff69b4", "#ff99cc"]}
        />
        <div className="card">
          <div className="header">
            <h1 className="title">Thiệp Mời Lễ Tốt Nghiệp</h1>
            <p className="invitation">
              Thân mời mọi người đến chung vui cùng Ngọc Hoài!
            </p>
          </div>
          <div className="image-container">
            <img
              src="/hoai1.jpg"
              className="profile-image"
              alt="Nguyễn Thị Hà Anh's profile"
              aria-label="Ảnh đại diện của Nguyễn Thị Hà Anh"
            />
          </div>
          <div className="header">
            <div className="name">Nguyễn Thiện Ngọc Hoài</div>
            <p>Cử nhân ngành Sư Phạm Ngữ Văn</p>
            <p>Đại học Sư Phạm - ĐHĐN</p>
          </div>
          <div className="content">
            <div className="event-details">
              <h2>
                <FaClock /> Thông Tin Lễ Tốt Nghiệp
              </h2>
              <p>
                <FaGraduationCap /> <strong>Thời gian:</strong> 15:00 chiều, Thứ
                Bảy, ngày 21/06/2025
              </p>
              <p>
                <FaMapMarkerAlt /> <strong>Địa điểm:</strong> Sảnh A5, 459 Tôn
                Đức Thắng, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng
              </p>
            </div>
            <p className="quote">
              "Sự hiện diện của bạn trong ngày đặc biệt ấy sẽ là một món quà lớn dành cho Hoài" 
              <br></br> - {" "}
              <span className="quote-author">Nguyễn Thiện Ngọc Hoài</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
