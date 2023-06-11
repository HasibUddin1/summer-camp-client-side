import logo from '../../assets/images/logos/pngwing.com.png'

const Footer = () => {

    // TODO: Making footer is left
    return (
        <footer className="footer p-10 bg-slate-800 text-white">
            <div>
                <div className='flex items-center'>
                    <img className='w-[80px] h-[80px]' src={logo} alt="" />
                    <p className='font-bold text-xl'>Language Club</p>
                </div>
                <p>Language Club<br />Providing reliable services since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;