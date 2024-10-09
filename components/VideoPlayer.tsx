import React from 'react'

const VideoPlayer = ({ id }: { id: string }) => {
    return (
        <div className="aspect-video mb-4">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer