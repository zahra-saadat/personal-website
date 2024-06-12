import photo from "./images/photo.jpeg"

const Home = () => {
 return <div className="container-fluid">
    <div className="row mt-5">
        <div className="col-sm-6 pt-3">
            <img src={photo} alt="this is" className="float-end pt-5"></img>
        </div>
        <div className="col-sm-6 pt-5 mt-5">
            <div className="mt-5 pt-5 pb-0">
                <span className="display-2 pt-5">Hello</span>
                <p className="w-50">A Bit About Me
                I'm a paragraph. 
                Click here to add your own text and edit me. 
                I’m a great place for you to tell a story 
                and let your users know a little more about you.</p>
            </div>
            <div className="btn-group btn-group-lg pb-0">
                <button type="button" className="btn btn-warning">Resume</button>
                <button type="button" className="btn btn-warning">Projects</button>
                <button type="button" className="btn btn-warning">Contact</button>
                
            </div>
        </div>
    </div>
</div>
}
export default Home