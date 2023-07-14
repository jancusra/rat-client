import { useParams } from 'react-router-dom';
import RatCommonDetail from 'ratComponents/RatCommonDetail';

function Detail() {
    const params = useParams();

    return (
        <RatCommonDetail 
            entityName="Log" 
            entityId={params.id}
        />
    );
}

export default Detail;