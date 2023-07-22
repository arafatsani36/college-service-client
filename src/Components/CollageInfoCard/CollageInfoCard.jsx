
const CollageInfoCard = ({info}) => {
    const{image_url, college_name, admission_dates, events, research_history , sports_categories} = info;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className="card-title">{college_name}</h1>
                <p><span className="secondary-text font-bold  text-base">Admission Dates</span>: {admission_dates}</p>
                <p><span className="secondary-text font-bold  text-base">Research History</span>: {research_history}</p>
                <p><span className="secondary-text font-bold  text-base">Events</span>: {events}</p>
                <p><span className="secondary-text font-bold  text-base">Sports Categories</span>: {sports_categories}</p>
                <div className="card-actions justify-center mt-5">
                <button className="btn btn-accent btn-outline">Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CollageInfoCard;