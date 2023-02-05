type CardProps = {
  title: string;
  author: string;
  date: string;
  source: string;
  imagePost: string;
  avatar: string;
};

export default function Card({ title, author, date, source, imagePost, avatar }: CardProps) {
  return (
    <div className="w-full space-y-3 rounded-lg bg-gray-100 p-6 shadow-md">
      <div className="h-64 max-w-lg bg-gray-500">
        <img src={imagePost} />
      </div>
      <p>{source}</p>
      <h2 className="text-lg">{title}</h2>
      <div className="flex items-center space-x-3 text-sm">
        <img className="h-10 w-10 rounded-full" src={avatar}/>
        <div>
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
