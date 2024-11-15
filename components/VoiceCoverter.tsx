import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaMicrophone } from "react-icons/fa";

// Extend the Window interface to support webkitSpeechRecognition
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

// Extend the global HTMLElementTagNameMap to recognize <dialog> elements
declare global {
  interface HTMLElementTagNameMap {
    'dialog': HTMLDialogElement;
  }
}

const VoiceConverter = () => {

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingComplete, setRecordingComplete] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("Say something");

  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event: any) => {
      const latestResult = event.results[event.results.length - 1];
      const speechToText = latestResult[0].transcript;

      setTranscript(speechToText);
    };

    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  return (
    <>
      <button
        onClick={() => {
          const dialog = document.getElementById('voiceRecorder') as HTMLDialogElement;
          dialog?.showModal();
        }}
        className="flex flex-col items-center"
      >
        <FaMicrophone className='text-2xl' />
        <p className="text-xs">Voice</p>
      </button>

      <dialog id="voiceRecorder" className="modal modal-middle">
        <div className="modal-box !w-11/12 !max-w-[300px] flex justify-center items-center flex-col">
          <FaMicrophone onClick={handleToggleRecording} className={`text-5xl cursor-pointer ${isRecording ? 'text-red-600' : ''}`} />
          {isRecording ? (
            <div className='mt-2 flex gap-1'>
              <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse' />
              <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse' />
              <div className='rounded-full w-4 h-4 bg-red-400 animate-pulse' />
            </div>
          ) : (
            <h1 className='mt-2'>Mic is turned off</h1>
          )}
          <p className="mt-2">{isRecording ? transcript : ''}</p>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default VoiceConverter;
