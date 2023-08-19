"use client"

interface ErrorProps {
  error: {
    message: string;
    // Add other properties of the error object if applicable
  };
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
  return (
      <div>
        This is error {error.message}
        <button onClick={()=>reset()}></button>
      </div>
  )

}