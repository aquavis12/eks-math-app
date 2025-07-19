# Math Application with AWS Infrastructure

A simple math application with a JavaScript frontend, containerized and deployed on AWS EKS with Terraform.

## Features

- Basic math operations (addition, subtraction, multiplication, division)
- Responsive UI for desktop and mobile devices
- Containerized application deployed on Kubernetes (EKS)
- Infrastructure as Code using Terraform
- CI/CD pipeline for automated deployments
- Monitoring with CloudWatch Canaries and EKS Insights

## Architecture

- **Frontend**: JavaScript application served via CloudFront
- **Container Registry**: Amazon ECR for storing Docker images
- **Orchestration**: Amazon EKS for Kubernetes deployment
- **Monitoring**: CloudWatch Canaries for synthetic monitoring and EKS Insights for logs

## Getting Started

### Prerequisites

- Node.js and npm
- Docker
- AWS CLI configured with appropriate permissions
- Terraform CLI
- kubectl

### Local Development

```bash
# Install dependencies
cd app
npm install

# Start development server
npm start
```

### Deployment

```bash
# Build and push Docker image
cd app
docker build -t math-app .
aws ecr get-login-password | docker login --username AWS --password-stdin <your-ecr-repo-url>
docker tag math-app:latest <your-ecr-repo-url>:latest
docker push <your-ecr-repo-url>:latest

# Deploy infrastructure
cd ../terraform
terraform init
terraform apply
```

## Monitoring

- CloudWatch dashboard available at AWS Console
- EKS logs and metrics accessible via CloudWatch Insights

## License

See the [LICENSE](LICENSE) file for details.