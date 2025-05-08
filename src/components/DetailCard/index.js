"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Tag from "../Tag";


const DetailCard = () => {
    const { data: session } = useSession();
    console.log('session', session);

    return (
        <div className="flex flex-col items-center p-8 bg-[#7f4f33] text-white rounded-md text-sm transition-all duration-300 gap-4">
            <div className="flex">
                <span>User:</span>
                <span>{session?.user?.username ? session?.user?.username : ' -'}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold mb-1">Roller</span>
                <div className="flex flex-wrap gap-1">
                    {session?.user?.roles?.length ? (
                        session.user.roles.map((role, index) => <Tag key={index} role={role} size="sm" />)
                    ) : (
                        <span>-</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
