import React, { useState } from 'react';
import {
  Home,
  Search,
  Bell,
  Mail,
  Users,
  User,
  MoreHorizontal,
  Settings,
  ImageIcon,
  Smile,
  MapPin,
  Calendar,
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Bookmark,
  Share,
  X,
  Plus,
  ChevronDown,
  Sparkles,
  Download,
  Upload,
  FileJson,
  Smartphone,
} from 'lucide-react';

/* ==========================================
   1. IMPORTS & ICONS
   ========================================== */

// X Logo SVG
const XLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ==========================================
   2. REUSABLE UI COMPONENTS
   ========================================== */

// Verification Badge SVGs - Authentic rosette/starry shape
const VerificationBadge = ({ type }) => {
  if (type === 'none') return null;

  const colors = {
    blue: '#1d9bf0',
    gold: '#e2b719',
    gray: '#829aab',
  };

  const color = colors[type] || colors.blue;

  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] ml-0.5" fill="none">
      <path
        d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
        fill={color}
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Account Label Component - displays labels like Parody, Automated, Business, etc.
const AccountLabel = ({ label }) => {
  if (!label || label === 'none') return null;

  const labelConfig = {
    parody: {
      text: 'Parody account',
      icon: (
        <svg viewBox="0 0 17 17" className="w-[15px] h-[15px]" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.57536 3.08509C9.97723 3.05098 12.6292 2.77339 14.1219 1.95316C14.4167 1.79119 14.9087 2.00505 14.9114 2.3414C14.9459 6.64428 14.9944 12.7101 10.105 14.7808C9.61825 14.9869 9.09744 15.0939 8.57536 15.1016V12.1057C10.7521 12.0877 12.104 11.1111 12.56 10.4992C12.7526 10.2406 12.6992 9.87493 12.4406 9.6823C12.1821 9.48968 11.8164 9.54309 11.6238 9.80161C11.405 10.0953 10.4124 10.9202 8.57536 10.9382V3.08509ZM12.9097 6.60774C12.947 6.24119 12.5681 6.0237 12.2122 6.11906L11.0832 6.42158L9.9542 6.72409C9.59831 6.81945 9.37886 7.19729 9.59449 7.49604C9.60498 7.51059 9.6157 7.52499 9.62663 7.53924C9.77341 7.73051 9.95642 7.89101 10.1652 8.01156C10.374 8.13211 10.6045 8.21035 10.8436 8.24182C11.0826 8.27329 11.3255 8.25737 11.5584 8.19497C11.7913 8.13257 12.0096 8.02491 12.2009 7.87814C12.3921 7.73136 12.5526 7.54835 12.6732 7.33956C12.7937 7.13076 12.872 6.90026 12.9034 6.66122C12.9058 6.64341 12.9079 6.62558 12.9097 6.60774Z" fill="#9FB5C3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.57518 3.08436C8.54473 3.08516 8.51486 3.08585 8.48557 3.08643C7.10089 3.05902 4.39277 2.78544 2.87805 1.95316C2.58326 1.79119 2.09125 2.00505 2.08856 2.3414C2.05415 6.64429 2.00563 12.7102 6.89495 14.7808C7.42854 15.0068 8.00299 15.1135 8.57518 15.1011V12.1054C8.54547 12.1058 8.5156 12.1059 8.48558 12.1059C6.27313 12.1059 4.90025 11.1168 4.44004 10.4992C4.24742 10.2407 4.30084 9.87493 4.55935 9.68231C4.81787 9.48968 5.1836 9.5431 5.37622 9.80162C5.59745 10.0985 6.60954 10.9385 8.48557 10.9385C8.51566 10.9385 8.54553 10.9382 8.57518 10.9378V3.08436ZM7.57552 7.55287C7.63201 7.91696 7.26495 8.15399 6.90456 8.07738L5.76128 7.83437L4.618 7.59136C4.2576 7.51475 4.01868 7.14892 4.21838 6.83929C4.2281 6.82422 4.23805 6.80928 4.24822 6.79447C4.38478 6.59578 4.55914 6.42592 4.76134 6.29461C4.96355 6.1633 5.18964 6.0731 5.4267 6.02916C5.66376 5.98522 5.90716 5.98841 6.14299 6.03854C6.37883 6.08866 6.60247 6.18475 6.80117 6.32131C6.99987 6.45787 7.16972 6.63223 7.30104 6.83444C7.43235 7.03664 7.52255 7.26273 7.56649 7.49979C7.56976 7.51745 7.57277 7.53515 7.57552 7.55287Z" fill="#6B7F8E" />
        </svg>
      ),
      bg: 'bg-transparent',
      border: 'border-0',
      textColor: 'text-x-gray',
    },
    fan: {
      text: 'Fan account',
      icon: (
        <User className="w-[15px] h-[15px]" />
      ),
      bg: 'bg-transparent',
      border: 'border-0',
      textColor: 'text-x-gray',
    },
    commentary: {
      text: 'Commentary account',
      icon: (
        <MessageCircle className="w-[15px] h-[15px]" />
      ),
      bg: 'bg-transparent',
      border: 'border-0',
      textColor: 'text-x-gray',
    },
    automated: {
      text: 'Automated',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" />
        </svg>
      ),
      bg: 'bg-transparent',
      border: 'border border-x-border',
      textColor: 'text-x-gray',
    },
    business: {
      text: 'Business',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
      bg: 'bg-[#e2b719]/10',
      border: 'border border-[#e2b719]/30',
      textColor: 'text-[#e2b719]',
    },
    government: {
      text: 'Government',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
          <path d="M12 2L2 7v1h20V7L12 2zm0 2.18L18.18 7H5.82L12 4.18zM3 9v9h2V9H3zm16 0v9h2V9h-2zM7 9v9h2V9H7zm4 0v9h2V9h-2zm4 0v9h2V9h-2zM2 20v2h20v-2H2z" />
        </svg>
      ),
      bg: 'bg-[#829aab]/10',
      border: 'border border-[#829aab]/30',
      textColor: 'text-[#829aab]',
    },
    'state-affiliated': {
      text: 'State-affiliated media',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
        </svg>
      ),
      bg: 'bg-[#f4212e]/10',
      border: 'border border-[#f4212e]/30',
      textColor: 'text-[#f4212e]',
    },
    official: {
      text: 'Official',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
      bg: 'bg-[#829aab]/10',
      border: 'border border-[#829aab]/30',
      textColor: 'text-[#829aab]',
    },
  };

  const config = labelConfig[label];
  if (!config) return null;

  return (
    <span className={`inline-flex items-center gap-1 px-0 py-0 rounded text-[13px] font-medium ${config.bg} ${config.border} ${config.textColor}`}>
      {config.icon}
      {config.text}
    </span>
  );
};

