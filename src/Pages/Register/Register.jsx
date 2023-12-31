import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/images/images/login-form-image.jpg'
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast';

const Register = () => {

    useTitle('Register')

    const { register, handleSubmit, } = useForm();

    const [error, setError] = useState('')

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        if (data.password.length < 6) {
            setError('Password must be 6 characters long')
            return
        }

        if (!/(?=.*\W)/.test(data.password)) {
            setError('Password must contain one special character')
            return
        }

        if (!/(?=.*[A-Z])/.test(data.password)) {
            setError('Password must contain one capital letter')
            return
        }

        if (data.password !== data.confirmPassword) {
            setError('Password did not match')
            return
        }

        setError('')
        createUser(data.email, data.password)
            .then(result => {
                const registeredUser = result.user
                updateUserProfile(registeredUser, data.name, data.photo)
                    .then(() => {
                        toast.success("Successfully created an account")
                        navigate('/')

                        const createdUser = {
                            email: registeredUser.email,
                            name: data.name,
                            photo: data.photo,
                            role: 'student'
                        }

                        fetch('https://summer-camp-learning-server-side.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(createdUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'User has been created successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                    })
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                        setError("Unable to create your account")
                    })
            })
            .catch(error => {
                console.log(error)
                setError("Unable to create your account")
            })
    };



    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="lg:hero-content lg:flex bg-slate-200 rounded-2xl w-full shadow-2xl">
                        <div className="text-center lg:text-left lg:w-1/2 mx-5 lg:mx-0 mt-5 lg:mt-0">
                            <img className='rounded-2xl' src={registerImage} alt="" />
                        </div>
                        <div className="lg:w-1/2">
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
                                {error && <p className='text-red-600 font-bold text-center'>{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;