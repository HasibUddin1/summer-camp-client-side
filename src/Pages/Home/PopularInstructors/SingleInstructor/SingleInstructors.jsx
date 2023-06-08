

const SingleInstructors = ({ instructor }) => {
    // console.log(instructor)
    const { name, image, className, students } = instructor
    return (
        <div className="card w-96 bg-slate-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-semibold">Class Name: {className}</p>
                <p className="font-semibold">Number of Students: {students}</p>
                <div className="badge badge-secondary font-bold">Popular</div>
            </div>
            <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default SingleInstructors;