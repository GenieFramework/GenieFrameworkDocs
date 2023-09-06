# genieframework.com documentation

This repository merges the docs from genieframework.com and learn.geniecloud.io into a single site. It is a Nuxt site built with the [Docus](docus.dev) template.

To preview the site with all the work in progress, see the [Staging site](https://github.com/GenieFramework/GenieFrameworkDocs/pull/31) pull request.

# Running locally

To run the site locally, execute

```bash
npm install
npm run dev
```

# Deploying to production

On each commit to `main`, the site will be automatically deployed to learn.genieframework.com. When a pull request is created, a new preview site will be automatically linked in the comments.

# Adding content

To add a new page, write its content into the `content/` folder in the relevant path.

# API docs

The API docs in the Reference page are built in [this repo](https://github.com/GenieFramework/APIDocs)

# Code examples

The content in the Code Examples page is built in [this repo](https://github.com/BuiltWithGenie/CodeExamples).

# Contributing

If you would like to contribute with a new article or fix mistakes, please open an issue with your suggested changes or open a new pull request. The team will review the text and make or request any necessary changes to make it fit better with the rest of the documentation. 

It is recommended that you ask first, either in an issue or on Discord, before contributing new materials to make sure they are a good fit. Here are some writing guidelines:

- Be clear and concise: avoid jargon and complex sentences. Assume the reader is new to the topic.
- Consistent terminology: use consistent terms for the same concept throughout the documentation.
- Active voice: use the active voice as much as possible, e.g., "You can configure settings" rather than "Settings can be configured."
- Linking: provide links to relevant articles, guides, or documentation pages for further reading.
