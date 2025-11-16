import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "./ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug,
}: BlogCardProps) => {
  return (
    <article className="group">
      <Link to={`/post/${slug}`} className="block">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <Badge className="mb-3 bg-secondary text-secondary-foreground">
          {category}
        </Badge>

        <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-foreground transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{author}</span>
          <span>·</span>
          <span>{date}</span>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
