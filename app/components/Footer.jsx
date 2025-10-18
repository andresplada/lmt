import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="footer-content">
              {/* Main Content */}
              <div className="footer-main">
                <div className="footer-brand">
                  <div className="footer-logos-row">
                    <NavLink prefetch="intent" to="/" end className="footer-logo-link">
                      <img 
                        src="/logo-cdp.png" 
                        alt="Centro Deportivo Luz Mery Tristan"
                        className="footer-logo"
                        style={{
                          height: '3rem',
                          width: 'auto',
                        }}
                      />
                    </NavLink>
                    
                    {/* Activity Logos in same row */}
                    <img 
                      src="/logo-gym.png" 
                      alt="Gimnasio"
                      className="footer-logo"
                    />
                    <img 
                      src="/logo-patinaje.png" 
                      alt="Patinaje"
                      className="footer-logo"
                    />
                    <img 
                      src="/logo-natacion.png" 
                      alt="Natación"
                      className="footer-logo"
                    />
                    <img 
                      src="/logo-summer.png" 
                      alt="Summer"
                      className="footer-logo"
                    />
                    <img 
                      src="/logo-tienda.png" 
                      alt="Tienda"
                      className="footer-logo"
                    />
                  </div>
                  
                  <div className="footer-brand-text">
                    <h3 className="footer-brand-name">Centro Deportivo Luz Mery Tristan</h3>
                    <p className="footer-description">
                      Formando campeones y promoviendo los valores del deporte en nuestra comunidad.
                    </p>
                  </div>
                </div>

                <div className="footer-links-grid">

                  {/* Contact Info */}
                  <div className="footer-links-column">
                    <div className="footer-contact">
                      <div className="contact-info">
                        <span className="contact-label">Horarios</span>
                        <span className="contact-value">5am - 8pm</span>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="footer-links-column">
                    <a 
                      href="https://www.instagram.com/lmt_centrodeportivo/" 
                      aria-label="Instagram" 
                      className="social-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img 
                        src="/insta.png" 
                        alt="Instagram" 
                        className="social-icon"
                        style={{
                          height: '1.5rem',
                          width: 'auto',
                        }}
                      />
                    </a>
                  </div>
                  <p className="footer-copyright">
                  © 2024 Centro Deportivo Luz Mery Tristan
                </p>
                </div>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  const items = (menu || FALLBACK_FOOTER_MENU).items.filter(item => item.url);
  
  return (
    <nav className="footer-legal" role="navigation">
      {items.map((item, index) => {
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        
        return (
          <span key={item.id} style={{ display: 'contents' }}>
            {index > 0 && <span className="footer-divider">·</span>}
            {isExternal ? (
              <a href={url} rel="noopener noreferrer" target="_blank" className="footer-legal-link">
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                prefetch="intent"
                className="footer-legal-link"
                to={url}
              >
                {item.title}
              </NavLink>
            )}
          </span>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Política de Privacidad',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Política de Reembolso',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Política de Envío',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Términos de Servicio',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
