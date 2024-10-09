import React from 'react'

const LoaderVideoInfo = () => {
    return (
        <>
            <h1 className="text-2xl font-bold my-4">
                <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
            </h1>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse mr-2"></div>
                    <div>
                        <div className="h-4 bg-gray-300 rounded w-24 animate-pulse mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-16 animate-pulse"></div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="h-8 bg-gray-300 rounded px-4 animate-pulse mr-2"></div>
                    <div className="h-8 bg-gray-300 rounded px-4 animate-pulse"></div>
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="h-3 bg-gray-300 rounded w-32 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">
                    <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
                </h2>
                {/* Add comments section here */}
            </div>

        </>
    )
}

export default LoaderVideoInfo