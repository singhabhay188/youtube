import React from 'react';

const VideoLoader = () => {
  return (
    <div className="rounded-lg overflow-hidden w-full max-w-[450px] mx-auto bg-gray-200 animate-pulse">
        <div className="h-40 bg-gray-300"></div>
        <div className="p-2">
          <div className="h-4 bg-gray-300 rounded mb-2 line-clamp-2"></div> {/* Title placeholder */}
          <div className="items-center flex justify-between">
            <div className="flex items-center gap-4">
              <div className='w-[50px] h-[50px] rounded-full bg-gray-300'></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div> {/* Channel title placeholder */}
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div> {/* Views & time placeholder */}
          </div>
        </div>
      </div>
  )
};

export default VideoLoader;