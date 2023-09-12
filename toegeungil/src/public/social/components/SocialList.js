import React, { useState } from 'react';
import axios from 'axios';

function SocialList() {
    const [data, setData] = useState(null);
    const socials = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8001/socials',
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div>
                <button onClick={socials}>불러오기</button>
            </div>

            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
}

export default SocialList;