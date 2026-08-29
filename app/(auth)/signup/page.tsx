import { SignupForm } from "@/components/forms/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

export default function SignupPage() {
  return <SignupForm />;
}
