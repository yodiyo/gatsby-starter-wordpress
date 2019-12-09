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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse navbar-fixed-top">
        <Link to="/" className="navbar-item navbar-brand neon-text" href="#home">
          Yorick Brown
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-right">
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <li className="nav-item">
                <Link
                  activeClassName="active"
                  className="nav-link"
                  to={item.object_slug}
                  key={item.object_slug}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )}
  />
)

export default Navbar
