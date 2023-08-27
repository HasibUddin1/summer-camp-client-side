import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/images/login-form-image.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import useTitle from '../../hooks/useTitle';


const Login = () => {

    useTitle('Login')

    const { register, handleSubmit } = useForm();

    const { googleLogin, signIn } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onSubmit = data => {

        setError('')
        // console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setError("Your credentials do not match")
            })
    };

    const handleGoogleLogin = () => {

        setError('')
        googleLogin()
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                const createdUser = {
                    name: loggedInUser.displayName,
                    email: loggedInUser.email,
                    photo: loggedInUser.photoURL,
                    role: 'student'
                }

                fetch('https://summer-camp-learning-server-side.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(createdUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        // console.log(data)
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="lg:hero-content lg:flex bg-slate-200 rounded-2xl w-full shadow-2xl">
                    <div className="text-center lg:text-left lg:w-1/2 mx-5 lg:mx-0 mt-5 lg:mt-0">
                        <img className='rounded-2xl' src={loginImage} alt="" />
                    </div>
                    <div className="lg:w-1/2">
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
                                        <Link to='/register' className="label-text-alt link link-hover">New to this site?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className='btn btn-primary bg-slate-800 border-none' type="submit" value="Login" />
                                    <div className='divider'></div>
                                </div>
                            </form>
                            <div className='text-center'>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                    G
                                </button>
                            </div>
                            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;