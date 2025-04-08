const Contact = () => {
 return <div className="container">
        <div className="row mt-5">
            <div className="col-sm-6 mt-5">
                <div className="ms-5 ps-5 mt-5 pt-5">
                    <span className="h1 mt-5">Contact</span>
                    <p>Looking forward to hearing from you</p>
                    <div className="h5 mt-4">Phone</div>
                    <span>01234567</span>
                    <div className="h5 mt-4">Email</div>
                    <span>me@mysite.com</span>
                </div>
            </div>
            <div className="col-sm-6 float-start mt-1 ps-5 pt-5 pe-5">
                <form className="mt-3 pt-5">
                    <div className="row pt-5">
                        <div className="col-sm-6 pe-2">
                            <label className="">FirstName:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-sm-6">
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
                        <div className="col">
                            <label>Message:</label>
                            <textarea type="text" className="textarea form-control" rows={4} cols={100}></textarea>
                        </div>
                        <div className="row">
                        <div className="col-sm d-grid">
                        <button type="button" class="btn btn-warning ms-4 mt-4 btn-block">Submit</button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default Contact