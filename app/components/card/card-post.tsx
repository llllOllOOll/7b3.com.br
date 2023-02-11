import { Link } from "@remix-run/react";

type CardProps = {
  title: string;
  author: string;
  date: string;
  slug: string;
  source: string;
  imagePost: string;
  avatar: string;
};

export default function Card({
  title,
  author,
  date,
  slug,
  source,
  imagePost,
  avatar,
}: CardProps) {
  return (
    <div className="w-full space-y-3 rounded-lg bg-gray-100 p-6 shadow-md">
      <div className="relative h-0 pb-[56.25%]">
        <Link to={`/posts/${slug}`}>
          <img
            alt=""
            className="absolute inset-0 h-full w-full"
            src={imagePost}
          />
        </Link>
      </div>
      <p className="hidden">
        <Link to={source}>source: {author}</Link>
      </p>
      <h2 className="hidden max-w-sm text-lg">{title}</h2>
      <div className="flex items-center space-x-3 text-sm">
        <img
          alt=""
          className="h-10 w-10 rounded-full"
          src={avatar}
        />
        <div>
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
