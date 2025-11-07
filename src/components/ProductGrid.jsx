import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function ProductGrid() {
  const products = [
    {
      title: 'Apple Watch Series 11',
      tagline: 'The ultimate watch for a healthy life.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop&q=100',
      link: '#',
    },
    {
      title: 'iPad Pro',
      tagline: 'Advanced AI performance and game-changing capabilities.',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop&q=100',
      link: '#',
    },
    {
      title: 'AirPods Pro 3',
      tagline: "The world's best in-ear Active Noise Cancellation.1",
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop&q=100',
      link: '#',
    },
    {
      title: 'Apple Watch SE 3',
      tagline: 'Walk it. Talk it. Track it. Love it.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&q=100',
      link: '#',
    },
    {
      title: 'MacBook Air',
      tagline: 'Sky blue colour. Sky high performance with M4.',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=800&fit=crop&q=100',
      link: '#',
    },
    {
      title: 'Apple Trade In',
      tagline: "Upgrade and save. It's that easy.",
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop&q=100',
      link: '#',
      cta: 'Get your estimate',
    },
  ]

  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1, once: true })
  const [tvRef, isTvVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section 
      className="w-full relative"
      style={{
        backgroundColor: 'transparent',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      <div className="relative z-10">
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full"
        style={{ gap: '2px' }}
      >
        {products.map((product, index) => {
          const [productRef, isProductVisible] = useScrollAnimation({ 
            threshold: 0.1, 
            once: true,
            rootMargin: '0px 0px -100px 0px'
          })
          
          return (
            <div
              key={index}
              ref={productRef}
              className={`relative bg-gray-100 overflow-hidden group cursor-pointer ${isProductVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
              style={{ 
                height: 'calc(100vh / 3)',
                minHeight: 'calc(100vh / 3)',
                transitionDelay: `${index * 0.05}s`
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                <h3 
                  className="product-title font-semibold tracking-tight"
                  style={{ 
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 600,
                    fontSize: '32px',
                    letterSpacing: '-0.003em',
                    lineHeight: '1.125',
                    marginBottom: '6px'
                  }}
                >
                  {product.title}
                </h3>
                <p 
                  className="product-tagline font-light"
                  style={{ 
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 400,
                    fontSize: '19px',
                    lineHeight: '1.4211',
                    marginBottom: '14px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {product.tagline}
                </p>
                <div className="flex gap-6">
                  <a
                    href={product.link}
                    className="transition-colors underline decoration-1 underline-offset-2"
                    style={{ 
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '17px',
                      letterSpacing: '-0.022em',
                      color: '#0071e3',
                      textDecorationColor: '#0071e3'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#0077ed'}
                    onMouseLeave={(e) => e.target.style.color = '#0071e3'}
                  >
                    Learn more
                  </a>
                  {product.cta ? (
                    <a
                      href={product.link}
                      className="transition-colors underline decoration-1 underline-offset-2"
                      style={{ 
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        letterSpacing: '-0.022em',
                        color: '#0071e3',
                        textDecorationColor: '#0071e3'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#0077ed'}
                      onMouseLeave={(e) => e.target.style.color = '#0071e3'}
                    >
                      {product.cta}
                    </a>
                  ) : (
                    <a
                      href={product.link}
                      className="transition-colors underline decoration-1 underline-offset-2"
                      style={{ 
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        letterSpacing: '-0.022em',
                        color: '#0071e3',
                        textDecorationColor: '#0071e3'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#0077ed'}
                      onMouseLeave={(e) => e.target.style.color = '#0071e3'}
                    >
                      Buy
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom Section - Full Width */}
      <div 
        ref={tvRef}
        className={`bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden ${isTvVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
        style={{ 
          height: 'calc(100vh / 3)',
          minHeight: 'calc(100vh / 3)',
          marginTop: '2px'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-12 text-white h-full">
          <div className="mb-6 md:mb-0">
            <h3 
              className="font-semibold tracking-tight"
              style={{ 
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '-0.003em',
                lineHeight: '1.1',
                marginBottom: '6px'
              }}
            >
              Apple TV+
            </h3>
            <p 
              className="font-light"
              style={{ 
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 400,
                fontSize: '21px',
                lineHeight: '1.381',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Watch exclusive Apple Originals.
            </p>
          </div>
          <a
            href="#"
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '17px',
              color: '#0071e3'
            }}
          >
            Learn more
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProductGrid
