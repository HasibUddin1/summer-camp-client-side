import { Link } from "react-router-dom";
import errorImage from '../../assets/images/images/error-image.jpg'


const ErrorPage = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className='mt-10'>
                <div className='flex justify-center'>
                    <img className='h-[500px]' src={errorImage} alt="" />
                </div>
            </div>
            <h4 className='text-4xl font-bold text-center'>Oops, something went wrong, Error Code: 404</h4>
            <div className='text-center mt-5 mb-5'>
                <Link to='/'><button className='bg-slate-800 hover:bg-slate-600 ease-in-out duration-200 py-4 px-8 rounded-xl text-white font-bold'>Back To Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;