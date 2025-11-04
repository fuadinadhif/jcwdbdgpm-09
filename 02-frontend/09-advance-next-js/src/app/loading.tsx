import { LoadingSpinningWheel } from "@/components/loading-spin-wheel";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <LoadingSpinningWheel />
      <span>Please wait...</span>
    </div>
  );
}
