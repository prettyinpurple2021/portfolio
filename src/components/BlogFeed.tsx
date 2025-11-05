"use client";

import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import HolographicHeading from "./HolographicHeading";
import Button from "./Button";

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
};

export default function BlogFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        // Try multiple RSS proxy services for better reliability
        const rssUrl = 'https://www.solobossai.blog/feeds/posts/default?alt=rss';
        
        // Try allorigins first, then cors-anywhere as fallback
        const proxies = [
          `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`,
          `https://cors-anywhere.herokuapp.com/${rssUrl}`
        ];
        
        let data = null;
        let lastError = null;
        
        for (const proxyUrl of proxies) {
          try {
            const response = await fetch(proxyUrl);
            if (response.ok) {
              data = await response.json();
              break;
            }
          } catch (err) {
            lastError = err;
            continue;
          }
        }
        
        if (!data) {
          throw lastError || new Error("All proxy services failed");
        }
        
        // Handle different response formats
        const xmlContent = data.contents || data;
        if (typeof xmlContent !== 'string') {
          throw new Error("Invalid RSS content");
        }
        
        // Parse RSS XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
        
        // Check for parsing errors
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) {
          throw new Error("Failed to parse RSS feed");
        }
        
        const items = xmlDoc.querySelectorAll("item");
        const blogPosts: BlogPost[] = [];
        
        items.forEach((item, index) => {
          if (index >= 6) return; // Limit to 6 posts
          
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";
          const description = item.querySelector("description")?.textContent || "";
          const content = item.querySelector("content\\:encoded, encoded")?.textContent || "";
          
          // Only add if we have essential data
          if (title && link) {
            blogPosts.push({
              title,
              link,
              pubDate,
              description,
              content
            });
          }
        });
        
        setPosts(blogPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long", 
        day: "numeric"
      });
    } catch {
      return "Recent";
    }
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (loading) {
    return (
      <div className="py-10">
        <HolographicHeading as="h2" className="mb-8">
          Latest Blog Posts
        </HolographicHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <GlassCard key={i} className="animate-pulse">
              <div className="h-4 bg-white/20 rounded mb-4"></div>
              <div className="h-3 bg-white/15 rounded mb-2"></div>
              <div className="h-3 bg-white/15 rounded mb-4"></div>
              <div className="h-8 bg-white/20 rounded"></div>
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10">
        <HolographicHeading as="h2" className="mb-8">
          Latest Blog Posts
        </HolographicHeading>
        <GlassCard className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Button href="https://www.solobossai.blog/" target="_blank">
            Visit Blog Directly
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="py-10">
      <HolographicHeading as="h2" className="mb-8">
        Latest Blog Posts
      </HolographicHeading>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <GlassCard className="h-full hover:shadow-holographic transition-all duration-300 group">
              <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {truncateText(sanitizeHtml(post.description, { allowedTags: [] }))}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {formatDate(post.pubDate)}
                </span>
                
                <Button 
                  href={post.link} 
                  target="_blank"
                  variant="secondary"
                  className="text-xs px-4 py-2"
                >
                  Read More
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button 
          href="https://www.solobossai.blog/" 
          target="_blank"
          variant="primary"
          className="text-lg px-8 py-4"
        >
          View All Posts
        </Button>
      </div>
    </div>
  );
}
