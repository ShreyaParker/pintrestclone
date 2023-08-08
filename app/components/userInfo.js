import React from 'react';
import Image from "next/image";

const UserInfo = ({userInfo}) => {


    return (
        <div className={"flex flex-col items-center"}>
            <Image
                     src={userInfo.image}
                   alt='user-image'
                   width={80}
                   height={80}
                     className="rounded-full"
            />
            <h2 className="text-[30px] font-semibold">
                {userInfo.name}
            </h2>
            <h2 className="text-gray-400">
                {userInfo.email}
            </h2>


        </div>
    );
};

export default UserInfo;