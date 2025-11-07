import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "./ui/badge";

interface HeroPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const HeroPost = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug,
}: HeroPostProps) => {
  return (
    <article className="relative overflow-hidden rounded-lg bg-card shadow-medium hover:shadow-lg transition-all duration-300">
      <Link to={`/post/${slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <Badge className="w-fit mb-4 bg-primary text-primary-foreground">
              {category}
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight hover:text-primary transition-colors">
              {title}
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
              {excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{author}</span>
              <span>·</span>
              <span>{date}</span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
