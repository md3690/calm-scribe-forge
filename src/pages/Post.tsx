import { Navigation } from "@/components/Navigation";
import { AuthorBio } from "@/components/AuthorBio";
import { AdSpace } from "@/components/AdSpace";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Share2, Bookmark, Twitter, Facebook, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/hero-ai.jpg";
import authorAvatar from "@/assets/author-avatar.jpg";

const Post = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="py-12 md:py-16">
          <Badge className="mb-6 bg-primary text-primary-foreground">
            Artificial Intelligence
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Future of Artificial Intelligence: Beyond the Hype
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Exploring the real-world applications and transformative potential of AI technology in 2024
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <span className="font-medium text-foreground">Alex Chen</span>
            <span>·</span>
            <span>Mar 15, 2024</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <div className="ml-auto flex gap-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Featured article image"
            className="w-full h-auto"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg leading-relaxed mb-6">
            Artificial intelligence has transcended its status as a buzzword to become an integral part of our daily lives. From the moment we wake up to the time we go to bed, AI systems are working behind the scenes, making decisions that affect everything from our social media feeds to our healthcare.
          </p>

          {/* First Ad Space */}
          <div className="my-12 not-prose">
            <AdSpace size="banner" />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Current State of AI</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Today's AI systems are more sophisticated than ever before. Machine learning algorithms can now recognize patterns in data with unprecedented accuracy, natural language processing has made human-computer interaction more intuitive, and computer vision systems can identify objects and faces with remarkable precision.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl text-muted-foreground">
            "The question isn't whether AI will transform society—it's how quickly and in what ways it will reshape the world as we know it."
          </blockquote>

          <h2 className="text-3xl font-bold mt-12 mb-6">Real-World Applications</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The practical applications of AI are expanding rapidly across industries. In healthcare, AI systems assist doctors in diagnosing diseases and predicting patient outcomes. In finance, algorithms detect fraudulent transactions in real-time. Manufacturing plants use AI-powered robots to optimize production lines and reduce waste.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But perhaps the most exciting developments are happening in areas we're only beginning to explore. Autonomous vehicles are becoming safer and more reliable. AI-powered drug discovery is accelerating the development of new treatments. Climate scientists are using machine learning to better predict and mitigate the effects of global warming.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Challenges and Considerations</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Despite the incredible progress, we must remain thoughtful about the challenges AI presents. Questions of bias in algorithms, privacy concerns, job displacement, and the need for transparent AI systems are more pressing than ever. As we continue to integrate AI into critical aspects of society, addressing these concerns becomes not just important, but essential.
          </p>

          {/* Mid-Article Ad Space */}
          <div className="my-12 not-prose">
            <AdSpace size="medium" />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Looking Ahead</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The future of AI is not predetermined. It will be shaped by the choices we make today—the regulations we implement, the ethical frameworks we establish, and the values we choose to embed in our AI systems. As developers, researchers, and citizens, we all have a role to play in ensuring that AI benefits humanity as a whole.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The technology is here. The potential is enormous. Now it's up to us to harness it responsibly and creatively to build a better future for everyone.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="mb-16">
          <AuthorBio
            name="Alex Chen"
            avatar={authorAvatar}
            bio="Tech journalist and AI researcher with over 10 years of experience covering emerging technologies. Passionate about making complex technical concepts accessible to everyone."
          />
        </div>

        {/* Post-Article Ad Space */}
        <div className="mb-16">
          <AdSpace size="large" />
        </div>
      </article>

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

export default Post;
