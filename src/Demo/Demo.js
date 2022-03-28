import "./Demo.css";




const Demo = (props) => {
    const {picture, country_name, capital, currency, population } = props;
    return (
        <div className="parent">
            <img src={picture} className="image"/>
            
            <div className="box1">
                <span className="first">country_name:{country_name}</span>
                <br></br>
                <span className="first">capital:{capital}</span>
                <br></br>
                <span className="first">currency:{currency}</span>
                <br></br>
                <span className="first">population:{population}</span>
               
                <br></br>
                
            </div>

        </div>
    );
};
export default Demo;