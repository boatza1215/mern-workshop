import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2"

const FormComponent=()=>{
    const [state,setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const{title,content,author} = state

    //กำหนดค้่่าให้ state
    const inputvalue=name=>event=>{
        // console.log(name, "=",event.target.value)
        setState({...state,[name]:event.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        console.table({title,content,author})
        console.log("API URL = ",process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/create`,{title,content,author})
        // axios.post(`${http://localhost:5500/api/create`)ใช้ได้เหมือนกัน
        .then(response => {
            // alert("บันทึกข้อมูลเรียบร้อย");
            Swal.fire(
                'สำเร็จ!',
                'บันทึกข้อมูลเรียบร้อย!',
                'success'
              )
              setState({...state,title:"",content:"",author:""})
        })
        .catch(err => {
            //  alert(err.response.data.error)
            Swal.fire(
                'ไม่สำเร็จ!',
                err.response.data.error,
                'error'
              )
        })
    }
    return (
    <div className="container p-5">
        <NavbarComponent></NavbarComponent>
      <h1>เขียนบทความ</h1>
      <form onSubmit={submitForm}>
          <div className="form-group">
              <label>ชื่อบทความ</label>
              <input type="text" className="form-control" placeholder="กรุณากรอกชื่อบทความ" value={title} onChange={inputvalue("title")}></input>
          </div>
          <div className="form-group">
              <label>รายละเอียดบทความ</label>
              <textarea className="form-control" placeholder="กรุณากรอกรายละเอียดบทความ" value={content} onChange={inputvalue("content")}></textarea>
          </div>
          <div className="form-group">
              <label>ผู้เขียน</label>
              <input type="text" className="form-control" placeholder="กรุณากรอกชื่อบทความ" value={author} onChange={inputvalue("author")}></input>
          </div>
         <input type="submit" value="บันทึก" name="" className="btn btn-primary m-2"></input>
         {/* <a className="btn btn-success" href="/">หน้าแรก</a> */}
      </form>
    </div>
    );
}

export default FormComponent;