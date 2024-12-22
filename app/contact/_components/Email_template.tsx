import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>New message of: {fullName}!</h1>
    <p>Email: {email}!</p>
    <p>Phone number: {phoneNumber}!</p>
    <p>message: {message}!</p>
  </div>
);
