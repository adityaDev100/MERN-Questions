# What is Static Site Generation (SSG)?
Static Site generation renders a page at build time. This means that for SSG, the process of creating the web page occurs before the site is launched and is accessed by users. Look at it this way: the HTML and content for each web page are pre-rendered or pre-generated, so they are ready and static (unchanging) when the website is deployed to a web server.

When a user visits a page on your site, the pre-rendered or pre-generated static HTML is delivered immediately to their browser, with no additional processing at the time of the user’s request.


# Pros of Using SSG with Next.js:
Helps in SEO:
CDN-friendly:
Reduced Server Load: 

# Cons of using SSG with Next.js:
Limited Real-Time Update: With SSG, you cannot effectively change or make real-time updates on your website because any update will require a rebuild, causing delays.
Build Time Overhead: The build process can become time-consuming on websites with numerous pages.
Complex Authentication: If your Next.js applications require authentication and logic, it can be challenging to use SSG.

# SSG Example : 

        // pages/posts.js
        import React from "react";
        const Posts = ({ posts }) => (
        <div>
            <h1>Blog Posts</h1>
            <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
            </ul>
        </div>
        );
        export default Posts;
        export async function getStaticProps() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return {
            props: {
            posts: data,
            },
        };
        }



# What is Server-Side Rendering (SSR)?
Unlike static site generation, server-side rendering focuses on or renders a page in real-time. In this scenario, when you visit a website, the computer that hosts the website creates the page for you, like a chef preparing a dish as you order it at a restaurant.

SSR is great for web pages that need to show real-time information, updates, or content that frequently changes. In the same way, a restaurant can customize an order to your specific preference; that’s the same way a server-side rendered website prepares the page you want to visit as soon as you hit ‘Enter’.


# Pros of using SSR with Next.js:
Real-Time Updates and Secure Data: SSR allows your Next.js applications to have secure user authentication with real-time updates, which ensures data privacy and website flexibility.
Improved SEO: SSR also ensures better search engine optimization by delivering fully rendered HTML pages.
Server-Side Data Fetching: If your application requires data processing on the server, SSR makes it seamless to fetch server-side data or external APIs.


# Cons of Using SSR with Next.js:
Time-Consuming Implementations: Using SSR can be very time-consuming because it requires features like server-side code management, data fetching, etc.
Limited Use Cases: Compared to SSG, SSR is the least used rendering method because most websites have static content and do not require real-time updates.
Increased Server Load: SSR can strain server resources, especially when there is a high volume of user requests, potentially affecting the Next.js application’s scalability and performance.


# Example : 

        // pages/about.js
        import React from "react";
        const About = ({ serverData }) => (
        <div>
            <h1>About Page</h1>
            <p>{serverData}</p>
        </div>
        );
        export default About;
        export async function getServerSideProps() {
        const serverData = "This data is fetched on the server side.";
        return {
            props: {
            serverData,
            },
        };
}