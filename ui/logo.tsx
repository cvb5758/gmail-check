import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/Logo_120x120.png"
        alt="logo"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
  );
}
