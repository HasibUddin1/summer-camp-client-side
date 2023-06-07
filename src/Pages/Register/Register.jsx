import { Link } from 'react-router-dom';
import registerImage from '../../assets/images/images/login-form-image.jpg'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const { register, handleSubmit, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            return
        }
        createUser(data.email, data.password)
            .then(result => {
                const registeredUser = result.user
                console.log(registeredUser)
                updateUserProfile(registeredUser, data.name, data.photo)
                .then(() => {
                    alert('User Profile has been updated')
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
            })
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
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" {...register("name")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" {...register("email")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" placeholder="confirm password" className="input input-bordered" {...register("confirmPassword")} required />
                                        <label className="label">
                                            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className='btn btn-primary bg-slate-800 border-none' type="submit" value="Register" />
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