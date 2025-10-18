import { Suspense } from 'react';
import { Await, NavLink, useAsyncValue, useLocation } from 'react-router';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { useAside } from '~/components/Aside';

/**
 * @param {HeaderProps}
 */
export function Header({ header, isLoggedIn, cart, publicStoreDomain }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { shop, menu } = header;

  return (
    <header className={`header ${isHomePage ? 'header-home' : 'header-other'}`}>
      <NavLink prefetch="intent" to="/" style={(props) => activeLinkStyle(props, isHomePage)} end>
        <img
          src="/logo-top.png"
          alt="Luz Mery Tristan Fitness Center"
          style={{
            position: 'relative',
            height: '2.4rem',
            width: 'auto',
            // top: '0.5rem',
          }}
        />
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
        isHomePage={isHomePage}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} isHomePage={isHomePage} />
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 *   isHomePage?: boolean;
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
  isHomePage = false,
}) {
  const className = `header-menu-${viewport}`;
  const { close } = useAside();

  const overrideMenu = {
    items: [
      {
        "id": "1",
        "resourceId": null,
        "tags": [],
        "title": "Nosotros",
        "type": "NOSOTROS",
        "url": isHomePage ? "#features-section" : "https://luzmerytristan.com/nosotros",
        "items": []
      },
      {
        "id": "2",
        "resourceId": null,
        "tags": [],
        "title": "Servicios",
        "type": "SERVICIOS",
        "url": isHomePage ? "#nuestras-actividades" : "https://luzmerytristan.com/servicios",
        "items": []
      },
      {
        "id": "3",
        "resourceId": null,
        "tags": [],
        "title": "Contacto",
        "type": "EVENTOS",
        "url": "https://api.whatsapp.com/send?phone=573155502034&text=%F0%9F%91%8B%20Hola%20quisiera%20mas%20información%20",
        "items": []
      },
    ]
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={(props) => activeLinkStyle(props, isHomePage)}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(overrideMenu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // Handle anchor links for scroll navigation and external links
        if (item.url.startsWith('#') && isHomePage) {
          // For anchor links on home page, handle scroll
          return (
            <a
              key={item.id}
              className="header-menu-item"
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                close();
                const element = document.querySelector(item.url);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={activeLinkStyle({ isActive: false, isPending: false }, isHomePage)}
            >
              {item.title}
            </a>
          );
        }

        // Handle external links (like WhatsApp)
        if (item.url.startsWith('http')) {
          return (
            <a
              key={item.id}
              className="header-menu-item"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              style={activeLinkStyle({ isActive: false, isPending: false }, isHomePage)}
            >
              {item.title}
            </a>
          );
        }

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={(props) => activeLinkStyle(props, isHomePage)}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'> & {isHomePage?: boolean}}
 */
function HeaderCtas({ isLoggedIn, cart, isHomePage = false }) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle isHomePage={isHomePage} />
      {/* <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink> */}
      {/* <SearchToggle /> */}
      {/* <CartToggle cart={cart} /> */}
      <ContactButton isHomePage={isHomePage} />
    </nav>
  );
}

function HeaderMenuMobileToggle({ isHomePage = false }) {
  const { open } = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
      style={{ color: isHomePage ? 'white' : '#000' }}
    >
      <h3>☰</h3>
    </button>
  );
}

function ContactButton({ isHomePage = false }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573155502034&text=%F0%9F%91%8B%20Hola%20quisiera%20mas%20información%20"
      className={`contact-button ${isHomePage ? 'contact-button-home' : 'contact-button-other'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact-button-content">
        <div className="contact-button-icon">
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </div>
        <span className="contact-button-text">Contáctanos</span>
      </div>
    </a>
  );
}

function SearchToggle() {
  const { open } = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({ count }) {
  const { open } = useAside();
  const { publish, shop, cart, prevCart } = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({ cart }) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'Nosotros',
      type: 'PAGE',
      url: '/about',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Programas',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Eventos',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Contacto',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 * @param {boolean} isHomePage
 */
function activeLinkStyle({ isActive, isPending }, isHomePage = false) {
  return {
    fontWeight: '400',
    color: isHomePage ? 'white' : '#000',
    zIndex: 100,
    marginRight: '0.5rem',
    fontSize: '0.92rem',
    letterSpacing: '0.02rem',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
