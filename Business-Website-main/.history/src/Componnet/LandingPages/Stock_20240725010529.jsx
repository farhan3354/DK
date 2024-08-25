import React from 'react';

function DoctorProfile() {
  return (
    <div className="container">
      <div className="doctor-info">
        <div className="doctor-image">
          <img src="https://www.oladoc.com/static/media/doctor-default.1a983565.png" alt="Doctor Profile" />
        </div>
        <div className="doctor-details">
          <h2>Prof. Dr. Muhammad Saleem Akhtar</h2>
          <p>Urologist</p>
          <p>MBBS, MS (Urology)</p>
          <div className="doctor-stats">
            <div className="stat">
              <p>Wait Time</p>
              <p>15 - 30 Min</p>
            </div>
            <div className="stat">
              <p>Experience</p>
              <p>34 Years</p>
            </div>
            <div className="stat">
              <p>Satisfied Patients</p>
              <p>98% (92)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="doctor-reviews">
        <h3>Prof. Dr. Muhammad Saleem Akhtar's Reviews (92)</h3>
        <div className="review-rating">
          <div className="rating">
            <p>98%</p>
            <p>Satisfied out of 92 patients</p>
          </div>
          <div className="ratings">
            <div className="rating-bar">
              <p>Doctor Checkup</p>
              <div className="progress-bar" style={{ width: '95%' }}></div>
              <p>95%</p>
            </div>
            <div className="rating-bar">
              <p>Clinic Environment</p>
              <div className="progress-bar" style={{ width: '99%' }}></div>
              <p>99%</p>
            </div>
            <div className="rating-bar">
              <p>Staff Behaviour</p>
              <div className="progress-bar" style={{ width: '99%' }}></div>
              <p>99%</p>
            </div>
          </div>
        </div>
        <div className="review-text">
          <p>"I was very nervous before discussing anything with the doctor but later I feel comfortable when I meet with the doctor.I appreciate it."</p>
          <p>Verified patient: A** ***a  1 month ago</p>
        </div>
      </div>
      <div className="hospital-info">
        <div className="hospital-logo">
          <img src="https://www.oladoc.com/static/media/hospital-logo-default.7d636361.png" alt="Hospital Logo" />
          <p>Doctors Hospital</p>
        </div>
        <div className="hospital-details">
          <div className="detail">
            <p>Fee:</p>
            <p>Rs. 4,000</p>
          </div>
          <div className="detail">
            <p>Address:</p>
            <p>152 A - G/1, Canal Bank, Johar Town.</p>
          </div>
          <div className="detail">
            <p>Available today</p>
            <p>11:00 AM - 01:00 PM</p>
          </div>
          <button className="book-appointment">Book Appointment</button>
          <div className="hospital-extras">
            <div className="extra">
              <img src="https://www.oladoc.com/static/media/customer-support.01381051.svg" alt="Customer Support" />
              <p>Priorty customer support</p>
            </div>
            <div className="extra">
              <img src="https://www.oladoc.com/static/media/secure.4a951f05.svg" alt="Secure" />
              <p>100% secure</p>
            </div>
            <div className="extra">
              <img src="https://www.oladoc.com/static/media/time.599055e5.svg" alt="Time" />
              <p>Book Appointmet in 30 sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;