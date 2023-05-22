import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  
  background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,242,105,0.8463760504201681) 35%, rgba(0,212,255,1) 100%);
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
 margin: 3px;
  background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,73,67,0.8463760504201681) 0%, rgba(0,212,255,1) 100%);
  
  `;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  cursor: pointer
`;

export const Input = styled.input`
  width: 95%;
  height: 42px;
  outline: none;
  margin: 2px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  background: transparent;
  color : white;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(255, 255, 255);
  }
`;

export const SubmitButton = styled.button`
  width: 95%;
  padding: 11px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(5,89,147,0.9668242296918768) 0%, rgba(2,0,36,1) 99%);

  &:hover {
    filter: brightness(1.2);
  }
  @media (max-width : 400px) {
   margin-right: 1.2em;
   width: 85%;
    left: -2%;
   
  }
  @media (max-width : 600px) {
    margin-right: 1em;
    left: -2%;
    width: 85%;
   
  }
  @media (max-width : 840px) {
    margin-right: 1em;
    left: -2%;
    width: 85%;
    margin-top: 0.5em;
   
  }
`;
