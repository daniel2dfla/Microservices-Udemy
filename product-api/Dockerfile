# Etapa 1: Construção do projeto
FROM maven:3.9.6-amazoncorretto-21 AS builder

# Define o diretório de trabalho para o build
WORKDIR /app

# Copia o pom.xml e resolve as dependências primeiro
COPY pom.xml .
RUN mvn dependency:resolve

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build (gera o arquivo JAR)
RUN mvn clean package -DskipTests

# Etapa 2: Execução da aplicação
FROM amazoncorretto:21

# Define o diretório de trabalho para a aplicação
WORKDIR /app

# Copia o arquivo JAR gerado no estágio anterior
COPY --from=builder /app/target/*.jar app.jar

# Expõe a porta configurada no application.yml
EXPOSE 8081

# Comando para rodar a aplicação
CMD ["java", "-jar", "app.jar"]
# docker image build -t product-api .           ***** Para buildar a imagem *****
# docker run -p 8081:8081 product-api             ***** Para rodar o container *****