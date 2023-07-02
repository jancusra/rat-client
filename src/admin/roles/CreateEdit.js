import { useParams } from 'react-router-dom';
import RatCommonForm from 'ratComponents/RatCommonForm';

function CreateEdit() {
    const params = useParams();

    return (
        <RatCommonForm 
            entityName="UserRole" 
            entityId={params.id}
        />
    );
}

export default CreateEdit;
