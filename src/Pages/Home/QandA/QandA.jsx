import { Fade, Slide } from 'react-awesome-reveal';
import questionsImage from '../../../assets/images/images/q&a-section-image.jpg'

const QandA = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Slide>
                <h1 className="text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto border-slate-800">Q&A</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Frequently Asked Questions</p>
            </Fade>
            <div className='lg:flex items-center gap-10'>
                <div className='lg:w-1/2'>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" readOnly />
                        <div className="collapse-title text-xl font-medium">
                            How can joining a language club benefit me?
                        </div>
                        <div className="collapse-content">
                            <p>Joining a language club can benefit you in several ways. Firstly, it provides a supportive and interactive environment where you can practice your target language with fellow language enthusiasts. This helps improve your speaking and listening skills significantly. Secondly, language clubs often organize cultural events, language exchange programs, and guest speaker sessions, giving you exposure to the culture and customs associated with the language you&apos;re learning. Lastly, being part of a language club allows you to make new friends who share your passion for languages and create a network of like-minded individuals.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What resources are available for language learning at the club?
                        </div>
                        <div className="collapse-content">
                            <p>At our language club, we offer a variety of resources to support your language learning journey. We have a well-stocked library with books, textbooks, and reference materials for different levels and languages. Additionally, we provide access to online language learning platforms and interactive tools to practice reading, writing, listening, and speaking skills. Our club also organizes language workshops and conversation groups led by experienced language instructors, providing hands-on learning opportunities. Moreover, we maintain a collection of language learning apps and software that members can use to supplement their studies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I become a member of the language club?
                        </div>
                        <div className="collapse-content">
                            <p>Becoming a member of our language club is simple! You can start by visiting our website and filling out the membership registration form. The form requires basic information such as your name, contact details, and language preferences. Once you&apos;ve submitted the form, our team will review your application and contact you with further instructions. Membership fees are nominal and help support the club&apos;s activities and resources. Upon becoming a member, you&apos;ll gain access to all club events, resources, and benefits. We welcome language enthusiasts of all levels, so don&apos;t hesitate to join us and embark on your language learning journey!</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img src={questionsImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QandA;