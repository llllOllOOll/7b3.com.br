type CardProps = {
  title: string;
  author: string;
  date: string;
};

export default function Card({ title, author, date }: CardProps) {
  return (
    <div className="w-full space-y-3 rounded-lg bg-gray-100 p-6 shadow-md">
      <div className="h-64 max-w-lg bg-gray-500">
        <img src="images/post1.png" />
      </div>
      <p>Fonte</p>
      <h2 className="text-lg">{title}</h2>
      <div className="flex items-center space-x-3 text-sm">
        <div className="h-10 w-10 rounded-full bg-slate-600"></div>
        <div>
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
