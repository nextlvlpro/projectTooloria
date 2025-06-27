import { useState } from 'react'
import FfmpegLoader from './FfmpegLoader'

export default function VideoLoader({ videoFile, setVideoFile, outputOptions, startAction, setStartAction, startActionText, setOutputUrl}) {
  const handleVideoChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
      
    }
  }
    
    return (
        <>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            {videoFile && <FfmpegLoader file={videoFile} setOutputUrl={setOutputUrl} outputOptions={outputOptions} startAction={startAction} setStartAction={setStartAction} startActionText={startActionText} />}
            {videoFile && <button onClick={() => setStartAction(true)} className={`bg-primary text-white px-4 py-2 rounded ${startAction ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={startAction}>{startAction ? <span className="  rounded-full" >Working...</span> : startActionText}</button>}
        </>
    )
}
