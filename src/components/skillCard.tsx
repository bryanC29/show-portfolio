import Image from "next/image";

type SkillCardProps = {
  name: string;
  description: string;
  icon: string;
};

export default function SkillCard({ name, description, icon }: SkillCardProps) {
  return (
    <div className="text-left bg-gray-800 p-4 rounded-md m-2 hover:outline hover:outline-white hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800 max-w-xs">
      <Image src={icon} alt="" width={50} height={50} />
      <p className="font-semibold text-lg mt-2">{name}</p>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
}
