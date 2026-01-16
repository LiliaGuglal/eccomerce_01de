# Backend Development Guidelines

## Server and Database Rules

### Technology Stack
- Node.js with TypeScript for server-side development
- Express.js for API routing and middleware
- Database operations should use proper connection pooling
- Implement proper error handling and logging

### API Design
- Follow RESTful API conventions
- Use appropriate HTTP status codes
- Implement proper request validation using validators
- Include rate limiting for API endpoints
- Ensure proper authentication and authorization

### Database Guidelines
- Use parameterized queries to prevent SQL injection
- Implement proper database connection management
- Follow database naming conventions
- Include proper indexing for performance
- Implement database migrations for schema changes

### Security Best Practices
- Validate all input data
- Implement proper authentication mechanisms
- Use HTTPS for all communications
- Store sensitive data securely
- Implement proper session management

### Performance Considerations
- Implement caching where appropriate
- Optimize database queries
- Use connection pooling
- Monitor and log performance metrics