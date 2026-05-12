// Define application routes
export const ROUTES = {
  home: "/",
  projectDetails: "/details/:id",
};

// Paths/ Function to generate project details path with dynamic id
export const getProjectDetailsRoute = (id) => `/details/${id}`;
