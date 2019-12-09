import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`{
      allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "menu-1"}}) {
        edges {
          node {
            slug
            name
            items {
              title
              url
              object_slug
            }
          }
        }
      }
    }
  `}
    render={data => (
      <nav className="navbar is-transparent navbar-inverse">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item navbar-brand neon-text" href="#home">
              Yorick Brown
            </Link>
          </div>
          <div className="navbar-start">
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <Link
                className="navbar-item"
                to={item.object_slug}
                key={item.object_slug}
              >
                <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
