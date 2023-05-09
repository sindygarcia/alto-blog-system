
## Getting Started

Install dependencies:
```bash
  npm install
```

Start the server:

```bash
npm run dev
```

Run Tests:
```bash
npm run test
```

Navigate to: http://localhost:3000

### Task Requirements
1. Create a micro-CMS system for a personal use blog using React JS and local storage.

- Follow Atomic design to create the components and pages.
- Provide the atomic design organization of the site.
- The site should look something like the image above. No sign-in or sign-up actions are required.
- No resources such as images or video uploads are required. This is a simple test, just use a CDN of your choice or copy the image’s URL from somewhere else.
- Videos? Youtube, of course :)
- Text content? Loren ipsum https://www.lipsum.com/
- Please consider including tests in your code.

2. Develop the following required pages and React JS components for the blog
- Blog’s logo: A Simple component to render the blog's logo.
- Main menu: A list of the site sections.
  * Home
  * About
  * Blog
  * Contact: Simply render contact information.
- Image hero component: Image component to render the site's hero image.
- Search bar: Searches the list of posts by name and returns a list of the post-matching strings entered. It should be an Auto-complete component. When clicking on one element the corresponding blog post gets loaded on the page.
- Post-creation/edition component: No WYSIWYG required, simple HTML post formatted is ok.
- Post-reading view page: Page to visualize the post's content.
- Post creation page: Form enter/edit post-HTML content.
- Posts list: Page to visualize all of the blog posts. Also, include a “add post” button here.
