const CuisineList = () => {
        return (
            <div>
                <h3>Some of my favorite cuisines:</h3>
                <ul style={{ listStyleType: 'square' }}>
                    <li style={{ color: '#1e60a3' }}>Japanese</li>
                    <li>Cambodian</li>
                    <li>Italian</li>
                    <li>Chinese</li>
                    <li>Mexican</li>
                    <li>Korean</li>
                    <li>Thai</li>
                </ul>

                <h3>Some cuisines that I want to try more of:</h3>
                <ul style={{ listStyleType: 'square' }}>
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