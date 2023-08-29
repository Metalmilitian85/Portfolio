import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zjvk4ba', 'template_leg03y6', form.current, 'B8EBsqUwNAtvSE1zw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  console.log(sendEmail);

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-7 md:w-[30%] md:mx-auto">
      <input 
        type="text" 
        name="user_name" 
        className="rounded-md border-2 border-[#4bb3f8] mb-5"
        placeholder='Name'
      />
      <input 
        type="email" 
        name="user_email" 
        className="rounded-md border-2 border-[#4bb3f8] mb-5"
        placeholder='Email'
      />
      <textarea 
        name="message" 
        className='h-[200px] rounded-md border-2 border-[#4bb3f8]'
        placeholder='Send me a message!'
      />
      <input type="submit" value="Send" className="font-semibold w-16 mx-auto mt-7 rounded-md bg-sky-300 hover:cursor-pointer hover:border-sky-800 hover:bg-sky-500 border-2 border-sky-600" />
    </form>
  );
};