import { useNavigate } from  'react-router-dom';


const B2BSpec = () => {
    const navigate = useNavigate(); // <-- use hook in component
    return(
        <>
            <h1> <button className="btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button> B2BSpec Project</h1>

            

            <p className="paragraphText portfolioText"></p>

            <div className="individualProjectIMG">

            </div>

        </>
    )
}

export default B2BSpec;