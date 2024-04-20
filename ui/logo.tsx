import Image from 'next/image';

export default function Logo() {
  return (
    <section
      className="items-center h-0
      flex flex-col justify-center
    "
    >
      <Image
        src="/images/Logo.png"
        alt="logo"
        width={180}
        height={180}
        className="
          shadow-lg
          mb-4
          w-3/4
          max-w-xs
          max-h-20
          overflow-hidden
        "
      />
    </section>
  );
}
