import { useNavigate } from  'react-router-dom';


const CLG = () => {
    const navigate = useNavigate(); // <-- use hook in component
    return(
        <>
            <h1> <button className="btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button>CLG Project</h1>

            

            <p className="paragraphText portfolioText"></p>

            <div className="individualProjectIMG">

            </div>

        </>
    )
}

export default CLG;