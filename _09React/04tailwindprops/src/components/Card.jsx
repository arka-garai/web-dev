import React from 'react'

function Card({userName, btnText="Visit Me"}) {
    return (
        <div className="relative h-100 w-75 rounded-md">
            <img
                src="https://i.pinimg.com/736x/f0/04/29/f00429914c53b9362458254f1d71359e.jpg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{userName}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btnText}
                </button>
            </div>
        </div>

    )
}
export  default  Card