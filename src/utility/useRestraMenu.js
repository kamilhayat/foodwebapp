import { useEffect, useState } from 'react';

const useRestraMenu = (resid) => {
    const [resInfo, setResInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const menufetch = async () => {
            try {
                const data = await fetch(
                    `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5545573&lng=77.2969011&restaurantId=${resid}`
                );
                const json = await data.json();
                setResInfo(json.data);
            } catch (err) {
                console.error("Error fetching menu", err);
            } finally {
                setLoading(false);
            }
        };

        menufetch();
    }, [resid]);

    return { resInfo, loading };
};

export default useRestraMenu;
