# genieframework.com documentation

This repository merges the docs from genieframework.com and learn.geniecloud.io into a single site. It is a Nuxt site built with the [Docus](docus.dev) template.

# Running locally

To run the site locally, execute

```bash
npm install
npm run dev
```

# Deploying to production

On each commit to `main`, the workflow in `.workflows/deploytogfcom.yml` builds the site as a static site and copies it to the `/docs` folder on the [GenieFramework.com](github.com/genieframework/genieframework.com). After that, the pages on the GenieFramework.com repository are deployed to Netlify at [https://nimble-heliotrope-cc0270.netlify.app/](https://nimble-heliotrope-cc0270.netlify.app/)

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
