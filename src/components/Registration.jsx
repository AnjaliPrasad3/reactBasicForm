import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
  );
  const [isGuest, setIsGuest] = useState(false);

  const handleCheckboxChange = () => {
    setIsGuest(!isGuest);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const age = parseInt(formData.get('age'));
    const guestName = isGuest ? formData.get('guestName') : '';

    // Validation checks
    if (!name || !email || (isGuest && !guestName)) {
      alert('All fields are required!');
      return;
    }
    if (!validateEmail(email)) {
      alert('Email is not in valid format');
      return;
    }
    if (!age || age <= 0) {
      alert('Age must be a number greater than 0');
      return;
    }

    const newUser = {
      name,
      email,
      age,
      guestName
    };

    setUser([...user, newUser]);
    localStorage.setItem('user', JSON.stringify([...user, newUser]));

    event.target.reset();
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <div className="container" style={{ minHeight: '78vh' }}>
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title">Registration Form</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" required />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" name="age" required />
                  </div>
                  <div className="form-check py-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      checked={isGuest}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Are you bringing a guest?
                    </label>
                  </div>
                  {isGuest && (
                    <div className="form-group">
                      <label>Guest name</label>
                      <input type="text" className="form-control" name="guestName" />
                    </div>
                  )}
                  <div>
                    <button className="btn btn-success form-control mt-4" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <table className="table table-responsive table-bordered border-dark text-center text-capital">
              <thead className="table-dark table-active text-uppercase text-white">
                <tr>
                  <th>SNo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  {isGuest && <th>Guest Name</th>}
                </tr>
              </thead>
              <tbody>
                {user.map((userData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{userData.name}</td>
                    <td>{userData.email}</td>
                    <td>{userData.age}</td>
                    {isGuest && <td>{userData.guestName}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
