'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import VideoLoader from './utils/VideoLoader'


export default function VideoToGifTool() {
    const [videoFile, setVideoFile] = useState(null)
    const [startAction, setStartAction] = useState(false)
    const startActionText = "Convert to GIF"
    const [outputUrl, setOutputUrl] = useState(null)
    const [outputOptions, setOutputOptions] = useState(
        { outputType: 'gif' }
    )


    return (
        <div className="p-4 space-y-4 flex flex-col items-center justify-center border">
            <h1 className="text-xl font-bold">Video to GIF Tool</h1>
            <VideoLoader videoFile={videoFile} setVideoFile={setVideoFile} outputOptions={outputOptions} startAction={startAction} setStartAction={setStartAction} startActionText={startActionText} setOutputUrl={setOutputUrl} />
            {outputUrl && (
                <div className="space-y-2 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold">Generated GIF:</h2>
                    <img src={outputUrl} alt="Generated GIF" className="border rounded" />
                    <a download="generated.gif" href={outputUrl} className=" underline bg-primary px-4 py-2 rounded text-white">
                        Download GIF
                    </a>
                </div>
            )}
        </div>
    )
}
