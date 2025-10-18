## Background

This project was made in around 7 hours. Although I tried to cover as many functional requirements as possible, there are some limitations and areas for improvement that I would like to highlight.

1. **Database Triggers**: I used database triggers to automatically create entries in the `Users` and `Profiles` tables when a new user is created in Supabase Auth. While this approach ensures data consistency, it adds complexity to the database schema and may make debugging more challenging. In a production environment, I would consider handling this logic in the application layer for better maintainability.

2. **CRUD Operations**: My implementation of CRUD operations for reviews is somewhat unconventional. Reviews are created, updated, or deleted as a side effect of changing the book status. This approach simplifies the UI but may not be intuitive for users who expect explicit controls for managing reviews.

3. **Error Handling**: While I have implemented basic error handling, there are areas where it could be improved. For example, more detailed error messages and user feedback could enhance the user experience, especially during authentication and data submission processes.

4. **Testing**: Due to time constraints, I was unable to implement comprehensive unit and integration tests. In a production application, thorough testing is essential to ensure reliability and catch potential bugs early in the development process.

## Recommendations for Improvement

1. **Adding Books Functionality**: Currently, there is no way for users to add new books to their list. Implementing a feature that allows users to search for and add books would enhance the app's usability.

2. **Publicly Available Review**: Right now, reviews are only visible to the user who have signed up. Making reviews publicly available on the book detail page would foster a sense of community and provide valuable insights for other users.
