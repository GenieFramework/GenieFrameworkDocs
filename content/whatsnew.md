---
title: What's new
description: See what's new with Genie Builder and Genie Framework
---


# Genie change log


## Genie Builder 1.1.1 - 2024-11-21

### Added
- Support for new versions of GenieBuilder.jl, Stipple

### Fixed
- Support for Julia PATH


## Genie Builder 1.0.38 - 2024-11-07

### Added
- New integrated Theme Editor

### Fixed
- Uploader component overflow on canvas
- Fixed UI issues in right-side panel



## Genie Builder 1.0.37 - 2024-10-23

### Fixed
- AI Assistant answers can be copied to clipboard


## Genie Builder 1.0.36 - 2024-09-27

### Added
- Improved information message dialogs

### Fixed
- Stop GenieBuilder server before running Update command


## Genie Builder 1.0.35 - 2024-09-26

### Added
- New TreeMap chart component
- New Link component
- New Container component

### Fixed
- Small fixes in multiple components


###################################################

## Genie Builder 1.0.33 - 2024-09-23

### Added
- New command to sign-out from Genie Builder

### Fixed
- Better handling of errors in no-code editor's canvas
- Better support for Badge and Popup-Proxy components
- Display "Use Binding" button in Chart Properties panel when app doesn't bindings with suitable data types

## Genie Builder 1.0.32 - 2024-09-17
### Added
- Improved handling and user notification of issues with Julia path
- Extended support for data types in bindings (including matrices and dictionaries)
- New toolbar button to toggle component frame visibility (dashed border)
- Enabled Tab components
- Added support for popup-proxy component
- Direct assignment of bindings to Chart's data, layout, and config properties
- Properties panel: Binding dropdowns now list all supported types for any given property

### Fixed
- Corrected wrong "pro" badge on some features
- Enhanced UI style for depicting component errors on no-code canvas
- Improved styling on buttons and scrollbars
- Fixed binding connector curves to prevent exceeding no-code canvas area
- Resolved error when switching Chart's boolean properties to binding mode

## Genie Builder 1.0.31 - 2024-08-29
### Added
- Introduced new control-flow attributes (if, else, for loop)
- Extended support for more vector-based data types
- Implemented search box in add-property dialog
- Added nested components support in no-code editor
- Introduced support for custom components
- Added v-html attribute in paragraphs

### Fixed
- Resolved bugs in multiple components
- Implemented click-outside functionality to close add-property dialog
