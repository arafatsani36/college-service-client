import { useEffect, useState } from "react";
import CollageInfoCard from "../CollageInfoCard/CollageInfoCard";

const CollageInfo = () => {
    const[collageInfo, setCollageInfo] = useState([])
    useEffect(() => {
        fetch('collage.json')
        .then(res => res.json())
        .then(data => setCollageInfo(data))
    },[])

    const topData = collageInfo.filter(item => item.ranking <= 3);
    console.log(topData)

    return (
        <div>
            <h2 className="text-lg text-center mt-5 font-semibold">Top Ranking College</h2>

            <div className="grid md:grid-cols-3 max-w-7xl mx-auto mt-5">

            {
                topData.map(info => <CollageInfoCard key={info.id} info={info}></CollageInfoCard>)
            }
            </div>
        </div>
        
    );
};

export default CollageInfo;