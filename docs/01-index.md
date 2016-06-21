---
label: Overview
title: Using the Style Guide
---

## Theme Layers

These are embedded inside Wordpress's theme files. Layout adjustments from full page width to a two-thirds width page with a left-hand sidebar can be made inside of the admin view. 

## Base

Contains all paragraph, image, font, icon, button, heading, and color styles that apply to all blocks and layouts. These can live both inside and outside of columns.

## Columns

These are columns that can live inside of page containers. Base styles can go inside of columns. All columns must be wrapped in a <code>.contents</code> div, which acts as the column container and sets the style to <code>display:inline-table</code>, <code>max-height:100%</code>, and <code>width:100%</code>.  

## Outer Columns Blocks

These are the navgiation blocks, tables, the timeline, and dropdown headings. Outer column blocks should always live outside of columns. 

## School Card Sort

This is only used on the school cards page for right now. There are plans to extend the school card pattern to other aspects of the site. 

## Homepage Slider

This is only uesd on the homepage.