

const Class = ({ singleClass }) => {

    const {name, image, instructorName, availableSeats, price} = singleClass

    const handleSelect = () => {
        console.log('button is clicked')
    }

    return (
        <div className={
            availableSeats === 0 ?
            'card w-96 bg-red-500 shadow-xl rounded-xl text-white' :
            'card w-96 bg-slate-800 shadow-xl rounded-xl text-white'
        }>
            <div className="flex flex-col justify-between">
                <div>
                    <figure><img className="mx-auto rounded-xl w-full h-[300px]" src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <div className="mb-5">
                        <h2 className="card-title font-bold">
                            {name}
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p className="font-semibold">Available Seats : {availableSeats}</p>
                        <p className="font-semibold">Instructor : {instructorName}</p>
                        <p className="font-semibold">Price : ${price}</p>
                    </div>
                    <div className="card-actions justify-end mb-3">
                        <div className="badge badge-outline">Most Popular</div>
                        <div className="badge badge-outline">Services</div>
                    </div>
                    <button onClick={handleSelect} disabled={availableSeats === 0} className={
                        availableSeats === 0 ?
                        'bg-slate-200 text-black font-bold py-2 rounded-xl' :
                        'bg-slate-200 text-black font-bold py-2 rounded-xl hover:bg-slate-400 ease-in-out duration-200'
                    }>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Class;