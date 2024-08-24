import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RatLocales from 'ratContexts/RatLocales';

function RatCommonDetail(props) {
    const [detailData, setDetailData] = useState([]);
    const locales = useContext(RatLocales);

    function getDetailData() {
        axios.post("/entity/getentity/", { id: props.entityId, entityName: props.entityName })
            .then(function (response) {
                setDetailData(response.data);
        });
    }

    useEffect(() => {
        getDetailData();
    }, [])

    return (
        <table className='table-detail'>
            <tbody>
                {detailData.map((detailEntry) => {
                    if (detailEntry.name != "Id")
                        return (
                            <tr key={detailEntry.name}>
                                <td className="detail-name">{locales[detailEntry.name]}:</td>
                                {detailEntry.selectOptions != null && Object.keys(detailEntry.selectOptions).length > 0 
                                    ? <td>{detailEntry.selectOptions[detailEntry.value]}</td>
                                    : <td>{detailEntry.value}</td>}
                            </tr>
                        );
                    return null
                })}
            </tbody>
        </table>
    );
}

export default RatCommonDetail;
