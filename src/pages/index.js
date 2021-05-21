import React from "react";
import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { RichText } from "prismic-reactjs";
import { graphql /*, Link*/ } from "gatsby";
import {connect} from 'react-redux';


import Phone from "components/phone/Phone";
// import Button from "components/_ui/Button";
// import About from "components/About";
// import Layout from "components/Layout";
// import ProjectCard from "components/ProjectCard";

import '../styles/style.css'



const RenderBody = ({ home, projects, meta }) => (
    <Phone />
    // <>
    //     <Helmet
    //         title={meta.title}
    //         titleTemplate={`%s | ${meta.title}`}
    //         meta={[
    //             {
    //                 name: `description`,
    //                 content: meta.description,
    //             },
    //             {
    //                 property: `og:title`,
    //                 content: meta.title,
    //             },
    //             {
    //                 property: `og:description`,
    //                 content: meta.description,
    //             },
    //             {
    //                 property: `og:type`,
    //                 content: `website`,
    //             },
    //             {
    //                 name: `twitter:card`,
    //                 content: `summary`,
    //             },
    //             {
    //                 name: `twitter:creator`,
    //                 content: meta.author,
    //             },
    //             {
    //                 name: `twitter:title`,
    //                 content: meta.title,
    //             },
    //             {
    //                 name: `twitter:description`,
    //                 content: meta.description,
    //             },
    //         ].concat(meta)}
    //     />
    //     <div className="hero">
    //         <>
    //             {RichText.render(home.hero_title)}
    //         </>
    //         <a href={home.hero_button_link.url}
    //            target="_blank" rel="noopener noreferrer">
    //             <Button>
    //                 {RichText.render(home.hero_button_text)}
    //             </Button>
    //         </a>
    //     </div>
    //     <section>
    //         {projects.map((project, i) => (
    //             <ProjectCard
    //                 key={i}
    //                 category={project.node.project_category}
    //                 title={project.node.project_title}
    //                 description={project.node.project_preview_description}
    //                 thumbnail={project.node.project_preview_thumbnail}
    //                 uid={project.node._meta.uid}
    //             />
    //         ))}
    //         <Link to={"/work"}>
    //             See more work <span>&#8594;</span>
    //         </Link>
    //     </section>
    //     <section>
    //         {RichText.render(home.about_title)}
    //         <About
    //             bio={home.about_bio}
    //             socialLinks={home.about_links}
    //         />
    //     </section>
    // </>
);

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

const IndexPage = (...data) => {
    let props = data[0];
    //Required check for no data being returned
    const doc = props.data.prismic.allHomepages.edges.slice(0, 1).pop();
    const projects = props.data.prismic.allProjects.edges;
    const meta = props.data.site.siteMetadata;

    if (!doc || !projects) return null;


    return (
        <div>
            <RenderBody home={doc.node} projects={projects} meta={meta} />
            
        </div>
        // <Layout>
        // </Layout>
    )
}




export default connect(null, null)(IndexPage)