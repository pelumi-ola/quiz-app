import SignupForm from "@/components/SignupForm";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
        <SignupForm />
      </Suspense>
    </div>
  );
}
