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
    <article className="group border-b border-border pb-6 mb-6 last:border-b-0">
      <Link to={`/post/${slug}`} className="block">
        {/* Mobile & Tablet: Horizontal layout with small thumbnail */}
        <div className="flex gap-4 md:flex-col md:gap-0">
          {/* Content Section */}
          <div className="flex-1 min-w-0">
            {/* Author info - mobile only */}
            <div className="flex items-center gap-2 mb-3 md:hidden">
              <span className="text-sm font-medium text-foreground">{author}</span>
            </div>

            {/* Desktop: Show image first */}
            <div className="hidden md:block overflow-hidden rounded-lg mb-4">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Desktop: Show badge */}
            <Badge className="mb-3 bg-secondary text-secondary-foreground hidden md:inline-flex">
              {category}
            </Badge>

            <h3 className="text-xl md:text-xl font-bold mb-2 leading-tight group-hover:text-foreground transition-colors line-clamp-2">
              {title}
            </h3>

            <p className="text-muted-foreground mb-4 line-clamp-2 md:line-clamp-2 text-sm md:text-base">
              {excerpt}
            </p>

            <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
              {/* Desktop: Show author */}
              <span className="font-medium text-foreground hidden md:inline">{author}</span>
              <span className="hidden md:inline">·</span>
              <span>{date}</span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet: Small thumbnail on right */}
          <div className="flex-shrink-0 md:hidden">
            <div className="w-20 h-20 sm:w-28 sm:h-28 overflow-hidden rounded">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
