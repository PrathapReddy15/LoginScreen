import React, { useState } from "react";
import { fetchCropDetails } from "../../redux/actions/cropActions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar";
import CropCardsList from "../CropCardsList/index";
import "./index.css";
const Home = () => {
  let cropDetails=useSelector(state=>state)
  const [fetch, setFetch] = useState(false);
  const dispatch = useDispatch();
  const fetchData = () => {
    const checkIfCropDataExists = localStorage.getItem("crop_data");
    if (checkIfCropDataExists === null) {
      dispatch(fetchCropDetails());
    } 
    if (cropDetails!==null){
      setFetch(true);
    }
    
  };

  /**if (cropDetails.allCropsDetails.crop_details.length !== 0) {
    return <CropCardsList />;
  } else {
    return <Loader />;
  }**/
  return (
    <>
      <div>
        <div className="fetch">
          <p className="fetch-description">
            Click the beside fetch button to get the crop data
          </p>
          <button className="fetch-button" onClick={fetchData}>
            Fetch
          </button>
        </div>
        {fetch && <CropCardsList />}
      </div>
    </>
  );
};

export default Home;
