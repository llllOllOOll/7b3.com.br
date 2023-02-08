
export default function Video({ channelID }:{channelID:string}) {
  return (
    <div className="relative h-0 pb-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed?listType=playlist&list=${channelID}`}
      ></iframe>
    </div>
  );
}
