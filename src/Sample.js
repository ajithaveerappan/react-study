import "./Sample.css";
import simage from "./simage.png";
import simage3 from "./simage3.png";

const Sample=()=>{
    return(
        <div className="parent">
            <h4 className="item1">Company Name</h4>
            <div className="child">
                <h5 className="item2">Search</h5>
                <div className="empty"></div>
                <img src={simage} className="image"></img>
            </div>
            <div className="empty2">
            <img src={simage3}  className="imgs"></img>
            </div>
            <div className="zero">
                <h3 className="v>">0</h3>
            </div>
        </div>
        
    );
};
export default Sample;