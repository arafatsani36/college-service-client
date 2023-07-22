import { useEffect, useState } from "react";
import CollageInfoCard from "../CollageInfoCard/CollageInfoCard";

const CollageInfo = () => {
    const[collageInfo, setCollageInfo] = useState([])

    useEffect(() => {
        fetch('collage.json')
        .then(res => res.json())
        .then(data => setCollageInfo(data))
    },[])

    return (
        <div className="grid md:grid-cols-3 max-w-7xl mx-auto">
            {
                collageInfo.map(info => <CollageInfoCard key={info.id} info={info}></CollageInfoCard>)
            }
        </div>
    );
};

export default CollageInfo;