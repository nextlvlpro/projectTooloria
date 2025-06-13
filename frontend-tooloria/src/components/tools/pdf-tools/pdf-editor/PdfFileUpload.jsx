"use client"
import React, { useState } from 'react'
import axios from 'axios'

export default function PdfFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
const [htmlFile, setHtmlFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('pdf', selectedFile)

    axios.post('http://9.141.72.57/convert', formData)
      .then(response => {
        console.log(response.data)
        setHtmlFile(response.data)
    })
      .catch(error => console.error(error))
  }

  return (
    <>
    <form onSubmit={handleFileUpload} className="flex flex-col items-center">
      <input type="file" accept=".pdf" onChange={handleFileChange} className="border-2 border-gray-300 rounded-md p-2 mb-4" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload
      </button>
    </form>
    {htmlFile && (
        <div dangerouslySetInnerHTML={{ __html: htmlFile }}></div>
      )}
    </>
  )
}
