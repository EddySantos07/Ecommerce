import React, {useState} from 'react'

const ImageContainer = function ({arrayOfFiles}) {
  const defaultThumbnail = "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"

  return (
    <div className="QAimage">
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[0] || defaultThumbnail}
      alt="answer-image-1" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[1] || defaultThumbnail}
      alt="answer-image-2" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[2] || defaultThumbnail}
      alt="answer-image-3" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[3] || defaultThumbnail}
      alt="answer-image-4" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[4] || defaultThumbnail}
      alt="answer-image-5" />

    </div>
  )
}

export default ImageContainer