

const SingleClass = ({ singleClass }) => {

    console.log(singleClass)
    const { name, image, students } = singleClass

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
            <div className="flex flex-col justify-between">
                <div>
                    <figure><img className="mx-auto rounded-xl w-full h-[300px]" src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <div>
                        <h2 className="card-title font-bold">
                            {name}
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p className="font-semibold">Number of Students : {students}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Most Popular</div>
                        <div className="badge badge-outline">Services</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;