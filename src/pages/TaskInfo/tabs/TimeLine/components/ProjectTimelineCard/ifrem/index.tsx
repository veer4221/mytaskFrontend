import React from 'react'

const YoutubeIfrem = ({ videoURL }: any) => {
    const [isDisplay, setIsDisplay] = React.useState("99%");
    setTimeout(() => setIsDisplay("100%"), 500)

    return (
        <iframe
            height="315"
            allow="fullscreen;"
            width={isDisplay}
            src={`https://www.youtube.com/embed/${((url) => {
                url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
            })(videoURL)}?autoplay=0&mute=0`}
        ></iframe>
    )
}

export default YoutubeIfrem