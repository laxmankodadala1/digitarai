import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPostsData } from "../data";
import { Search, Filter, Calendar, User, Clock, ArrowLeft, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import SeoHead from "../components/SeoHead";

export default function Blogs() {
  const { blogSlug } = useParams();

  // Dynamic state for search & category selections
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "SEO",
    "AI SEO",
    "Digital Marketing",
    "SMM",
    "PPC",
    "Content Marketing",
    "Lead Generation",
    "Analytics",
    "Technical SEO",
    "Local SEO"
  ];

  // BLOG POST Template Reader Mode
  if (blogSlug) {
    const post = blogPostsData.find((p) => p.slug === blogSlug);

    if (!post) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center font-sans">
          <h2 className="text-xl font-bold">Insights Article Not Discovered</h2>
          <p className="text-slate-500 mb-4">Our editing team is preparing this asset.</p>
          <Link to="/blogs" className="text-blue-600 hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Go back to articles index
          </Link>
        </div>
      );
    }

    return (
      <article className="font-sans py-12 lg:py-20 relative">
        <SeoHead
          title={post.title}
          description={post.excerpt}
          ogType="article"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Blogs", url: "/blogs" },
            { name: post.title, url: `/blogs/${post.slug}` }
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-bold mb-8 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Insights Publication Index
          </Link>

          {/* Banner Meta Info */}
          <div className="space-y-4 mb-6">
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100 font-mono">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-100 py-3 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Blog Banner Image */}
          <div className="mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-100 border border-slate-200/60 shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
            />
          </div>

          {/* Core Content Body (Formatted Markdown/HTML representation) */}
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-6 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Dynamic Footer Audit Call-out */}
          <div className="mt-16 bg-slate-950 text-white rounded-3xl p-6 lg:p-10 border border-slate-900 shadow-xl text-center space-y-4">
            <Sparkles className="w-6 h-6 text-blue-500 mx-auto fill-blue-505/20" />
            <h4 className="text-lg font-bold font-display">Tired of just reading? Implement these AI SEO metrics on your domain.</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our autonomous crawl system inspects sitemaps for exact keyword gaps and structural crawler traps. Submit your url for a detailed analysis score.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition inline-block shadow-md"
            >
              Verify Your Site Score Free
            </Link>
          </div>

        </div>
      </article>
    );
  }

  // BLOG LISTING VIEW MAIN
  // Filters data based on user input
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory ||
      (selectedCategory === "AI SEO" && post.category === "AI SEO") ||
      (selectedCategory === "Technical SEO" && post.category === "Technical SEO") ||
      (selectedCategory === "Local SEO" && post.category === "Local SEO");

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPostsData.find((p) => p.isFeatured) || blogPostsData[0];

  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="AI Digital Marketing Research & Insights Blog"
        description="Read comprehensive guides, technical SEO sitemaps checklists, PPC audits, and modern SMM scaling strategies published by DigitarAI search engineers."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blogs", url: "/blogs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb visual element */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Blogs & Insights</span>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Weekly Publishing Operations</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
            Deep Marketing <span className="gradient-text">Research & Ideas</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read corporate guides regarding algorithmic keyword audits, automated PPC bidding structures, and authority citation acquisitions.
          </p>
        </div>

        {/* Featured Post Card Block with Real Banner Image */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <Link
            to={`/blogs/${featuredPost.slug}`}
            className="bg-[#FAFBFD] border border-slate-200/50 rounded-3xl p-6 lg:p-8 shadow-sm mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer text-left block hover:border-slate-300 transition duration-300"
          >
            <div className="md:col-span-5 aspect-[16/10] sm:aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-inner relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider font-mono shadow-md">
                Featured Research
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                {featuredPost.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display leading-tight group-hover:text-blue-600 transition duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <div
                className="text-xs font-semibold text-blue-600 hover:text-blue-750 inline-flex items-center gap-1 group"
              >
                Read Flagship Article Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        )}

        {/* Filter Toolbar (Search + Categories) */}
        <div className="border border-slate-100 rounded-2xl p-5 bg-white shadow-sm mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
          
          {/* Search form */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search research topics (e.g. Google, SaaS, CAC)"
              className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800 placeholder-slate-500"
            />
          </div>

          {/* Category Scroller */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
            {categories.slice(0, 7).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] whitespace-nowrap px-3 py-1.5 font-bold rounded-lg transition shrink-0 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Research List Grid output */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-sm font-semibold text-slate-600">No matching research documents discovered</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="bg-white border border-slate-200/50 rounded-3xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col justify-between group cursor-pointer text-left block hover:translate-y-[-2px] duration-300"
              >
                <div>
                  {/* Card Thumbnail Image Banner */}
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 mb-4 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-slate-900/95 text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-lg border border-white/10 font-mono">
                      {post.category}
                    </span>
                  </div>

                  <div className="space-y-2.5 px-1 pb-2">
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono font-semibold">
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display line-clamp-2 leading-tight group-hover:text-blue-600 transition duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3.5 mt-4 px-1 flex items-center justify-between text-[11px] font-medium">
                  <span className="text-slate-400 font-mono">{post.date}</span>
                  <div
                    className="text-blue-600 font-bold inline-flex items-center gap-0.5 group"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
