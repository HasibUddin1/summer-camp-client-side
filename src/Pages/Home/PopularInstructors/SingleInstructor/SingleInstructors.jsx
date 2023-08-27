

const SingleInstructors = ({ instructor }) => {
    // console.log(instructor)
    const { name, image, className, students } = instructor
    return (

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 ease-in-out duration-200">
            <div className="h-full w-1/3">
                <img className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                <p className="mb-3 font-normal text-gray-700">Class Name: {className}</p>
                <p className="mb-3 font-normal text-gray-700">Number of Students: {students}</p>
                <div className="badge badge-secondary font-bold">Popular</div>
            </div>
        </div>

    );
};

export default SingleInstructors;

{/* <div className="badge badge-secondary font-bold">Popular</div> */ }