import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  mail,
  phone,
  message,
}) => (
  <div className="">
    <h1>New message of: {mail}!</h1> <br />
    <p>Name: {lastName}</p> <br />
    <p>FirstName: {firstName}</p> <br />
    <p>Phone: {phone}</p> <br />
    <p>Message: {message}</p> <br />
  </div>
);
