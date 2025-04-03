const CuisineList = () => {
    return (
        <div>
            <label className="list-label"> Some of my favorite cuisines </label>
            <ul className="w-full text-left list-disc mb-5">
                <li>Japanese</li>
                <li>Cambodian</li>
                <li>Italian</li>
                <li>Chinese</li>
                <li>Mexican</li>
                <li>Korean</li>
                <li>Thai</li>
            </ul>
            <label className="list-label"> Some cuisines I want to try more </label>
            <ul className="w-full text-left list-disc mb-5">
                <li>Indian</li>
                <li>Greek</li>
                <li>French</li>
                <li>Brazilian</li>
                <li>Mediterranean</li>
            </ul>
        </div>
    );
};

export default CuisineList;