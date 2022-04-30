import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import { useState, useEffect } from "react";
//import {Link} from "react-router-dom";
function App() {
  const [blogs, setBlogs] = useState([]);
  
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then((respone) => {
        setBlogs(respone.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container p-5">
      
      <NavbarComponent />
      {blogs.map((blog,index)=>(
          <div className="row" key={index} style={{borderBottom: '1px solid grey'}}>
              <div className="col pt-3 pb-2">
                <a href={`/blog/${blog.slug}`}>
                  <h2>{blog.title}</h2>
                </a>
                  <p>{blog.content.substring(0,180)}</p>
                  <p className="text-muted">ผู้เขียน:{blog.arthor}, วันที่เผยแพร่ {new Date(blog.createdAt).toLocaleString()}</p>
              </div>
          </div>
      ))
      }
    </div>
  );
}

export default App;
