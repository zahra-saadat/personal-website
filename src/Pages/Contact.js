const Contact = () => {
 return <div className="container">
        <div className="row mt-5">
            <div className="col-sm-6 mt-5">
                <div className="ms-5 ps-5 mt-5 pt-5">
                    <span className="h2 mt-5">Contact</span>
                    <p>Looking forward to hearing from you</p>
                    <div className="h5 mt-4">Phone</div>
                    <span>01234567</span>
                    <div className="h5 mt-4">Email</div>
                    <span>me@mysite.com</span>
                </div>
            </div>
            <div className="col-sm-6 float-start mt-1 pt-5">
                <form className="mt-3 pt-5">
                    <div className="row pt-5">
                        <div className="col pe-2">
                            <label className="">FirstName:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col">
                            <label>LastName:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col">
                            <label>Email:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col">
                            <label>Subject:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-sm-7">
                            <label>Message:</label>
                            <textarea type="text" className="textarea form-control" rows={4} cols={40}></textarea>
                        </div>
                        <div className="col-sm-5">
                        <button type="button" className="btn btn-warning mt-4 border-50">Submit</button>
                        <div/></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default Contact