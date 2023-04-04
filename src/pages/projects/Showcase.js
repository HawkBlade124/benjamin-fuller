import { useNavigate } from  'react-router-dom';


const Showcase = () => {
    const navigate = useNavigate(); // <-- use hook in component
    return(
        <>
            <h1> <button className="btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button>Showcase Project</h1>

            

            <p className="paragraphText portfolioText">Showcase international is a company where they sell shipping containers of stuff instead of just single items. At XOLogic, we signed them up and made a bunch of customizations. They were an ongoing project and they are super custom from XOlogic's product. This client features a login page along with a catalog, about page, slideshow, and responsive design.</p>

            <div className="individualProjectIMG">

            </div>

        </>
    )
}

export default Showcase;