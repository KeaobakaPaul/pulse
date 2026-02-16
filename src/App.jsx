import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Plus, Bell, Search, Home, User, Settings, TrendingUp, Image as ImageIcon, Send } from 'lucide-react';

export default function PulseSocial() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Initialize with sample posts
  useEffect(() => {
    setPosts([
      {
        id: 1,
        author: 'Sarah Chen',
        username: '@sarahchen',
        avatar: '🎨',
        time: '2h ago',
        content: 'Just shipped a new feature! The feeling when your code works on the first deployment is unmatched 🚀',
        likes: 234,
        comments: 18,
        shares: 12,
        liked: false,
        bookmarked: false,
        image: null
      },
      {
        id: 2,
        author: 'Marcus Webb',
        username: '@mwebb',
        avatar: '🎭',
        time: '4h ago',
        content: 'Hot take: The best design is invisible. You only notice it when it\'s bad.',
        likes: 892,
        comments: 67,
        shares: 45,
        liked: true,
        bookmarked: false,
        image: null
      },
      {
        id: 3,
        author: 'Luna Park',
        username: '@lunapark',
        avatar: '🌙',
        time: '6h ago',
        content: 'Working on something exciting. Can\'t share yet but here\'s a sneak peek of the vibes ✨',
        likes: 456,
        comments: 34,
        shares: 23,
        liked: false,
        bookmarked: true,
        image: '🎨'
      },
      {
        id: 4,
        author: 'Dev Kumar',
        username: '@devkumar',
        avatar: '💻',
        time: '8h ago',
        content: 'Remember: Perfect code is the enemy of shipped code. Ship it, iterate, improve. That\'s the cycle.',
        likes: 1247,
        comments: 89,
        shares: 156,
        liked: true,
        bookmarked: true,
        image: null
      }
    ]);
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, bookmarked: !post.bookmarked }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: 'You',
        username: '@yourhandle',
        avatar: '👤',
        time: 'Just now',
        content: newPostText,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        bookmarked: false,
        image: null
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
      setShowNewPost(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      fontFamily: '"Archivo", -apple-system, sans-serif',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Animated Background Grid */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Gradient Orbs */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 71, 133, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'float 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(71, 183, 255, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'float 15s ease-in-out infinite reverse'
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .post-card {
          animation: slideUp 0.4s ease-out;
        }
        
        .icon-btn {
          transition: all 0.2s ease;
        }
        
        .icon-btn:hover {
          transform: scale(1.1);
        }
        
        .icon-btn:active {
          transform: scale(0.95);
        }
        
        .nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(8px);
        }
        
        .post-card {
          transition: all 0.3s ease;
        }
        
        .post-card:hover {
          background: rgba(255, 255, 255, 0.03) !important;
          transform: translateY(-2px);
        }
        
        .pulse-btn {
          position: relative;
          overflow: hidden;
        }
        
        .pulse-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .pulse-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        textarea:focus {
          outline: none;
        }
        
        .like-animation {
          animation: pulse 0.3s ease;
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', display: 'flex' }}>
        
        {/* Sidebar Navigation */}
        <div style={{
          width: '280px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          padding: '32px 24px',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Logo */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '900',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ff4785, #47b7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: '"Archivo", sans-serif'
            }}>
              PULSE
            </div>
            <div style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.1em',
              marginTop: '4px',
              fontFamily: '"JetBrains Mono", monospace'
            }}>
              SOCIAL NETWORK
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { icon: Home, label: 'Home', id: 'home' },
              { icon: TrendingUp, label: 'Trending', id: 'trending' },
              { icon: Bell, label: 'Notifications', id: 'notifications', badge: notifications },
              { icon: Bookmark, label: 'Saved', id: 'saved' },
              { icon: User, label: 'Profile', id: 'profile' },
              { icon: Settings, label: 'Settings', id: 'settings' }
            ].map(({ icon: Icon, label, id, badge }) => (
              <div
                key={id}
                className="nav-item"
                onClick={() => setActiveTab(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: activeTab === id ? 'rgba(255, 71, 133, 0.1)' : 'transparent',
                  border: activeTab === id ? '1px solid rgba(255, 71, 133, 0.3)' : '1px solid transparent',
                  position: 'relative'
                }}
              >
                <Icon size={22} color={activeTab === id ? '#ff4785' : '#ffffff'} />
                <span style={{
                  fontSize: '16px',
                  fontWeight: activeTab === id ? '600' : '400',
                  color: activeTab === id ? '#ff4785' : '#ffffff'
                }}>
                  {label}
                </span>
                {badge > 0 && (
                  <div style={{
                    position: 'absolute',
                    right: '16px',
                    background: '#ff4785',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    minWidth: '20px',
                    textAlign: 'center'
                  }}>
                    {badge}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* New Post Button */}
          <button
            className="pulse-btn"
            onClick={() => setShowNewPost(!showNewPost)}
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '16px',
              background: 'linear-gradient(135deg, #ff4785, #ff6b9d)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(255, 71, 133, 0.3)'
            }}
          >
            <Plus size={20} />
            New Pulse
          </button>
        </div>

        {/* Main Feed */}
        <div style={{
          flex: 1,
          padding: '32px 24px',
          maxWidth: '700px',
          minHeight: '100vh'
        }}>
          {/* Header */}
          <div style={{
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h1 style={{
                fontSize: '28px',
                fontWeight: '700',
                margin: 0,
                letterSpacing: '-0.02em'
              }}>
                {activeTab === 'home' ? 'Your Feed' : 
                 activeTab === 'trending' ? 'Trending' :
                 activeTab === 'notifications' ? 'Notifications' :
                 activeTab === 'saved' ? 'Saved Posts' :
                 activeTab === 'profile' ? 'Your Profile' : 'Settings'}
              </h1>
              <p style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                margin: '4px 0 0 0'
              }}>
                {posts.length} pulses
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '12px',
              borderRadius: '12px',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <Search size={20} color="rgba(255, 255, 255, 0.7)" />
            </div>
          </div>

          {/* New Post Composer */}
          {showNewPost && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 71, 133, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px',
              animation: 'slideUp 0.3s ease-out'
            }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff4785, #47b7ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0
                }}>
                  👤
                </div>
                <div style={{ flex: 1 }}>
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="What's on your mind?"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '16px',
                      resize: 'none',
                      minHeight: '100px',
                      fontFamily: '"Archivo", sans-serif'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div className="icon-btn" style={{
                        padding: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}>
                        <ImageIcon size={18} color="rgba(255, 255, 255, 0.7)" />
                      </div>
                    </div>
                    <button
                      onClick={handleNewPost}
                      style={{
                        padding: '10px 24px',
                        background: newPostText.trim() ? 'linear-gradient(135deg, #ff4785, #ff6b9d)' : 'rgba(255, 255, 255, 0.1)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: newPostText.trim() ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      disabled={!newPostText.trim()}
                    >
                      <Send size={16} />
                      Post Pulse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts Feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="post-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Post Header */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff4785, #47b7ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0
                  }}>
                    {post.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '2px'
                    }}>
                      {post.author}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center'
                    }}>
                      <span>{post.username}</span>
                      <span>•</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  {post.content}
                </div>

                {/* Post Image */}
                {post.image && (
                  <div style={{
                    width: '100%',
                    height: '300px',
                    background: 'linear-gradient(135deg, rgba(255, 71, 133, 0.1), rgba(71, 183, 255, 0.1))',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {post.image}
                  </div>
                )}

                {/* Post Actions */}
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div
                    className="icon-btn"
                    onClick={() => handleLike(post.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      color: post.liked ? '#ff4785' : 'rgba(255, 255, 255, 0.6)',
                      fontSize: '14px'
                    }}
                  >
                    <Heart size={20} fill={post.liked ? '#ff4785' : 'none'} />
                    <span>{post.likes}</span>
                  </div>
                  <div
                    className="icon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '14px'
                    }}
                  >
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </div>
                  <div
                    className="icon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '14px'
                    }}
                  >
                    <Share2 size={20} />
                    <span>{post.shares}</span>
                  </div>
                  <div
                    className="icon-btn"
                    onClick={() => handleBookmark(post.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      color: post.bookmarked ? '#47b7ff' : 'rgba(255, 255, 255, 0.6)',
                      marginLeft: 'auto'
                    }}
                  >
                    <Bookmark size={20} fill={post.bookmarked ? '#47b7ff' : 'none'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Trending */}
        <div style={{
          width: '340px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          padding: '32px 24px',
          borderLeft: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}>
              Trending Topics
            </h3>
            {[
              { topic: 'Web Development', count: '12.5K' },
              { topic: 'AI & Machine Learning', count: '8.2K' },
              { topic: 'Design Systems', count: '6.7K' },
              { topic: 'Startup Life', count: '5.3K' },
              { topic: 'Remote Work', count: '4.1K' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '12px 0',
                  borderBottom: index < 4 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '4px'
                }}>
                  #{item.topic}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                  {item.count} pulses
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}>
              Suggested Follows
            </h3>
            {[
              { name: 'Alex Rivera', username: '@alexr', avatar: '🚀' },
              { name: 'Jamie Cole', username: '@jamiec', avatar: '✨' },
              { name: 'Taylor Swift', username: '@tswift', avatar: '🎵' }
            ].map((user, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: index < 2 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff4785, #47b7ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {user.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    {user.username}
                  </div>
                </div>
                <button style={{
                  padding: '6px 16px',
                  background: 'rgba(255, 71, 133, 0.1)',
                  border: '1px solid rgba(255, 71, 133, 0.3)',
                  borderRadius: '8px',
                  color: '#ff4785',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
