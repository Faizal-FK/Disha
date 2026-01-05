# Use Java 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Make mvnw executable in Linux
RUN chmod +x mvnw

# Build project (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# Expose the port your Spring Boot app uses
EXPOSE 8080

# Environment variables (passed from Render)
ENV DB_URL=${DB_URL}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}

# Run the jar
CMD ["java","-jar","target/demo-0.0.1-SNAPSHOT.jar"]
