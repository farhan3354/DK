import React from 'react';

const DoctorProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="doctor-info">
            <img src="https://i.ibb.co/q5z7hS7/doctor-profile.png" alt="doctor" />
            <h2>Prof. Dr. Muhammad Saleem Akhtar</h2>
            <p>Urologist</p>
            <p>MBBS, MS (Urology)</p>
            <div className="doctor-details">
              <div>
                <p>Wait Time</p>
                <p>15 - 30 Min</p>
              </div>
              <div>
                <p>Experience</p>
                <p>34 Years</p>
              </div>
              <div>
                <p>Satisfied Patients</p>
                <p>98% (92)</p>
              </div>
            </div>
            <h3>Prof. Dr. Muhammad Saleem Akhtar's Reviews (92)</h3>
            <div className="reviews">
              <div>
                <p>98%</p>
                <p>Satisfied out of 92 patients</p>
              </div>
              <div>
                <p>Doctor Checkup</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div>
                <p>Clinic Environment</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div>
                <p>Staff Behaviour</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="review-text">
              <p>"I was very nervous before discussing anything with the doctor but later I feel comfortable when I meet with the doctor.I appreciate it."</p>
              <p>Verified patient: A** ***a 1 month ago</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hospital-info">
            <div className="hospital-name">
              <img src="https://i.ibb.co/W2H8p8r/hospital.png" alt="hospital" />
              <h3>Doctors Hospital</h3>
            </div>
            <div className="discount">
              <p>Pay Online & Get 10% OFF</p>
            </div>
            <p>Fee: Rs. 4,000</p>
            <p>Address: 152 A - G/1, Canal Bank, Johar Town.</p>
            <div className="availability">
              <p>Available today</p>
              <p>11:00 AM - 01:00 PM</p>
            </div>
            <button className="btn btn-primary">Book Appointment</button>
            <div className="hospital-details">
              <div>
                <img src="https://i.ibb.co/xJqN17j/phone.png" alt="phone" />
                <p>Priorty customer support</p>
              </div>
              <div>
                <img src="https://i.ibb.co/J2x1g1z/lock.png" alt="lock" />
                <p>100% secure</p>
              </div>
              <div>
                <img src="https://i.ibb.co/r5V7rF9/clock.png" alt="clock" />
                <p>Book Appointmet in 30 sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;