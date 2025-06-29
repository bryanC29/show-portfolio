type ExperienceCartPropos = {
  name: string;
  description: string;
  tag1: string;
  tag2: string;
};

export default function ExperienceCart({
  name,
  description,
  tag1,
  tag2,
}: ExperienceCartPropos) {
  return (
    <div className="text-left bg-gray-900 max-w-md p-3 rounded-md outline outline-neutral-600 m-2">
      <p className="text-2xl">{name}</p>
      <p className="text-neutral-400 my-2">{description}</p>
      <div className="py-2 flex flex-col md:flex-row">
        <span className="w-full md:w-max text-center md:text-left my-2 md:my-0 py-1 px-2 mr-2 bg-white text-black rounded">
          {tag1}
        </span>
        <span className="w-full md:w-max text-center md:text-left my-2 md:my-0 py-1 px-2 bg-white text-black rounded">
          {tag2}
        </span>
      </div>
    </div>
  );
}
