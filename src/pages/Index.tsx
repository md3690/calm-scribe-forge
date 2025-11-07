import { Navigation } from "@/components/Navigation";
import { HeroPost } from "@/components/HeroPost";
import { BlogCard } from "@/components/BlogCard";
import heroImage from "@/assets/hero-ai.jpg";
import postTech from "@/assets/post-tech.jpg";
import postML from "@/assets/post-ml.jpg";
import postFuture from "@/assets/post-future.jpg";

const Index = () => {
  const heroPost = {
    title: "The Future of Artificial Intelligence: Beyond the Hype",
    excerpt: "Exploring the real-world applications and transformative potential of AI technology in 2024. From machine learning breakthroughs to ethical considerations, we dive deep into what's next.",
    author: "Alex Chen",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: heroImage,
    slug: "future-of-ai",
  };

  const latestPosts = [
    {
      title: "Understanding Neural Networks: A Beginner's Guide",
      excerpt: "Break down complex AI concepts into digestible insights for developers and enthusiasts alike.",
      author: "Alex Chen",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      category: "Machine Learning",
      image: postML,
      slug: "neural-networks-guide",
    },
    {
      title: "The Rise of Edge Computing in Modern Infrastructure",
      excerpt: "How edge computing is reshaping data processing and reducing latency in distributed systems.",
      author: "Sarah Park",
      date: "Mar 10, 2024",
      readTime: "5 min read",
      category: "Cloud Computing",
      image: postTech,
      slug: "edge-computing-rise",
    },
    {
      title: "Building Scalable APIs with GraphQL",
      excerpt: "Learn best practices for designing and implementing GraphQL APIs that scale with your application.",
      author: "Jordan Lee",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Web Development",
      image: postFuture,
      slug: "scalable-graphql-apis",
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential strategies for protecting your organization in a distributed work environment.",
      author: "Morgan Davis",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      category: "Security",
      image: postTech,
      slug: "cybersecurity-remote-work",
    },
    {
      title: "Quantum Computing: From Theory to Practice",
      excerpt: "Demystifying quantum computing and exploring its practical applications in modern technology.",
      author: "Alex Chen",
      date: "Mar 3, 2024",
      readTime: "9 min read",
      category: "Quantum Computing",
      image: postML,
      slug: "quantum-computing-practice",
    },
    {
      title: "The Ethics of AI Development",
      excerpt: "Navigating the moral considerations and responsibilities in artificial intelligence research.",
      author: "Sarah Park",
      date: "Mar 1, 2024",
      readTime: "10 min read",
      category: "AI Ethics",
      image: postFuture,
      slug: "ethics-ai-development",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <HeroPost {...heroPost} />
      </section>

      {/* Latest Posts Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest Articles</h2>
          <p className="text-muted-foreground text-lg">
            Insights and analysis on technology, AI, and the future of computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 TechThoughts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
