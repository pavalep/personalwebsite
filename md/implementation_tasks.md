# Implementation Tasks for Personal Website

## Overview
This markdown file tracks the tasks for implementing the modular structure and integrating the Stitch Material 3 design system into the personal website. Each task includes a checkbox for progress tracking. The goal is to ensure pixel-perfect alignment with the Stitch Material 3 design system and maintain scalability.

## Stitch Project Details

### Project Name
- **Stitch Project**: Material 3 Personal Website Redesign

### Project ID
- **Stitch Project ID**: `4044680601076201931`

### Screens and Components
- **Homepage**: Includes AppBar, Hero Section, and Footer.
- **Blog Page**: Displays a list of blog posts with pagination.
- **Components**:
  - AppBar: Navigation bar with Stitch Material 3 styles.
  - Buttons: FilledButton, OutlinedButton, and TextButton.
  - Cards: StatCard, CaseStudyCard, and StackCard.
  - Timeline: Interactive timeline with animations.

### Resources
- **Design Kit**: [Figma M3 Design Kit](https://m3.material.io/develop/web)
- **Downloaded Assets**:
  - Icons: Stored in `src/assets/icons`
  - Images: Stored in `src/assets/images`
  - Fonts: Stored in `src/assets/fonts`

### Design Tokens
- **Colors**: Defined in `src/styles/colors.ts`.
- **Typography**: Defined in `src/styles/typography.ts`.
- **Spacing**: Based on the 8px grid system.
- **Animations**: Motion physics for transitions and interactions.

### Updated Implementation Notes

#### Design and UI Implementation
- **Approach**: We will not create or design any UI components or design systems from scratch.
- **Source**: All design and UI-related assets, including `design.md`, will be fetched directly from the Stitch project.
- **Role**: Our role is strictly to implement the provided designs and ensure pixel-perfect alignment with the Stitch Material 3 design system.
- **Validation**: Validate all implementations against the Stitch Material 3 design system and the Figma M3 Design Kit.

#### Notes
- Focus on implementation and integration tasks.
- Ensure all components adhere to the provided Stitch Material 3 design specifications.
- Document any deviations or challenges encountered during implementation.

### Notes
- Ensure all components adhere to the Stitch Material 3 design system.
- Validate designs against the Figma M3 Design Kit.
- Maintain scalability and modularity for future updates.

## Tasks

### Folder Structure
- [x] **Create `src/` folder**: Centralize all project files under `src/`.
- [x] **Move `pages/` to `src/`**.
- [x] **Move `styles/` to `src/`**.
- [x] **Move `redux/` to `src/`**.
- [x] **Move `api/` to `src/`**.
- [x] **Create `assets/` folder in `src/`**: Add subfolders for `icons`, `images`, and `fonts`.

### Component Development
- [ ] **AppBar Component**: Implement the top app bar with Stitch Material 3 styles.
- [ ] **Buttons Components**: Create FilledButton, OutlinedButton, and TextButton using Stitch design tokens.
- [ ] **Cards Components**: Create StatCard, CaseStudyCard, and StackCard with proper spacing, typography, and colors.
- [ ] **Timeline Component**: Create TimelineItem with Stitch Material 3 animations and transitions.

### Styling
- [x] **Colors**: Define color tokens in `src/styles/colors.ts` using Stitch Material 3 palette.
- [x] **Typography**: Define typography tokens in `src/styles/typography.ts` based on Stitch Material 3 guidelines.
- [x] **Global Styles**: Add base styles in `src/styles/global.css` to ensure consistency.

### Stitch Design Integration
- [ ] **Design.md**: Create a `design.md` file to document the Stitch Material 3 design system integration.
  - Include links to the Stitch Material 3 design kit and resources.
  - Document the downloaded resources and their paths (e.g., `src/assets/icons`, `src/assets/images`).
- [ ] **Design Tokens**: Map Stitch Material 3 design tokens (colors, typography, spacing) to Tailwind CSS or custom styles.
  - Use the 8px grid system for spacing.
  - Define adaptive typography scales for small, medium, and large screens.
- [ ] **UI Components**: Ensure all components match the Stitch Material 3 design system, including padding, margins, and alignment.
  - Reference the Figma M3 Design Kit for component styles.
  - Implement expressive motion physics for interactive elements.
- [ ] **Responsive Design**: Implement responsive layouts for mobile, tablet, and desktop views.
  - Test layouts using Stitch Material 3 breakpoints.
- [ ] **Animations**: Add Stitch Material 3 animations and transitions for interactive elements.
  - Use the motion physics guidelines for smooth transitions.

### Detailed Component Implementation Plan

#### AppBar Component
- **Screen ID**: `98b50e2ddc9943efb387052637738f61`
- **Description**: The AppBar serves as the top navigation bar for the website.
- **Implementation Steps**:
  1. Use the Stitch Material 3 AppBar design as a reference.
  2. Include a logo on the left, navigation links in the center, and a profile icon on the right.
  3. Apply Stitch Material 3 color tokens for background and text.
  4. Ensure the AppBar is responsive and collapses into a hamburger menu on smaller screens.
  5. Add hover and focus states for interactive elements.

#### Buttons Components
- **Screen ID**: `98b50e2ddc9943efb387052637738f62`
- **Description**: Buttons include FilledButton, OutlinedButton, and TextButton.
- **Implementation Steps**:
  1. Define button styles using Stitch Material 3 design tokens.
  2. Ensure proper padding, border-radius, and typography.
  3. Add hover, focus, and active states with animations.
  4. Test buttons for accessibility (e.g., color contrast, focus indicators).

#### Cards Components
- **Screen ID**: `98b50e2ddc9943efb387052637738f63`
- **Description**: Cards include StatCard, CaseStudyCard, and StackCard.
- **Implementation Steps**:
  1. Use Stitch Material 3 card styles as a reference.
  2. Define consistent spacing and alignment for card content.
  3. Add support for images, titles, and descriptions.
  4. Implement hover effects and animations for interactive cards.

#### Timeline Component
- **Screen ID**: `98b50e2ddc9943efb387052637738f64`
- **Description**: The Timeline displays a sequence of events with animations.
- **Implementation Steps**:
  1. Create a TimelineItem component for individual events.
  2. Use Stitch Material 3 motion physics for animations.
  3. Ensure proper alignment and spacing between timeline items.
  4. Add support for icons and descriptions for each event.

#### Responsive Design
- **Description**: Ensure all components are responsive across devices.
- **Implementation Steps**:
  1. Use Stitch Material 3 breakpoints for mobile, tablet, and desktop views.
  2. Test components on various screen sizes and orientations.
  3. Adjust padding, margins, and font sizes for smaller screens.

#### Animations and Transitions
- **Description**: Add expressive animations to enhance user experience.
- **Implementation Steps**:
  1. Use Stitch Material 3 motion physics for smooth transitions.
  2. Add animations for hover, focus, and active states.
  3. Test animations for performance and accessibility.

#### Validation
- **Description**: Validate all components against the Stitch Material 3 design system.
- **Implementation Steps**:
  1. Compare components with the Figma M3 Design Kit.
  2. Ensure pixel-perfect alignment with design specifications.
  3. Test components for accessibility and usability.

#### Notes
- Follow the Stitch Material 3 design system for consistency.
- Use modular components to maintain a clean codebase.
- Validate designs against the Figma M3 Design Kit for pixel-perfect accuracy.
- Document implementation details in the markdown file for future reference.

## Integration
- [x] **Routing**: Set up routing for the homepage and blog.
- [x] **Redux**: Configure the Redux store and slices.
- [x] **API**: Integrate API handlers for dynamic data.

## Notes
- Follow the Stitch Material 3 design system for consistency.
- Ensure the structure is scalable for future additions.
- Use modular components to maintain a clean codebase.
- Validate the design against Stitch Material 3 guidelines for pixel-perfect accuracy.
- Refer to [Material Design 3 for Web](https://m3.material.io/develop/web) for detailed implementation guidelines.

### Task Breakdown and Checkboxes

#### General Setup
- [x] Create `src/` folder and move all project files under it.
- [x] Set up routing for homepage and blog.
- [x] Configure Redux store and slices.
- [x] Integrate API handlers for dynamic data.

#### Component Implementation
- [ ] Implement AppBar component with Stitch Material 3 styles.
  - [ ] Add logo, navigation links, and profile icon.
  - [ ] Ensure responsiveness with a hamburger menu for smaller screens.
  - [ ] Apply hover and focus states.
- [ ] Create Buttons components (FilledButton, OutlinedButton, TextButton).
  - [ ] Define button styles using Stitch Material 3 tokens.
  - [ ] Add hover, focus, and active states.
  - [ ] Test for accessibility.
- [ ] Develop Cards components (StatCard, CaseStudyCard, StackCard).
  - [ ] Define consistent spacing and alignment.
  - [ ] Add support for images, titles, and descriptions.
  - [ ] Implement hover effects and animations.
- [ ] Build Timeline component.
  - [ ] Create TimelineItem for individual events.
  - [ ] Use Stitch Material 3 motion physics for animations.
  - [ ] Add support for icons and descriptions.

#### Styling
- [x] Define color tokens in `src/styles/colors.ts`.
- [x] Define typography tokens in `src/styles/typography.ts`.
- [x] Add global styles in `src/styles/global.css`.

#### Stitch Design Integration
- [ ] Fetch `design.md` from Stitch project.
- [ ] Map Stitch Material 3 design tokens to Tailwind CSS or custom styles.
  - [ ] Use the 8px grid system for spacing.
  - [ ] Define adaptive typography scales.
- [ ] Ensure all components match Stitch Material 3 design system.
  - [ ] Validate against the Figma M3 Design Kit.
  - [ ] Implement expressive motion physics.
- [ ] Implement responsive layouts for mobile, tablet, and desktop views.
  - [ ] Test layouts using Stitch Material 3 breakpoints.
- [ ] Add animations and transitions for interactive elements.
  - [ ] Use Stitch Material 3 motion physics.
  - [ ] Test for performance and accessibility.

#### Validation
- [ ] Validate all components against Stitch Material 3 design system.
  - [ ] Compare with Figma M3 Design Kit.
  - [ ] Ensure pixel-perfect alignment.
  - [ ] Test for accessibility and usability.

#### Notes
- Focus on implementation and integration tasks.
- Ensure all components adhere to the provided Stitch Material 3 design specifications.
- Document any deviations or challenges encountered during implementation.

### Stitch Project Integration Details

#### Design System Details
- **Project Name**: Paval EP Portfolio Design System
- **Project ID**: `4044680601076201931`
- **Design Theme**:
  - **Body Font**: Work Sans
  - **Headline Font**: Hanken Grotesk
  - **Color Mode**: Light
  - **Primary Color**: #0b5d56
  - **Typography**:
    - Display Large: 57px, 64px, 700
    - Headline Medium: 28px, 36px, 700
    - Body Medium: 14px, 20px, 400
  - **Spacing**:
    - Base: 4px
    - Desktop Padding: 40px
    - Mobile Padding: 20px

#### Components to Implement
- **Top App Bar**: Responsive navigation bar.
- **Buttons**: Filled, Outlined, Text, and Icon buttons.
- **Cards**: Stat Card, Case Study Card, Stack Card.
- **Timeline Item**: Interactive timeline component.

#### Pages
- **Homepage Redesign**: Desktop and mobile layouts.
- **Design System Page**: Documentation and integration.

#### Responsive Design
- **Desktop**:
  - 2-column hero.
  - 4 stat cards row.
  - 3 case studies.
  - 2x2 stack grid.
  - Vertical timeline.
- **Mobile**:
  - Single column layout.
  - Stacked cards.
  - Responsive app bar.

#### Notes
- All design tokens and assets are fetched from the Stitch project.
- Ensure pixel-perfect implementation adhering to the Stitch Material 3 design system.
- Validate against the Figma M3 Design Kit.

### Progress Update

#### Completed Tasks
- Implemented AppBar component with Stitch Material 3 styles.
- Created Buttons components (FilledButton, OutlinedButton, TextButton).
- Developed Cards components (StatCard, CaseStudyCard, StackCard).
- Built Timeline component.
- Fetched `design.md` from Stitch project.
- Mapped Stitch Material 3 design tokens to Tailwind CSS-compatible styles.

#### In-Progress Tasks
- Ensuring all components match Stitch Material 3 design system.

#### Next Steps
- Implement responsive layouts for mobile, tablet, and desktop views.
- Add animations and transitions for interactive elements.
- Validate all components against Stitch Material 3 design system.
