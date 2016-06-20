---
label: Overview
title: Using the Style Guide
---

## Theme Layers

These are embedded inside Wordpress's theme files. Layout adjustments from full page width to a page with just a left-hand sidebar can be made inside of the admin view. 

## Base

Contains all paragraph, image, font, heading, and color styles that apply to all blocks.

## Columns

These are columns that can live inside of page containers. Inner column block styles can go inside of columns. All columns must be wrapped in a <code>.contents</code> div, which acts as the column container and sets the style to <code>display:inline-table</code>, <code>max-height:100%</code>, and <code>width:100%</code>.  

## Inner Columns Blocks

These are buttons, icons, images, and sections. Each grouping of the styles are meant to be treated as individual components that can be blended together inside of columns. 

## Outer Columns Blocks

These are the navgiation blocks, tables, the timeline, and dropdown headings. Outer column blocks should always live outside of columns. 

## School Card Sort

Kept separate because it's only used on the school cards page for right now. There are plans to extend the school card pattern to other aspects of the site. 

### Homepage Slider

Kept separate for now because it's only used on the homepage.