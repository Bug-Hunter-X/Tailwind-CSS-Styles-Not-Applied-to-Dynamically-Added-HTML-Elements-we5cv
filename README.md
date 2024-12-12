# Tailwind CSS Dynamic HTML Styling Bug

This repository demonstrates an uncommon bug in Tailwind CSS where styles are not applied to HTML elements added to the DOM dynamically. The problem arises when Tailwind's `content` option in the configuration file doesn't correctly point to the files containing the dynamically generated content. This can easily lead to inconsistencies in styling across your application, especially in single page apps or component-based frameworks such as React, Vue, or Angular. The solution provided includes a detailed explanation and a modified configuration to fix the issue.