import { GiPill } from "react-icons/gi";

export default function Loading() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <GiPill className='animate-spin h-20 w-20 text-success' />
    </div>
  );
}
