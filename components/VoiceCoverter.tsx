import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaMicrophone } from "react-icons/fa";

const VoiceConverter = () => {

  const [isRecording,setIsRecording] = useState<boolean>(false)
  const [recordingComplete,setRecordingComplete] = useState<boolean>(false)
  const [transcript,setTranscript] = useState<string>("")

  const recognitionRef = useRef<any>(null)

  const startRecording = ()=>{
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

     recognitionRef.current  .onresult = (event:any) => {
      const latestResult = event.results[event.results.length - 1];
      const speechToText = latestResult[0].transcript; 

    setTranscript(speechToText);
  }

  recognitionRef.current.start()
}

useEffect(()=>{
  return ()=>{
    if(recognitionRef.current){
      recognitionRef.current.stop()
    }
  }
},[])


  const stopRecording = ()=>{
    if(recognitionRef.current){
      recognitionRef.current.stop()
      setRecordingComplete(true)
    }
  }

  const handleToggleRecording = ()=>{
    setIsRecording(!isRecording)
    if(!isRecording){
      startRecording()
    }
    else{
      stopRecording()
    }
  }

  
    return (
        <>
          <button 
          onClick={()=>document.getElementById('my_modal_5').showModal()}
           className="flex flex-col items-center">
              <Image 
              height={24} 
              width={24} 
              alt="user" 
              src="/icons/user.svg"/>

              <p className="text-xs">Login</p>

          </button>{/* Open the modal using document.getElementById('ID').showModal() method */}
            
            
          <dialog 
          id="my_modal_5" 
          className="modal modal-bottom sm:modal-middle">

            <div className="modal-box !w-11/12 !max-w-[300px] flex justify-center items-center flex-col">


              <FaMicrophone onClick={handleToggleRecording} className={`text-5xl cursor-pointer ${isRecording? 'text-red-600':''}`}/>
              {isRecording? <div className='mt-2 flex gap-1'>
                  <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse'/>
                  <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse'/>
                  <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse'/>
              </div> : ''}
              <p className="py-4 mt-2">{transcript || 'Say something'}</p>


            </div>
          </dialog>
        </>
    );
};

export default VoiceConverter;