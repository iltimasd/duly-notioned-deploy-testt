# Duly Notioned

Using Vercel to drop-in your analytics/page view tracking to embeds! 

- [Duly Notioned](#duly-notioned)
    - [Right now, this only uses Simple Analytics, the service I personally use because of their respect of users' privacy](#right-now-this-only-uses-simple-analytics-the-service-i-personally-use-because-of-their-respect-of-users-privacy)
- [Why!](#why)
- [How to use this!](#how-to-use-this)

This was primarily built for use in Notion, but this could be used in other services that will embed sites. 

### Right now, this only uses Simple Analytics, the service I personally use because of their respect of users' privacy
But I will accept PRs to include other services

# Why!

I wanted to track some public Notion pages and see how much traction the pages were getting. As flexible as Notion is, there's no way to throw some scripts into a page (which is probably for the best). So this approach uses Notion's ability to embed sites into pages. All this does is embed an empty page that has the scripts for analytics. If you had a one page you wanted to track, all you need to do is just serve a static HTML somewhere. However, if you want to track multiple pages, then we will need something that can scale better than making an HTML file per page.

In order to scale, we use Vercel Serverless Functions to serve the HTML file. It's not dynamically creating the HTML file, but by using the serverless functions we have the foundation to modify the file per request later.

The last piece of this system uses url rewriting. Because the web version of Notion sanitizes the URL, we can't use url params or hashes, usually the indentifier to basic tracking. So instead we use pages or url paths as an identifier. So instead of maybe embeding `mytrackingapp.com/?ref=name-of-Notion-page` (which would get sanitized to embedding `mytrackingapp.com/`) we would embed `mytrackingapp.com/name-of-Notion-page`. Usually the static approach might mean making a bunch of folder with the path name, all with the HTML file inside. But since we're using Vercel we can rewrite all URLs to point to an API, where we serve that HTML file.

# How to use this!

Pretty easy, all you have to do is click this button to deploy this project to Vercel!

Once deployed, take note of the production URL. Then just embed the URL, with the path being the identifier you'd like to use like `mytrackingapp.vercel.app/name-of-Notion-page`