// Default avatar placeholder
const DefaultAvatar = ({ seed = '1' }) => (
  <div className="w-10 h-10 rounded-full bg-x-dark flex items-center justify-center text-x-gray">
    <User className="w-5 h-5" />
  </div>
);

/* ==========================================
   3. MAIN FEATURE COMPONENTS
   ========================================== */

// Post Component
const Post = ({ post, isQuote = false }) => {
  const {
    displayName,
    username,
    verified,
    accountLabel,
    content,
    image,
    timestamp,
    replies,
    reposts,
    likes,
    views,
    avatar,
    quotePost,
  } = post;

  return (
    <article className={`${isQuote ? '' : 'border-b border-x-border'} px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer`}>
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt="" className={`${isQuote ? 'w-5 h-5' : 'w-10 h-10'} rounded-full object-cover`} />
          ) : (
            <div className={`${isQuote ? 'w-5 h-5' : 'w-10 h-10'} rounded-full bg-x-border flex items-center justify-center`}>
              <User className={`${isQuote ? 'w-3 h-3' : 'w-5 h-5'} text-x-gray`} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className={`font-bold text-x-white hover:underline ${isQuote ? 'text-[13px]' : 'text-[15px]'}`}>
              {displayName}
            </span>
            <VerificationBadge type={verified} />
            <span className={`text-x-gray ${isQuote ? 'text-[13px]' : 'text-[15px]'}`}>@{username}</span>
            <span className={`text-x-gray hover:underline ${isQuote ? 'text-[13px]' : 'text-[15px]'}`}>{timestamp}</span>
            {!isQuote && (
              <button className="ml-auto text-x-gray hover:text-x-blue hover:bg-x-blue/10 rounded-full p-1.5 -mr-1.5 transition-colors">
                <MoreHorizontal className="w-[18px] h-[18px]" />
              </button>
            )}
          </div>

          {/* Account Label (New Line) */}
          {accountLabel && accountLabel !== 'none' && (
            <div className="mb-0.5 -mt-0.5">
              <AccountLabel label={accountLabel} />
            </div>
          )}

          {/* Post text */}
          {content && (
            <p className={`text-x-white mt-0.5 whitespace-pre-wrap break-words ${isQuote ? 'text-[13px]' : 'text-[15px]'}`}>
              {content}
            </p>
          )}

          {/* Image */}
          {image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-x-border">
              <img src={image} alt="" className="w-full h-auto max-h-[510px] object-cover" />
            </div>
          )}

          {/* Quote Post */}
          {quotePost && !isQuote && (
            <div className="mt-3 border border-x-border rounded-2xl overflow-hidden hover:bg-white/[0.03] transition-colors">
              <Post post={quotePost} isQuote={true} />
            </div>
          )}

          {/* Actions */}
          {!isQuote && (
            <div className="flex items-center justify-between mt-3 max-w-[425px] -ml-2">
              <button className="flex items-center gap-1 text-x-gray hover:text-x-blue group/action">
                <div className="p-2 rounded-full group-hover/action:bg-x-blue/10 transition-colors">
                  <MessageCircle className="w-[18px] h-[18px]" />
                </div>
                <span className="text-[13px] group-hover/action:text-x-blue">{replies}</span>
              </button>
              <button className="flex items-center gap-1 text-x-gray hover:text-green-500 group/action">
                <div className="p-2 rounded-full group-hover/action:bg-green-500/10 transition-colors">
                  <Repeat2 className="w-[18px] h-[18px]" />
                </div>
                <span className="text-[13px] group-hover/action:text-green-500">{reposts}</span>
              </button>
              <button className="flex items-center gap-1 text-x-gray hover:text-pink-600 group/action">
                <div className="p-2 rounded-full group-hover/action:bg-pink-600/10 transition-colors">
                  <Heart className="w-[18px] h-[18px]" />
                </div>
                <span className="text-[13px] group-hover/action:text-pink-600">{likes}</span>
              </button>
              <button className="flex items-center gap-1 text-x-gray hover:text-x-blue group/action">
                <div className="p-2 rounded-full group-hover/action:bg-x-blue/10 transition-colors">
                  <BarChart2 className="w-[18px] h-[18px]" />
                </div>
                <span className="text-[13px] group-hover/action:text-x-blue">{views}</span>
              </button>
              <div className="flex items-center gap-0">
                <button className="text-x-gray hover:text-x-blue group/action">
                  <div className="p-2 rounded-full group-hover/action:bg-x-blue/10 transition-colors">
                    <Bookmark className="w-[18px] h-[18px]" />
                  </div>
                </button>
                <button className="text-x-gray hover:text-x-blue group/action">
                  <div className="p-2 rounded-full group-hover/action:bg-x-blue/10 transition-colors">
                    <Share className="w-[18px] h-[18px]" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

// Navigation Item
const NavItem = ({ icon: Icon, label, active = false, notification = false }) => (
  <button className="flex items-center gap-4 p-3 rounded-full hover:bg-white/10 transition-colors w-fit">
    <div className="relative">
      <Icon className={`w-[26px] h-[26px] ${active ? 'stroke-[2.5px]' : ''}`} />
      {notification && (
        <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-x-blue rounded-full flex items-center justify-center text-[11px] font-bold">
          {notification}
        </div>
      )}
    </div>
    <span className={`text-xl ${active ? 'font-bold' : ''} hidden xl:block`}>{label}</span>
  </button>
);

// Trend Item
const TrendItem = ({ category, title, posts }) => (
  <div className="px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-[13px] text-x-gray">{category}</p>
        <p className="font-bold text-[15px] text-x-white">{title}</p>
        <p className="text-[13px] text-x-gray">{posts} posts</p>
      </div>
      <button className="text-x-gray hover:text-x-blue hover:bg-x-blue/10 rounded-full p-1.5 transition-colors">
        <MoreHorizontal className="w-[18px] h-[18px]" />
      </button>
    </div>
  </div>
);

// Who to follow item
const WhoToFollow = ({ name, username, verified, avatar }) => (
  <div className="px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer flex items-center gap-3">
    {avatar ? (
      <img src={avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
    ) : (
      <div className="w-10 h-10 rounded-full bg-x-border flex items-center justify-center">
        <User className="w-5 h-5 text-x-gray" />
      </div>
    )}
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1">
        <span className="font-bold text-[15px] text-x-white hover:underline truncate">{name}</span>
        <VerificationBadge type={verified} />
      </div>
      <p className="text-[15px] text-x-gray truncate">@{username}</p>
    </div>
    <button className="bg-x-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors">
      Follow
    </button>
  </div>
);

/* ==========================================
   4. MODALS & FORMS
   ========================================== */

// Create Post Modal
const CreatePostModal = ({ onClose, onSubmit, existingPosts }) => {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [verified, setVerified] = useState('none');
  const [accountLabel, setAccountLabel] = useState('none');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [avatar, setAvatar] = useState('');
  const [timestamp, setTimestamp] = useState('1h');
  const [replies, setReplies] = useState('');
  const [reposts, setReposts] = useState('');
  const [likes, setLikes] = useState('');
  const [views, setViews] = useState('');
  const [isQuotePost, setIsQuotePost] = useState(false);
  const [quotePostIndex, setQuotePostIndex] = useState(-1);

  // Quote post fields
  const [quoteDisplayName, setQuoteDisplayName] = useState('');
  const [quoteUsername, setQuoteUsername] = useState('');
  const [quoteVerified, setQuoteVerified] = useState('none');
  const [quoteAccountLabel, setQuoteAccountLabel] = useState('none');
  const [quoteContent, setQuoteContent] = useState('');
  const [quoteImage, setQuoteImage] = useState('');
  const [quoteAvatar, setQuoteAvatar] = useState('');
  const [quoteTimestamp, setQuoteTimestamp] = useState('2h');

  // File inputs refs
  const imageInputRef = React.useRef(null);
  const avatarInputRef = React.useRef(null);
  const quoteImageInputRef = React.useRef(null);
  const quoteAvatarInputRef = React.useRef(null);

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let quotePost = null;
    if (isQuotePost) {
      if (quotePostIndex >= 0 && existingPosts[quotePostIndex]) {
        quotePost = { ...existingPosts[quotePostIndex] };
        delete quotePost.quotePost; // Remove nested quotes
      } else if (quoteDisplayName && quoteUsername) {
        quotePost = {
          displayName: quoteDisplayName,
          username: quoteUsername,
          verified: quoteVerified,
          accountLabel: quoteAccountLabel,
          content: quoteContent,
          image: quoteImage || null,
          avatar: quoteAvatar || null,
          timestamp: quoteTimestamp,
        };
      }
    }

    const newPost = {
      id: Date.now(),
      displayName: displayName || 'User',
      username: username || 'user',
      verified,
      accountLabel,
      content,
      image: image || null,
      avatar: avatar || null,
      timestamp: timestamp || '1h',
      replies: replies || '0',
      reposts: reposts || '0',
      likes: likes || '0',
      views: views || '0',
      quotePost,
    };

    onSubmit(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-400/20 z-50 flex items-start justify-center pt-12 overflow-y-auto pb-12 backdrop-blur-sm">
      <div className="bg-black border border-x-border rounded-2xl w-full max-w-xl mx-4 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-x-border sticky top-0 bg-black/80 backdrop-blur-md z-10 rounded-t-2xl">
          <button onClick={onClose} className="text-x-white hover:bg-white/10 rounded-full p-2 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="font-bold text-x-blue hover:bg-x-blue/10 px-3 py-1 rounded-full cursor-pointer transition-colors text-sm">
            Drafts
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="flex gap-3">
            {/* Avatar Preview/Upload */}
            <div className="flex-shrink-0">
              <div
                onClick={() => avatarInputRef.current?.click()}
                className="w-10 h-10 rounded-full bg-x-border flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group"
              >
                {avatar ? (
                  <img src={avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-x-gray" />
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </div>
              <input
                type="file"
                ref={avatarInputRef}
                onChange={(e) => handleImageUpload(e, setAvatar)}
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex-1 space-y-4">
              {/* User Info Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Display Name"
                  className="bg-transparent border border-x-border rounded px-2 py-1 text-x-white focus:border-x-blue focus:outline-none text-sm"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="bg-transparent border border-x-border rounded px-2 py-1 text-x-white focus:border-x-blue focus:outline-none text-sm"
                />
              </div>

              {/* Badges & Labels */}
              <div className="flex gap-3">
                <select
                  value={verified}
                  onChange={(e) => setVerified(e.target.value)}
                  className="bg-black border border-x-border rounded px-2 py-1 text-x-white focus:border-x-blue focus:outline-none text-xs"
                >
                  <option value="none">No Badge</option>
                  <option value="blue">Blue</option>
                  <option value="gold">Gold</option>
                  <option value="gray">Gray</option>
                </select>
                <select
                  value={accountLabel}
                  onChange={(e) => setAccountLabel(e.target.value)}
                  className="bg-black border border-x-border rounded px-2 py-1 text-x-white focus:border-x-blue focus:outline-none text-xs"
                >
                  <option value="none">No Label</option>
                  <option value="parody">Parody</option>
                  <option value="fan">Fan</option>
                  <option value="commentary">Commentary</option>
                  <option value="automated">Automated</option>
                  <option value="business">Business</option>
                  <option value="government">Government</option>
                  <option value="state-affiliated">State-affiliated</option>
                  <option value="official">Official</option>
                </select>
              </div>

              {/* Content */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What is happening?!"
                rows={3}
                className="w-full bg-transparent border-none text-xl text-x-white focus:ring-0 placeholder-x-gray resize-none p-0"
              />

              {/* Image Preview */}
              {image && (
                <div className="relative group rounded-2xl overflow-hidden border border-x-border">
                  <img src={image} alt="" className="w-full h-auto max-h-[400px] object-cover" />
                  <button
                    type="button"
                    onClick={() => setImage('')}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Quote Post Section */}
              {isQuotePost && (
                <div className="border border-x-border rounded-xl p-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-x-gray">Quote Post</span>
                    <select
                      value={quotePostIndex}
                      onChange={(e) => setQuotePostIndex(parseInt(e.target.value))}
                      className="bg-black border border-x-border rounded px-2 py-1 text-x-white focus:border-x-blue focus:outline-none text-xs max-w-[150px]"
                    >
                      <option value={-1}>Custom Quote</option>
                      {existingPosts.map((post, idx) => (
                        <option key={post.id} value={idx}>
                          @{post.username}
                        </option>
                      ))}
                    </select>
                  </div>

                  {quotePostIndex < 0 && (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div
                          onClick={() => quoteAvatarInputRef.current?.click()}
                          className="w-8 h-8 rounded-full bg-x-border flex-shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80"
                        >
                          {quoteAvatar ? <img src={quoteAvatar} className="w-full h-full rounded-full object-cover" /> : <User className="w-4 h-4 text-x-gray" />}
                        </div>
                        <input type="file" ref={quoteAvatarInputRef} onChange={(e) => handleImageUpload(e, setQuoteAvatar)} accept="image/*" className="hidden" />

                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <input type="text" value={quoteDisplayName} onChange={(e) => setQuoteDisplayName(e.target.value)} placeholder="Name" className="bg-transparent border border-x-border rounded px-2 py-1 text-xs text-x-white" />
                          <input type="text" value={quoteUsername} onChange={(e) => setQuoteUsername(e.target.value)} placeholder="Username" className="bg-transparent border border-x-border rounded px-2 py-1 text-xs text-x-white" />
                        </div>
                      </div>
                      <textarea value={quoteContent} onChange={(e) => setQuoteContent(e.target.value)} placeholder="Quote content..." rows={2} className="w-full bg-transparent border border-x-border rounded p-2 text-sm text-x-white resize-none" />
                      {quoteImage && (
                        <div className="relative">
                          <img src={quoteImage} className="w-full h-32 object-cover rounded-lg" />
                          <button type="button" onClick={() => setQuoteImage('')} className="absolute top-1 right-1 bg-black/50 p-1 rounded-full"><X className="w-3 h-3" /></button>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <button type="button" onClick={() => quoteImageInputRef.current?.click()} className="text-x-blue text-xs hover:underline flex items-center gap-1"><ImageIcon className="w-3 h-3" /> Add Image</button>
                        <input type="file" ref={quoteImageInputRef} onChange={(e) => handleImageUpload(e, setQuoteImage)} accept="image/*" className="hidden" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Metrics Inputs */}
              <div className="grid grid-cols-5 gap-2 pt-2 border-t border-x-border">
                <div className="space-y-1">
                  <label className="text-[10px] text-x-gray uppercase font-bold">Time</label>
                  <input type="text" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} className="w-full bg-transparent border-b border-x-border focus:border-x-blue text-xs py-1 text-x-white outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-x-gray uppercase font-bold">Replies</label>
                  <input type="text" value={replies} onChange={(e) => setReplies(e.target.value)} className="w-full bg-transparent border-b border-x-border focus:border-x-blue text-xs py-1 text-x-white outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-x-gray uppercase font-bold">Reposts</label>
                  <input type="text" value={reposts} onChange={(e) => setReposts(e.target.value)} className="w-full bg-transparent border-b border-x-border focus:border-x-blue text-xs py-1 text-x-white outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-x-gray uppercase font-bold">Likes</label>
                  <input type="text" value={likes} onChange={(e) => setLikes(e.target.value)} className="w-full bg-transparent border-b border-x-border focus:border-x-blue text-xs py-1 text-x-white outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-x-gray uppercase font-bold">Views</label>
                  <input type="text" value={views} onChange={(e) => setViews(e.target.value)} className="w-full bg-transparent border-b border-x-border focus:border-x-blue text-xs py-1 text-x-white outline-none" />
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between pt-2 border-t border-x-border">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => imageInputRef.current?.click()}
                    className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors"
                    title="Add Image"
                  >
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <input
                    type="file"
                    ref={imageInputRef}
                    onChange={(e) => handleImageUpload(e, setImage)}
                    accept="image/*"
                    className="hidden"
                  />
                  <button type="button" className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors"><Smile className="w-5 h-5" /></button>
                  <button type="button" className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors"><Calendar className="w-5 h-5" /></button>
                  <button type="button" className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors"><MapPin className="w-5 h-5" /></button>
                </div>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={isQuotePost}
                      onChange={(e) => setIsQuotePost(e.target.checked)}
                      className="w-4 h-4 rounded border-x-border bg-transparent checked:bg-x-blue"
                    />
                    <span className="text-sm text-x-gray group-hover:text-x-white transition-colors">Quote</span>
                  </label>
                  <div className="w-[1px] h-6 bg-x-border"></div>
                  <button
                    type="submit"
                    className="bg-x-blue text-white font-bold px-4 py-1.5 rounded-full hover:bg-x-blue/90 transition-colors disabled:opacity-50"
                    disabled={!content && !image}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ==========================================
   5. UTILITIES & EXPORT
   ========================================== */

// Generate static HTML export
const exportAsHTML = (posts) => {
  const generateVerificationBadge = (type) => {
    if (!type || type === 'none') return '';
    const colors = { blue: '#1d9bf0', gold: '#e2b719', gray: '#829aab' };
    const color = colors[type] || colors.blue;
    return `<svg viewBox="0 0 24 24" style="width:18px;height:18px;margin-left:2px;display:inline-block;vertical-align:middle;" fill="none"><path d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z" fill="${color}"/><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  };

  const generateAccountLabel = (label) => {
    if (!label || label === 'none') return '';
    const labels = {
      parody: { text: 'Parody account', color: '#71767b' },
      fan: { text: 'Fan account', color: '#71767b' },
      commentary: { text: 'Commentary account', color: '#71767b' },
      automated: { text: 'Automated', color: '#71767b' },
      business: { text: 'Business', color: '#e2b719' },
      government: { text: 'Government', color: '#829aab' },
      'state-affiliated': { text: 'State-affiliated media', color: '#f4212e' },
      official: { text: 'Official', color: '#829aab' },
    };
    const config = labels[label];
    if (!config) return '';
    return `<div style="font-size:13px;color:${config.color};margin-top:2px;">${config.text}</div>`;
  };

  const generatePost = (post, isQuote = false) => {
    const avatarSize = isQuote ? '20px' : '40px';
    const fontSize = isQuote ? '13px' : '15px';
    const avatarHtml = post.avatar
      ? `<img src="${post.avatar}" style="width:${avatarSize};height:${avatarSize};border-radius:50%;object-fit:cover;" />`
      : `<div style="width:${avatarSize};height:${avatarSize};border-radius:50%;background:#2f3336;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" style="width:${isQuote ? '12px' : '20px'};height:${isQuote ? '12px' : '20px'};fill:#71767b;"><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.168c-.272 2.024-.008 3.462.806 4.392.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.244-.552.244H5.848c-.235 0-.426-.085-.552-.244-.137-.175-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.479-.12.654z"/></svg></div>`;

    const quoteHtml = post.quotePost && !isQuote ? `
      <div style="margin-top:12px;border:1px solid #2f3336;border-radius:16px;overflow:hidden;">
        ${generatePost(post.quotePost, true)}
      </div>
    ` : '';

    const imageHtml = post.image ? `
      <div style="margin-top:12px;border-radius:16px;overflow:hidden;border:1px solid #2f3336;">
        <img src="${post.image}" style="width:100%;max-height:510px;object-fit:cover;" />
      </div>
    ` : '';

    const actionsHtml = !isQuote ? `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;max-width:425px;color:#71767b;font-size:13px;">
        <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>${post.replies || '0'}</span>
        <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/></svg>${post.reposts || '0'}</span>
        <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/></svg>${post.likes || '0'}</span>
        <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/></svg>${post.views || '0'}</span>
      </div>
    ` : '';

    return `
      <article style="padding:12px 16px;border-bottom:${isQuote ? 'none' : '1px solid #2f3336'};">
        <div style="display:flex;gap:12px;">
          <div style="flex-shrink:0;">${avatarHtml}</div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
              <span style="font-weight:700;font-size:${fontSize};color:#e7e9ea;">${post.displayName}</span>
              ${generateVerificationBadge(post.verified)}
              <span style="color:#71767b;font-size:${fontSize};">@${post.username}</span>
              <span style="color:#71767b;">·</span>
              <span style="color:#71767b;font-size:${fontSize};">${post.timestamp}</span>
            </div>
            ${generateAccountLabel(post.accountLabel)}
            ${post.content ? `<p style="color:#e7e9ea;font-size:${fontSize};margin-top:4px;white-space:pre-wrap;word-break:break-word;">${post.content}</p>` : ''}
            ${imageHtml}
            ${quoteHtml}
            ${actionsHtml}
          </div>
        </div>
      </article>
    `;
  };

  const postsHtml = posts.map(post => generatePost(post)).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>X Mockup</title>
  <style>
    @font-face {
      font-family: 'Chirp';
      src: url('https://abs.twimg.com/fonts/chirp-regular-web.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Chirp';
      src: url('https://abs.twimg.com/fonts/chirp-bold-web.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: 'Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
      background: #000; 
      color: #e7e9ea;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ::-webkit-scrollbar { width: 16px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 8px; border: 4px solid transparent; background-clip: content-box; }
  </style>
</head>
<body>
  <div style="max-width:600px;margin:0 auto;border-left:1px solid #2f3336;border-right:1px solid #2f3336;min-height:100vh;">
    <!-- Header -->
    <header style="position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.8);backdrop-filter:blur(12px);border-bottom:1px solid #2f3336;">
      <div style="padding:12px 16px;display:flex;align-items:center;gap:8px;">
        <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:#e7e9ea;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </div>
      <div style="display:flex;">
        <div style="flex:1;padding:16px 0;text-align:center;font-weight:700;position:relative;">
          For you
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:64px;height:4px;background:#1d9bf0;border-radius:4px;"></div>
        </div>
        <div style="flex:1;padding:16px 0;text-align:center;color:#71767b;">Following</div>
      </div>
    </header>
    <!-- Posts -->
    ${postsHtml}
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'x-mockup.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Export mobile/feed-only view (no sidebars, no trending)
const exportMobileHTML = (posts) => {
  const svgs = {
    upgradeDots: `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#e7e9ea;"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>`,
    verticalDots: `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#e7e9ea;"><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    homeFilled: `<svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#e7e9ea;"><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#e7e9ea;"><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.73 3.815-1.945 5.232l4.959 4.959-1.414 1.414-4.959-4.959C14.065 18.27 12.236 19 10.25 19c-4.694 0-8.5-3.806-8.5-8.5z"/></svg>`,
    grokNav: `<svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#e7e9ea;"><path d="M21 3H3v18h18V3zM5 5h14v14H5V5zm11.36 3.77l-9.6 8.47-.66-.74 9.6-8.47.66.74z"/></svg>`,
    bell: `<svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#e7e9ea;"><path d="M12.02 2.903c-3.326 0-6.02 2.695-6.02 6.02v5.498l-1.66 1.743v.836h15.36v-.836l-1.66-1.743V8.923c0-3.325-2.694-6.02-6.02-6.02zm-8.02 6.02c0-4.429 3.591-8.02 8.02-8.02s8.02 3.591 8.02 8.02v5.195l2.37 2.488v2.836H1.63v-2.836l2.37-2.488V8.923zM10.48 21.5c0 1.105.895 2 2 2s2-.895 2-2h-4z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" style="width:26px;height:26px;fill:#e7e9ea;"><path d="M1.999 7.998l9.998 5.63 10.002-5.63v-1.72l-10.002 5.63-9.998-5.63v1.72zm0 9.722V9.99l9.998 5.63 10.002-5.63v7.73H1.999zM12 17.378L.5 10.903V18.5c0 .828.672 1.5 1.5 1.5h20c.828 0 1.5-.672 1.5-1.5v-7.597L12 17.378zM22 5.5H2c-.828 0-1.5.672-1.5 1.5v.724l11.5 6.475 11.5-6.475V7c0-.828-.672-1.5-1.5-1.5z"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" style="width:24px;height:24px;fill:white;"><path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"/></svg>`,
    bookmark: `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#71767b;"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.224-.5.5v14.56l6-4.29 6 4.29V4.5c0-.276-.224-.5-.5-.5h-11z"/></svg>`,
    share: `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#71767b;"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.12 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/></svg>`
  };

  const generateVerificationBadge = (type) => {
    if (!type || type === 'none') return '';
    const colors = { blue: '#1d9bf0', gold: '#e2b719', gray: '#829aab' };
    const color = colors[type] || colors.blue;
    return `<svg viewBox="0 0 24 24" style="width:18px;height:18px;margin-left:2px;display:inline-block;vertical-align:middle;" fill="none"><path d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z" fill="${color}"/><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  };

  const generateAccountLabel = (label) => {
    if (!label || label === 'none') return '';
    const labels = {
      parody: { text: 'Parody account', color: '#71767b', icon: `<svg viewBox="0 0 17 17" style="width:15px;height:15px;margin-right:4px;display:inline-block;vertical-align:middle;" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.57536 3.08509C9.97723 3.05098 12.6292 2.77339 14.1219 1.95316C14.4167 1.79119 14.9087 2.00505 14.9114 2.3414C14.9459 6.64428 14.9944 12.7101 10.105 14.7808C9.61825 14.9869 9.09744 15.0939 8.57536 15.1016V12.1057C10.7521 12.0877 12.104 11.1111 12.56 10.4992C12.7526 10.2406 12.6992 9.87493 12.4406 9.6823C12.1821 9.48968 11.8164 9.54309 11.6238 9.80161C11.405 10.0953 10.4124 10.9202 8.57536 10.9382V3.08509ZM12.9097 6.60774C12.947 6.24119 12.5681 6.0237 12.2122 6.11906L11.0832 6.42158L9.9542 6.72409C9.59831 6.81945 9.37886 7.19729 9.59449 7.49604C9.60498 7.51059 9.6157 7.52499 9.62663 7.53924C9.77341 7.73051 9.95642 7.89101 10.1652 8.01156C10.374 8.13211 10.6045 8.21035 10.8436 8.24182C11.0826 8.27329 11.3255 8.25737 11.5584 8.19497C11.7913 8.13257 12.0096 8.02491 12.2009 7.87814C12.3921 7.73136 12.5526 7.54835 12.6732 7.33956C12.7937 7.13076 12.872 6.90026 12.9034 6.66122C12.9058 6.64341 12.9079 6.62558 12.9097 6.60774Z" fill="#9FB5C3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.57518 3.08436C8.54473 3.08516 8.51486 3.08585 8.48557 3.08643C7.10089 3.05902 4.39277 2.78544 2.87805 1.95316C2.58326 1.79119 2.09125 2.00505 2.08856 2.3414C2.05415 6.64429 2.00563 12.7102 6.89495 14.7808C7.42854 15.0068 8.00299 15.1135 8.57518 15.1011V12.1054C8.54547 12.1058 8.5156 12.1059 8.48558 12.1059C6.27313 12.1059 4.90025 11.1168 4.44004 10.4992C4.24742 10.2407 4.30084 9.87493 4.55935 9.68231C4.81787 9.48968 5.1836 9.5431 5.37622 9.80162C5.59745 10.0985 6.60954 10.9385 8.48557 10.9385C8.51566 10.9385 8.54553 10.9382 8.57518 10.9378V3.08436ZM7.57552 7.55287C7.63201 7.91696 7.26495 8.15399 6.90456 8.07738L5.76128 7.83437L4.618 7.59136C4.2576 7.51475 4.01868 7.14892 4.21838 6.83929C4.2281 6.82422 4.23805 6.80928 4.24822 6.79447C4.38478 6.59578 4.55914 6.42592 4.76134 6.29461C4.96355 6.1633 5.18964 6.0731 5.4267 6.02916C5.66376 5.98522 5.90716 5.98841 6.14299 6.03854C6.37883 6.08866 6.60247 6.18475 6.80117 6.32131C6.99987 6.45787 7.16972 6.63223 7.30104 6.83444C7.43235 7.03664 7.52255 7.26273 7.56649 7.49979C7.56976 7.51745 7.57277 7.53515 7.57552 7.55287Z" fill="#6B7F8E"/></svg>` },
      fan: { text: 'Fan account', color: '#71767b', icon: '' },
      commentary: { text: 'Commentary account', color: '#71767b', icon: '' },
      automated: { text: 'Automated', color: '#71767b', icon: '' },
      business: { text: 'Business', color: '#e2b719', icon: '' },
      government: { text: 'Government', color: '#829aab', icon: '' },
      'state-affiliated': { text: 'State-affiliated media', color: '#f4212e', icon: '' },
      official: { text: 'Official', color: '#829aab', icon: '' },
    };
    const config = labels[label];
    if (!config) return '';
    return `<div style="font-size:13px;color:${config.color};margin-top:2px;display:flex;align-items:center;">${config.icon}${config.text}</div>`;
  };

  const generatePost = (post, isQuote = false) => {
    const avatarSize = isQuote ? '20px' : '40px';
    const fontSize = isQuote ? '13px' : '15px';
    const avatarHtml = post.avatar
      ? `<img src="${post.avatar}" style="width:${avatarSize};height:${avatarSize};border-radius:50%;object-fit:cover;" />`
      : `<div style="width:${avatarSize};height:${avatarSize};border-radius:50%;background:#2f3336;display:flex;align-items:center;justify-content:center;"><svg viewBox="0 0 24 24" style="width:${isQuote ? '12px' : '20px'};height:${isQuote ? '12px' : '20px'};fill:#71767b;"><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.168c-.272 2.024-.008 3.462.806 4.392.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.244-.552.244H5.848c-.235 0-.426-.085-.552-.244-.137-.175-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.479-.12.654z"/></svg></div>`;

    const quoteHtml = post.quotePost && !isQuote ? `
      <div style="margin-top:12px;border:1px solid #2f3336;border-radius:16px;overflow:hidden;">
        ${generatePost(post.quotePost, true)}
      </div>
    ` : '';

    const imageHtml = post.image ? `
      <div style="margin-top:12px;border-radius:16px;overflow:hidden;border:1px solid #2f3336;">
        <img src="${post.image}" style="width:100%;max-height:510px;object-fit:cover;" />
      </div>
    ` : '';

    const actionsHtml = !isQuote ? `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;color:#71767b;font-size:13px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex:1;margin-right:24px;">
          <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>${post.replies || '0'}</span>
          <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/></svg>${post.reposts || '0'}</span>
          <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/></svg>${post.likes || '0'}</span>
          <span style="display:flex;align-items:center;gap:4px;"><svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/></svg>${post.views || '0'}</span>
        </div>
        <div style="display:flex;align-items:center;gap:16px;">
          ${svgs.bookmark}
          ${svgs.share}
        </div>
      </div>
    ` : '';

    return `
      <article style="padding:12px 16px;border-bottom:${isQuote ? 'none' : '1px solid #2f3336'};">
        <div style="display:flex;gap:12px;">
          <div style="flex-shrink:0;">${avatarHtml}</div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
              <span style="font-weight:700;font-size:${fontSize};color:#e7e9ea;">${post.displayName}</span>
              ${generateVerificationBadge(post.verified)}
              <span style="color:#71767b;font-size:${fontSize};">@${post.username}</span>
              <span style="color:#71767b;">·</span>
              <span style="color:#71767b;font-size:${fontSize};">${post.timestamp}</span>
            </div>
            ${generateAccountLabel(post.accountLabel)}
            ${post.content ? `<p style="color:#e7e9ea;font-size:${fontSize};margin-top:4px;white-space:pre-wrap;word-break:break-word;">${post.content}</p>` : ''}
            ${imageHtml}
            ${quoteHtml}
            ${actionsHtml}
          </div>
        </div>
      </article>
    `;
  };

  const postsHtml = posts.map(post => generatePost(post)).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>X Feed</title>
  <style>
    @font-face {
      font-family: 'Chirp';
      src: url('https://abs.twimg.com/fonts/chirp-regular-web.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Chirp';
      src: url('https://abs.twimg.com/fonts/chirp-bold-web.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body { 
      font-family: 'Chirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
      background: #000; 
      color: #e7e9ea;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ::-webkit-scrollbar { width: 0; height: 0; }
  </style>
</head>
<body>
  <div style="max-width:100%;min-height:100vh;padding-bottom:60px;">
    <!-- Header -->
    <header style="position:sticky;top:0;z-index:10;background:rgba(0,0,0,0.85);backdrop-filter:blur(12px);border-bottom:1px solid #2f3336;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;">
        <div style="width:32px;height:32px;border-radius:50%;background:#536471;overflow:hidden;">
          <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <svg viewBox="0 0 24 24" style="width:24px;height:24px;fill:#e7e9ea;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-weight:700;font-size:15px;">Upgrade</span>
          ${svgs.verticalDots}
        </div>
      </div>
      <div style="display:flex;overflow-x:auto;scrollbar-width:none;">
        <div style="flex:0 0 auto;padding:12px 16px;font-weight:700;position:relative;color:#e7e9ea;">
          For you
          <div style="position:absolute;bottom:0;left:16px;right:16px;height:4px;background:#1d9bf0;border-radius:4px;"></div>
        </div>
        <div style="flex:0 0 auto;padding:12px 16px;color:#71767b;">Following</div>
        <div style="flex:0 0 auto;padding:12px 16px;color:#71767b;">ohnePixel's Lobby</div>
        <div style="flex:0 0 auto;padding:12px 16px;color:#71767b;">CS2 Agent Enjo...</div>
      </div>
    </header>
    <!-- Posts -->
    ${postsHtml}
    <!-- Bottom Nav -->
    <div style="position:fixed;bottom:0;left:0;right:0;background:black;border-top:1px solid #2f3336;display:flex;justify-content:space-around;align-items:center;padding:12px 0;z-index:20;">
      ${svgs.homeFilled}
      ${svgs.search}
      ${svgs.grokNav}
      <div style="position:relative;">
        ${svgs.bell}
        <div style="position:absolute;top:-4px;right:-2px;background:#1d9bf0;color:white;font-size:10px;font-weight:bold;padding:1px 4px;border-radius:10px;border:1px solid black;">1</div>
      </div>
      ${svgs.mail}
    </div>
    <!-- FAB -->
    <div style="position:fixed;bottom:70px;right:16px;width:56px;height:56px;background:#1d9bf0;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(0,0,0,0.3);z-index:20;">
      ${svgs.plus}
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'x-feed-mobile.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Export posts as JSON for researchers
const exportAsJSON = (posts) => {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    posts: posts.map(post => ({
      ...post,
      quotePost: post.quotePost ? { ...post.quotePost } : null
    }))
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'x-feed-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Import posts from JSON file
const importFromJSON = (file, setPosts) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.posts && Array.isArray(data.posts)) {
        // Assign new IDs to avoid conflicts
        const importedPosts = data.posts.map((post, index) => ({
          ...post,
          id: Date.now() + index
        }));
        setPosts(importedPosts);
      } else {
        alert('Invalid JSON format. Expected { posts: [...] }');
      }
    } catch (err) {
      alert('Error parsing JSON file: ' + err.message);
    }
  };
  reader.readAsText(file);
};

/* ==========================================
   6. MAIN APPLICATION
   ========================================== */

// Main App
function App() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      displayName: 'Elon Musk',
      username: 'elonmusk',
      verified: 'blue',
      content: 'The future of AI is incredibly exciting. We are building something that will fundamentally change how humans interact with technology.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1926284313365979137/o2cF3MeJ_normal.jpg',
      timestamp: '2h',
      replies: '12.4K',
      reposts: '8.2K',
      likes: '156K',
      views: '24.5M',
      quotePost: null,
    },
    {
      id: 2,
      displayName: 'OpenAI',
      username: 'OpenAI',
      verified: 'gold',
      accountLabel: 'business',
      content: 'Introducing our latest model with improved reasoning capabilities and safety features. Available now for all users.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg',
      timestamp: '4h',
      replies: '3.2K',
      reposts: '15.1K',
      likes: '89K',
      views: '12.8M',
      quotePost: null,
    },
    {
      id: 3,
      displayName: 'The White House',
      username: 'WhiteHouse',
      verified: 'gray',
      accountLabel: 'government',
      content: 'Today, we announced new investments in clean energy infrastructure that will create thousands of jobs across America.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1790820734498549760/WlLAuH_x_400x400.jpg',
      timestamp: '6h',
      replies: '8.9K',
      reposts: '4.3K',
      likes: '45K',
      views: '8.2M',
      quotePost: null,
    },
    {
      id: 5,
      displayName: 'Not Elon Musk',
      username: 'notelonmusk',
      verified: 'blue',
      accountLabel: 'parody',
      content: 'Just bought another social media company. This time it\'s a fax machine network. The future is analog.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1926284313365979137/o2cF3MeJ_normal.jpg',
      timestamp: '3h',
      replies: '2.1K',
      reposts: '8.4K',
      likes: '67K',
      views: '4.2M',
      quotePost: null,
    },
    {
      id: 6,
      displayName: 'Weather Bot',
      username: 'weatherupdates',
      verified: 'none',
      accountLabel: 'automated',
      content: '🌤️ Current conditions in San Francisco: 68°F, partly cloudy. High today: 72°F. Low tonight: 54°F. Updated every hour.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1531665672522747904/Q8g_j_k__400x400.jpg',
      timestamp: '1h',
      replies: '12',
      reposts: '45',
      likes: '234',
      views: '12K',
      quotePost: null,
    },
    {
      id: 4,
      displayName: 'Tech News Daily',
      username: 'technewsdaily',
      verified: 'none',
      content: 'Breaking: Major tech company announces revolutionary new product that experts say could change the industry forever.',
      image: null,
      avatar: 'https://pbs.twimg.com/profile_images/1498641868397903873/5M5a93aD_400x400.jpg',
      timestamp: '8h',
      replies: '234',
      reposts: '1.2K',
      likes: '5.6K',
      views: '890K',
      quotePost: {
        displayName: 'Sundar Pichai',
        username: 'sundarpichai',
        verified: 'blue',
        content: 'Excited to share what we\'ve been working on. More details coming soon!',
        image: null,
        avatar: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
        timestamp: '10h',
      },
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="min-h-screen bg-x-black text-x-white font-chirp">
      <div className="flex max-w-[1300px] mx-auto">
        {/* Left Sidebar */}
        <aside className="w-[68px] xl:w-[275px] h-screen sticky top-0 flex flex-col items-center xl:items-start px-2 py-3 border-r border-x-border">
          {/* Logo */}
          <div className="p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer mb-1">
            <XLogo className="w-8 h-8 text-x-white" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 mt-1">
            <NavItem icon={Home} label="Home" active />
            <NavItem icon={Search} label="Explore" />
            <NavItem icon={Bell} label="Notifications" notification="9+" />
            <NavItem icon={Mail} label="Messages" />
            <NavItem icon={Users} label="Communities" />
            <NavItem icon={User} label="Profile" />
            <NavItem icon={MoreHorizontal} label="More" />
          </nav>

          {/* Post Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-x-blue text-white font-bold py-3 px-4 rounded-full hover:bg-x-blue/90 transition-colors w-12 h-12 xl:w-[90%] xl:h-auto flex items-center justify-center"
          >
            <Plus className="w-6 h-6 xl:hidden" />
            <span className="hidden xl:block">Post</span>
          </button>

          {/* Export Buttons */}
          <div className="mt-2 flex flex-col gap-1.5 xl:w-[90%]">
            {/* Export Desktop HTML */}
            <button
              onClick={() => exportAsHTML(posts)}
              className="bg-transparent border border-x-border text-x-white font-bold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors w-12 h-12 xl:w-full xl:h-auto flex items-center justify-center gap-2"
              title="Export desktop view"
            >
              <Download className="w-5 h-5" />
              <span className="hidden xl:block text-sm">Export HTML</span>
            </button>

            {/* Export Mobile HTML */}
            <button
              onClick={() => exportMobileHTML(posts)}
              className="bg-transparent border border-x-border text-x-white font-bold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors w-12 h-12 xl:w-full xl:h-auto flex items-center justify-center gap-2"
              title="Export mobile-only view"
            >
              <Smartphone className="w-5 h-5" />
              <span className="hidden xl:block text-sm">Export Mobile</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={() => exportAsJSON(posts)}
              className="bg-transparent border border-x-border text-x-white font-bold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors w-12 h-12 xl:w-full xl:h-auto flex items-center justify-center gap-2"
              title="Export feed data as JSON"
            >
              <FileJson className="w-5 h-5" />
              <span className="hidden xl:block text-sm">Export JSON</span>
            </button>

            {/* Import JSON */}
            <label className="bg-transparent border border-x-border text-x-white font-bold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors w-12 h-12 xl:w-full xl:h-auto flex items-center justify-center gap-2 cursor-pointer">
              <Upload className="w-5 h-5" />
              <span className="hidden xl:block text-sm">Import JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    importFromJSON(e.target.files[0], setPosts);
                    e.target.value = '';
                  }
                }}
                className="hidden"
              />
            </label>
          </div>

          {/* User Profile */}
          <div className="mt-auto mb-3 p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-full bg-x-border flex items-center justify-center">
              <User className="w-5 h-5 text-x-gray" />
            </div>
            <div className="hidden xl:block flex-1 min-w-0">
              <p className="font-bold text-[15px] truncate">Your Name</p>
              <p className="text-x-gray text-[15px] truncate">@yourhandle</p>
            </div>
            <MoreHorizontal className="w-5 h-5 hidden xl:block text-x-gray" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen border-r border-x-border max-w-[600px]">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-x-black/80 backdrop-blur-md border-b border-x-border">
            <div className="px-4 py-3">
              <h1 className="text-xl font-bold">Home</h1>
            </div>
            <div className="flex">
              <button className="flex-1 py-4 hover:bg-white/10 transition-colors relative font-bold">
                For you
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-x-blue rounded-full" />
              </button>
              <button className="flex-1 py-4 hover:bg-white/10 transition-colors text-x-gray">
                Following
              </button>
            </div>
          </header>

          {/* Compose Box */}
          <div className="px-4 py-3 border-b border-x-border">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-x-border flex items-center justify-center">
                <User className="w-5 h-5 text-x-gray" />
              </div>
              <div className="flex-1">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full text-left text-x-gray text-xl py-3 hover:text-x-gray/80 transition-colors"
                >
                  What is happening?!
                </button>
                <div className="flex items-center justify-between pt-3 border-t border-x-border mt-3">
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors">
                      <Smile className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors">
                      <MapPin className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-x-blue hover:bg-x-blue/10 rounded-full transition-colors">
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-x-blue text-white font-bold px-4 py-1.5 rounded-full hover:bg-x-blue/90 transition-colors"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed */}
          <div>
            {posts.map((post) => (
              <div key={post.id} className="relative group">
                <Post post={post} />
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="absolute top-2 right-14 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/20 hover:bg-red-500/40 text-red-500 p-2 rounded-full"
                  title="Delete post"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[350px] h-screen sticky top-0 hidden lg:block py-3 px-6">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-x-gray" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-x-dark rounded-full py-3 pl-12 pr-4 text-[15px] text-x-white placeholder-x-gray focus:outline-none focus:ring-2 focus:ring-x-blue focus:bg-transparent border border-transparent focus:border-x-blue"
            />
          </div>

          {/* Subscribe Card */}
          <div className="bg-x-dark rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
            <p className="text-[15px] mb-3">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
            <button className="bg-x-blue text-white font-bold px-4 py-2 rounded-full hover:bg-x-blue/90 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Trends */}
          <div className="bg-x-dark rounded-2xl mb-4 overflow-hidden">
            <h2 className="text-xl font-bold px-4 py-3">What's happening</h2>
            <TrendItem category="Technology · Trending" title="ChatGPT" posts="125K" />
            <TrendItem category="Sports · Trending" title="#SuperBowl" posts="89K" />
            <TrendItem category="Entertainment · Trending" title="Taylor Swift" posts="234K" />
            <TrendItem category="Politics · Trending" title="Election 2024" posts="456K" />
            <TrendItem category="Tech · Trending" title="#AI" posts="67K" />
            <button className="w-full text-left px-4 py-3 text-x-blue hover:bg-white/[0.03] transition-colors">
              Show more
            </button>
          </div>

          {/* Who to follow */}
          <div className="bg-x-dark rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold px-4 py-3">Who to follow</h2>
            <WhoToFollow name="Bill Gates" username="BillGates" verified="blue" avatar="https://pbs.twimg.com/profile_images/1674501977169608705/y3a4VXE2_400x400.jpg" />
            <WhoToFollow name="NASA" username="NASA" verified="gold" avatar="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" />
            <WhoToFollow name="BBC News" username="BBCNews" verified="gray" avatar="https://pbs.twimg.com/profile_images/1529107486771933185/CiVMLYD2_400x400.jpg" />
            <button className="w-full text-left px-4 py-3 text-x-blue hover:bg-white/[0.03] transition-colors">
              Show more
            </button>
          </div>

          {/* Footer Links */}
          <div className="px-4 py-3 text-[13px] text-x-gray flex flex-wrap gap-x-3 gap-y-1">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <a href="#" className="hover:underline">More</a>
            <span>© 2024 X Corp.</span>
          </div>
        </aside>
      </div>

      {/* Floating Add Post Button (Mobile) */}
      <button
        onClick={() => setShowModal(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-x-blue text-white p-4 rounded-full shadow-lg hover:bg-x-blue/90 transition-colors z-40"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Modal */}
      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
          existingPosts={posts}
        />
      )}
    </div>
  );
}

export default App;
