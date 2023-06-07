import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/images/login-form-image.jpg'

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex bg-slate-200 rounded-2xl w-full shadow-2xl">
                    <div className="text-center lg:text-left w-1/2">
                        <img className='rounded-2xl' src={loginImage} alt="" />
                    </div>
                    <div className="w-1/2">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register'className="label-text-alt link link-hover">New to this site?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-slate-800 border-none">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;