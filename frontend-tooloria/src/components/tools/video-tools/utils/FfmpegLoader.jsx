import React, { useEffect, useRef, useState } from 'react'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

export default function FfmpegLoader({ file, setOutputUrl, outputOptions, startAction, setStartAction, startActionText, setFfmpegLoaded }) {
    const [loaded, setLoaded] = useState(false)
    const [converting, setConverting] = useState("")
    const ffmpegRef = useRef(new FFmpeg())
    const messageRef = useRef(null)

    useEffect(() => {
        loadFFmpeg()
    }, [])


    const loadFFmpeg = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current

        ffmpeg.on('log', ({ message }) => {
            messageRef.current.innerText = message
            // console.log(message)
        })

        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        })

        setLoaded(true)
        setFfmpegLoaded(true)
    }

    async function handleStartAction () {
        let actionType = outputOptions.outputType
        if (actionType === 'gif') {
            await convertToGif(file)
            setStartAction(false)
        }
    }

    useEffect(()=> {
       if (startAction) {
        handleStartAction()
       }
    }, [startAction])


    const convertToGif = async (file) => {
        setConverting("started")
        try {
            const ffmpeg = ffmpegRef.current
            const fileName = file.name
            const outputName = 'output.gif'

            await ffmpeg.writeFile(fileName, await fetchFile(file))
            await ffmpeg.exec(['-i', fileName, '-t', '3', '-vf', 'fps=10,scale=320:-1', outputName])
            const data = await ffmpeg.readFile(outputName)

            const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }))
            setOutputUrl(url)
            setConverting("completed")
        } catch (error) {
            console.error(error)
            setConverting("failed")
        }
    }

    return (
        <div className="space-y-2">
            {!loaded && (
                <div>
                    <div className='text-sm text-gray-500'>Loading Converter. This may take a few seconds.</div>
                </div>
            )}
            {converting === "started" && (
                <div>
                    <div className='text-sm text-gray-500'>{startActionText} "{file.name}" </div>
                    <div ref={messageRef} className="text-sm text-gray-500" />
                </div>
            )}
            {converting === "failed" && (
                <div>
                    <div className='text-sm text-gray-500'>Failed to convert "{file.name}"</div>
                </div>
            )}

            {converting === "completed" && (
                <div>
                    <div className='text-sm text-gray-500'>Converted "{file.name}"</div>
                </div>
            )}

        </div>
    )
}
