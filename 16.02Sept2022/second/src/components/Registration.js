import './Registration.css';
const Registration = () =>{
    return(
    <form className='registration_layout'>
            <div className='registration_layout__main'>

                <div>
                    <label>Name</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Age</label>
                    <input type="number"/>
                </div>

                <div>
                    <label>Address</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Username</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>

            </div>

            <div>
                <button type="submmit">Submit</button>
            </div>
        </form>
    )
}
export default Registration;