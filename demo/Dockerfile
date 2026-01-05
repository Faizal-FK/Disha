FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
COPY . .

# Make mvnw executable
RUN chmod +x mvnw

# Build jar (skip tests)
RUN ./mvnw clean package -DskipTests

EXPOSE 8080

# CMD ke andar ENV variable runtime me pass honge
CMD ["sh", "-c", "java -jar target/demo-0.0.1-SNAPSHOT.jar"]
