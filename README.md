# React Native Starter Template with TypeScript

This React Native starter template is designed to accelerate the development of mobile applications using React Native and TypeScript. It includes a pre-configured environment with essential libraries and a structured project layout, making it ideal for quickly starting new projects.

## Features

- **TypeScript Integration**: Leverages TypeScript for type-safe coding and maintainability.
- **Navigation**: Set up with React Navigation for intuitive and easy-to-manage screen navigation.
- **State Management**: Configured with Redux for efficient and predictable state management.
- **Form Handling**: Utilizes React Hook Form with Zod for form validation, featuring a pre-built login page as an example.
- **Type Declaration from Zod Schemas**: Types are inferred from Zod schemas for consistent and reliable type checking.
- **Icon Library**: Includes React Native Vector Icons for a wide range of customizable icons.
- **Essential Libraries**: Comes with @react-native-async-storage/async-storage for local storage, Axios for HTTP requests, Fuse.js for advanced searching, and more.
- **Scalable Folder Structure**: Organized into a `src` folder containing sub-folders like `assets`, `components`, `data`, `navigation`, `pages`, `store`, and `types` for better project management.

## Prerequisites

Before starting, ensure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager
- React Native environment set up (refer to [React Native Environment Setup](https://reactnative.dev/docs/environment-setup))

## Getting Started

1. Clone the repository:

    ```
    git clone https://github.com/Humza1011/react-native-starter.git
    cd react-native-starter
    ```

2. Install dependencies:

    ```
    npm install
    # or
    yarn install
    ```

3. Run the application:

    ```
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

The application should now be running on your device or emulator.

## Project Structure

- `src/`: Main source folder.
  - `assets/`: Static assets like images and fonts.
  - `components/`: Reusable components.
  - `data/`: Sample data or data configurations.
  - `navigation/`: Navigation configurations and stacks.
  - `pages/`: Screen components.
  - `store/`: Redux store configuration and slices.
  - `types/`: TypeScript type definitions and interfaces.
- `index.js`: Entry point of the application.
- `App.tsx`: Main application component that sets up the provider, navigation, and global app structure.
- `README.md`: Documentation of the project.
- `package.json`: Project metadata and dependencies.

## Usage

This starter template serves as a foundation for building React Native applications with TypeScript. Customize and extend it according to your project's requirements. Refer to individual library documentation for detailed usage and customization options.

## Acknowledgments

- This starter template was created to simplify and expedite the development of React Native applications using TypeScript and popular libraries.
