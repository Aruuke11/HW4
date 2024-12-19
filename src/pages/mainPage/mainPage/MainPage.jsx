import React, { useState, useEffect } from 'react';

function MainPage({ user }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (user) {
            setUserInfo(user);
        }
    }, [user]);

    if (!userInfo) {
        return <p>Загружаем...</p>;
    }

    return (
        <h2>
            Добро пожаловать {userInfo.name} {userInfo.lastName}, мы тебя ждали!
        </h2>
    );
}

export default MainPage;

