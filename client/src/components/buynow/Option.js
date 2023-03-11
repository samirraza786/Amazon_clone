import React from 'react';

import './option.scss';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Host = "http://localhost:5000/api";

function Option(props) {
  const productId = props.productId;
  const context = useContext(UserContext);
  const { setUser,setProgress } = context;

  const handleDelete = async () => {
    try {
      setProgress(10);
      const res = await axios.delete(`${Host}/products/removecart/${productId}`, {
        headers: {
          token: "bearer " + localStorage.getItem('accessToken'),
        }
      });
      setProgress(60);
      // console.log(res.data);
      // update login user so that its cart get updated
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        setProgress(80);
        // react toastify
        toast.warn('Product deleted successfully!', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
      // react toast
      toast.error('Something Went Wrong!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setProgress(100);
  }
  return (
    <div className="add_remove_select">
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={handleDelete} >Delete</p><p>|</p>
      <p style={{ cursor: "pointer" }} className="forremovemedia">Save Or Later</p><p>|</p>
      <p style={{ cursor: "pointer" }} className="forremovemedia">See More like this</p>
      {/* alert */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default Option
