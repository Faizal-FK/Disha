FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY . .

# Fix permission inside Docker (mandatory)
RUN ["chmod", "+x", "./mvnw"]

# Build the project
RUN ./mvnw clean package -DskipTests

EXPOSE 8080

# Run the app
CMD ["sh", "-c", "java -jar target/*.jar"]
