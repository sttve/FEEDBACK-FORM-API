import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

// npm i @emailjs/browser

const Contact = () =>{
    const { register, handleSubmit } = useForm();

    const onSubmit  = (e) => {
      console.log(e);
    } 
  return (

    <StyledContactForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name")}  placeholder="Your name*" />
        <label>Email</label>
        <input type="email" {...register("email")} name="user_email" placeholder="Your e-mail*" />
        <label>Message</label>
        <textarea name="message" {...register("message")}  placeholder="Your message*" />
        <button type="submit">Send messsage</button>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 15px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 1px solid #DCDCDC;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 1px solid #DCDCDC;
      }
    }
    label {
      margin-top: 1rem;
    }
    button[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

