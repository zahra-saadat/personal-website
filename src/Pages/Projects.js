import pro from "./images/pro.jpg"

const Projects = () =>{
    return <div className="container">
        <div className="row mt-5 pb-5">
            <div className="col-sm-6 mt-5">
                <div className="ms-5 ps-5 mt-5 pt-5">
                    <span className="h1 mt-5">Projects</span>
                    <div className="mt-5">
                    <span className="h5 pt-5">Project name</span>
                    <p>I'm a paragraph. Click here to add your own text and edit me. 
                        It’s easy. Just click “Edit Text” or 
                        double click me to add your own content and make changes to the font.
                        I’m a great place for you to tell a story and
                        let your users know a little more about you.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mt-5 float-start">
                 <div className="mt-5">
                    <img src={pro} alt="project" className="mt-5 ms-5 ps-5 pt-5" width="450"></img>
                 </div>
            </div>
        </div>
        
    </div>

}
export default Projects