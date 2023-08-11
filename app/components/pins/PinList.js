import React from 'react';
import PinItem from "@/app/components/pins/PinItem";

const PinList = ({listOfPins}) => {


    return (
        <div className='mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-6 mx-auto'>
            {listOfPins.map((item)=>(

                <PinItem key={item.id} pin={item} />

            ))}
        </div>
    )
}
export default PinList;