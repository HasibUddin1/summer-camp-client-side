import { Link } from 'react-router-dom';
import registerImage from '../../assets/images/images/login-form-image.jpg'
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)
    };



    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex bg-slate-200 rounded-2xl w-full shadow-2xl">
                        <div className="text-center lg:text-left w-1/2">
                            <img className='rounded-2xl' src={registerImage} alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" {...register("email")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />
                                        <label className="label">
                                            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary bg-slate-800 border-none">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;