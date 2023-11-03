import { useState,} from 'react';
import { Navigate, Link, useNavigate, } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState();


  const navigate = useNavigate ();
  const handleChang =(e) =>{
    setStudent({ ...student, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData ={
      name:student.name,
      email:student.email,
      phone:student.phone,
      birthday:student.birthday,
      photo:student.photo,
      section:student.section,
      marjor:student.major,
      admissionYear:student.admissionYear,
    };
    fetch("http://localhost:8000/student",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:json.stringify(studentData)
    }).then(
      (res) =>{
        alert("Save successfully")
        Navigate("/")
      } 
    ).catch((err)=> {
      console.log(err);
    })

  }
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
                  <div className="col-lg-12">
                    <div className="from-grop">
                      <button className='btn btn-success' type='submit'>
                        save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        back
                      </Link>
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


export default AddStudent
