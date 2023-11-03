import { useState, useEffect } from 'react';
import { Navigate, Link,useParams } from 'react-router-dom';

const navigate = useNavigate();
useEffect(() => {
  fetch("http://localhost:8000/student/"+id)
  .then((res) => res.json())
  .then((data) =>{
    setStudent(data);
  })
  .catch((err) => {
    console.log(err);
  });
}, [id]);
const handleChang = (e) => {
  setStudent({ ...student, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  const studentData = {
    name: student.name,
    email: student.email,
    phone: student.phone,
    birthday: student.birthday,
    photo: student.photo,
    section: student.section,
    marjor: student.major,
    admissionYear: student.admissionYear,
  }}
const EditStudent = () => {
  return (
    <div>
      <div className="row">
        <div className="offset-lg3 col-lg-6">
          <form className='container' action="{handleSubmit}">
            <div className="card">
              <div className="card-title">
                <h2>add new student</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <label htmlFor="admisionYear">Admision Year</label>
                      <input
                        type="number"
                        placeholder='YYYY'
                        min="2000"
                        max="2023"
                        name='admisionYear'
                        id='admisionYear'
                        value={student.admisionYear}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="text"
                        name='email'
                        id='email'
                        value={student.email}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="text"
                        name='phon'
                        id='phon'
                        value={student.phon}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="date"
                        name='birthday'
                        id='birthday'
                        value={student.birthday}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="text"
                        name='photo'
                        id='photo'
                        value={student.photo}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="text"
                        name='section'
                        id='section'
                        value={student.section}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <input
                        type="text"
                        name='major'
                        id='major'
                        value={student.major}
                        onChange={handleChang}
                        className='from-control'
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <label htmlFor="admisionYear">Admision Year</label>
                      <input
                        type="number"
                        placeholder='YYYY'
                        min="2000"
                        max="2023"
                        name='admisionYear'
                        id='admisionYear'
                        value={student.admisionYear}
                        className='from-control'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditStudent