describe('check that site has index file', () => {
  it('should have an index file', () => {
    cy.readFile('../index.html')
      .should('exist')
      .should('contain', '<!DOCTYPE html>');
  });
});

describe('check that index contains head and body', () => {
  it('should have a head', () => {
    cy.visit('index.html');
    cy.get('head')
      .should('exist');
  });

  it('should have a body', () => {
    cy.visit('index.html');
    cy.get('body')
      .should('exist');
  });
});

describe('check for common html elements', () => {
  it('should have a <footer> tag', () => {
    cy.visit('index.html');
    cy.get('footer')
      .should('exist');
  });

  it('should have a <button> tag', () => {
    cy.visit('index.html');
    cy.get('button')
      .should('exist');
  });


  it('should have a <p> tag', () => {
    cy.visit('index.html');
    cy.get('p')
      .should('exist');
  });

  it('should have at least one <a> tag, all with the href attribute', () => {
    cy.visit('index.html');
    cy.get('a')
      .should('exist')
      .should('have.attr', 'href');
  });

  it('should have an <h1> tag', () => {
    cy.visit('index.html');
    cy.get('h1')
      .should('exist');
  });
});

describe('check for images', () => {
  it('should have at least 1 <img> tags, ignore if you used css background-image instead', () => {
    cy.visit('index.html');
    cy.get('img')
      .should('exist')
      .should('be.visible')
      .should(($imgs) => $imgs.map((_i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
      .its('length')
      .should('be.gte', 1);
  });
});

describe('check for google fonts', () => {
  it('at least one <link> tag should point to fonts.googleapis.com (ignore if using other font system)', () => {
    cy.visit('index.html');
    cy.get('head link[href*="fonts.googleapis.com"][rel="stylesheet"]')
      .should('exist');
  });
});

describe('check for responsiveness', () => {
  const sizes = ['iphone-x', 'ipad-2', [1024, 768]];

  sizes.forEach(size => {
    it(`should have no horizontal overflow on ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit('index.html');
      cy.window().then(window => {
        // make sure scrollwidth is at most viewport width
        cy.get('body')
          .invoke('outerWidth')
          .should('be.most', window.innerWidth);
      });
    });

    it(`should have proper nav type on ${size} - `, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit('index.html');
      cy.window().then(window => {
        // make sure scrollwidth is at most viewport width
        // cy.get('.main-nav__mobile-nav-link-label')
        cy.get('nav.mobile')
          .should(window.innerWidth > 640 ? 'not.be.visible' : 'be.visible')
      });
    });
  });

  it('should have at least one @media query and switch a flex box into column direction', () => {
    cy.readFile('../style.css')
      .should('exist')
      .should('contain', 'display: flex;')
      .should('contain', '@media')
      .should('contain', 'flex-direction: column;')
  });
});
