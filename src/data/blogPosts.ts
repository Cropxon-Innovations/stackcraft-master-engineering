// Centralized blog/playbook data for RSS, search, and blog index
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: BlogCategory;
  author: Author;
  publishedAt: string;
  modifiedAt: string;
  image: string;
  tags: string[];
  readTime: number;
}

export interface Author {
  name: string;
  url: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export type BlogCategory = 'ai' | 'dotnet' | 'java' | 'devops' | 'cloud' | 'architecture' | 'testing' | 'api';

export interface CategoryInfo {
  id: BlogCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    description: 'Artificial intelligence, machine learning patterns, LLM integration, and AI infrastructure',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'dotnet',
    name: '.NET Engineering',
    description: 'C#, ASP.NET Core, Entity Framework, and Microsoft ecosystem best practices',
    icon: 'Code2',
    color: 'from-blue-600 to-purple-600',
  },
  {
    id: 'java',
    name: 'Java & JVM',
    description: 'Java, Spring Boot, Kotlin, and JVM performance optimization',
    icon: 'Coffee',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'devops',
    name: 'DevOps & SRE',
    description: 'CI/CD pipelines, infrastructure as code, monitoring, and reliability engineering',
    icon: 'Container',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    description: 'AWS, Azure, GCP, serverless architecture, and cloud-native patterns',
    icon: 'Cloud',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'architecture',
    name: 'System Architecture',
    description: 'Distributed systems, microservices, event-driven design, and scalability patterns',
    icon: 'Network',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    description: 'Unit testing, integration testing, TDD, BDD, and quality assurance strategies',
    icon: 'TestTube2',
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 'api',
    name: 'API Design',
    description: 'RESTful APIs, GraphQL, gRPC, API versioning, and documentation',
    icon: 'Webhook',
    color: 'from-yellow-500 to-orange-500',
  },
];

export const authors: Author[] = [
  {
    name: 'StackCraft Team',
    url: 'https://www.stackcraft.io/about',
    avatar: 'https://www.stackcraft.io/og-image.png',
    bio: 'The StackCraft team brings together decades of experience building production systems at scale. We share battle-tested patterns and practical wisdom from real-world engineering challenges.',
    twitter: 'stackcraft_io',
    github: 'stackcraft',
  },
  {
    name: 'Alex Chen',
    url: 'https://www.stackcraft.io/about',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Principal Engineer with 15+ years of experience in distributed systems. Former tech lead at major cloud providers. Passionate about building resilient, scalable architectures.',
    twitter: 'alexchen_dev',
    linkedin: 'alexchen',
    github: 'alexchen',
  },
  {
    name: 'Sarah Martinez',
    url: 'https://www.stackcraft.io/about',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    bio: 'Staff Engineer specializing in .NET and cloud-native development. Microsoft MVP and author of several open-source libraries. Loves making complex topics accessible.',
    twitter: 'sarahmartinez',
    linkedin: 'sarahmartinez',
    github: 'sarahmartinez',
  },
  {
    name: 'David Kim',
    url: 'https://www.stackcraft.io/about',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    bio: 'DevOps advocate and SRE with deep expertise in Kubernetes, CI/CD, and platform engineering. Believes in automation and developer experience.',
    twitter: 'davidkim_sre',
    linkedin: 'davidkim',
    github: 'davidkim',
  },
];

export const defaultAuthor = authors[0];

// Sample blog posts / playbooks data with full content
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'production-grade-dotnet-api-design',
    title: 'Production-Grade .NET API Design Patterns',
    description: 'Learn battle-tested patterns for building scalable, maintainable APIs with ASP.NET Core. Covers versioning, error handling, authentication, and performance optimization.',
    content: `
# Production-Grade .NET API Design Patterns

Building production-ready APIs requires more than just writing endpoints. This comprehensive guide covers the essential patterns and practices that separate hobby projects from enterprise-grade systems.

## Table of Contents
1. [API Versioning Strategies](#versioning)
2. [Error Handling & Problem Details](#error-handling)
3. [Authentication & Authorization](#authentication)
4. [Performance Optimization](#performance)
5. [Testing Strategies](#testing)

---

## API Versioning Strategies {#versioning}

Version your APIs from day one. The cost of adding versioning later is exponentially higher than building it in from the start.

### URL Path Versioning

\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    [MapToApiVersion("1.0")]
    public IActionResult GetV1() => Ok(new { version = "1.0" });
    
    [HttpGet]
    [MapToApiVersion("2.0")]
    public IActionResult GetV2() => Ok(new { version = "2.0", enhanced = true });
}
\`\`\`

### Header-Based Versioning

For cleaner URLs, use header-based versioning:

\`\`\`csharp
services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new HeaderApiVersionReader("X-API-Version");
});
\`\`\`

---

## Error Handling & Problem Details {#error-handling}

Implement RFC 7807 Problem Details for consistent error responses:

\`\`\`csharp
public class GlobalExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext context,
        Exception exception,
        CancellationToken cancellationToken)
    {
        var problemDetails = new ProblemDetails
        {
            Status = StatusCodes.Status500InternalServerError,
            Title = "An error occurred",
            Type = "https://api.stackcraft.io/errors/internal-server-error"
        };

        context.Response.StatusCode = problemDetails.Status.Value;
        await context.Response.WriteAsJsonAsync(problemDetails, cancellationToken);
        return true;
    }
}
\`\`\`

---

## Authentication & Authorization {#authentication}

Use JWT tokens with proper validation and refresh token rotation:

\`\`\`csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ClockSkew = TimeSpan.Zero
        };
    });
\`\`\`

---

## Performance Optimization {#performance}

### Response Compression

\`\`\`csharp
services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
});
\`\`\`

### Output Caching

\`\`\`csharp
[HttpGet("{id}")]
[OutputCache(Duration = 60, VaryByRouteValueNames = new[] { "id" })]
public async Task<IActionResult> GetById(int id)
{
    var item = await _repository.GetByIdAsync(id);
    return Ok(item);
}
\`\`\`

---

## Testing Strategies {#testing}

Write integration tests using WebApplicationFactory:

\`\`\`csharp
public class UsersApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public UsersApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetUsers_ReturnsSuccess()
    {
        var response = await _client.GetAsync("/api/v1/users");
        response.EnsureSuccessStatusCode();
    }
}
\`\`\`

---

## Key Takeaways

1. **Version from Day One** - API versioning is much easier to implement upfront
2. **Consistent Error Responses** - Use Problem Details (RFC 7807) for all errors
3. **Security First** - Implement proper authentication and authorization
4. **Measure Everything** - Add telemetry and performance monitoring
5. **Test at Multiple Levels** - Unit, integration, and contract tests

---

*Ready to level up your .NET API skills? Check out our [Microservices Architecture](/blog/microservices-architecture-patterns) guide for scaling your services.*
    `,
    category: 'dotnet',
    author: authors[2], // Sarah Martinez
    publishedAt: '2026-01-10T10:00:00Z',
    modifiedAt: '2026-01-12T08:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['.NET', 'API Design', 'ASP.NET Core', 'REST', 'C#'],
    readTime: 15,
  },
  {
    id: '2',
    slug: 'microservices-architecture-patterns',
    title: 'Microservices Architecture: From Monolith to Distributed',
    description: 'A comprehensive playbook for designing, building, and operating microservices at scale. Includes service decomposition, communication patterns, and data management.',
    content: `
# Microservices Architecture: From Monolith to Distributed

The journey from monolith to microservices is fraught with challenges. This playbook provides a battle-tested approach to decomposing monoliths and building resilient distributed systems.

## When to Use Microservices

Before diving in, honestly assess if microservices are right for your situation:

### Good Candidates
- Large teams (>20 engineers) working on the same codebase
- Need for independent deployment cycles
- Scaling different parts of the system independently
- Polyglot requirements (different languages/frameworks)

### Bad Candidates
- Small teams (<10 engineers)
- Startups still finding product-market fit
- Simple CRUD applications
- Tight budget for infrastructure

---

## Service Decomposition Strategies

### Decompose by Business Capability

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                      E-Commerce                          │
├─────────────┬─────────────┬─────────────┬───────────────┤
│   Catalog   │   Orders    │   Payment   │   Shipping    │
│   Service   │   Service   │   Service   │   Service     │
└─────────────┴─────────────┴─────────────┴───────────────┘
\`\`\`

### Decompose by Subdomain (DDD)

Use Domain-Driven Design to identify bounded contexts:

1. **Core Domain** - Your competitive advantage
2. **Supporting Domain** - Important but not differentiating
3. **Generic Domain** - Common functionality (auth, notifications)

---

## Communication Patterns

### Synchronous (Request-Response)

Best for: Real-time queries, operations requiring immediate response

\`\`\`typescript
// Using gRPC for internal service communication
const client = new OrderServiceClient();
const response = await client.getOrder({ orderId: '123' });
\`\`\`

### Asynchronous (Event-Driven)

Best for: Decoupling services, eventual consistency acceptable

\`\`\`typescript
// Publishing domain events
await eventBus.publish('OrderCreated', {
  orderId: '123',
  customerId: 'cust-456',
  items: [...],
  timestamp: new Date()
});
\`\`\`

---

## Data Management

### Database per Service Pattern

Each service owns its data. Never share databases between services.

### Saga Pattern for Distributed Transactions

\`\`\`
┌──────────┐    ┌──────────┐    ┌──────────┐
│  Order   │───▶│ Payment  │───▶│ Shipping │
│ Service  │    │ Service  │    │ Service  │
└──────────┘    └──────────┘    └──────────┘
     │               │               │
     ▼               ▼               ▼
  OrderDB        PaymentDB       ShippingDB
\`\`\`

---

## Resilience Patterns

### Circuit Breaker

\`\`\`csharp
services.AddHttpClient<IPaymentService, PaymentService>()
    .AddPolicyHandler(Policy
        .Handle<HttpRequestException>()
        .CircuitBreakerAsync(5, TimeSpan.FromSeconds(30)));
\`\`\`

### Retry with Exponential Backoff

\`\`\`csharp
.AddPolicyHandler(Policy
    .Handle<HttpRequestException>()
    .WaitAndRetryAsync(3, retryAttempt => 
        TimeSpan.FromSeconds(Math.Pow(2, retryAttempt))));
\`\`\`

---

## Observability

The three pillars of observability are essential for microservices:

1. **Logs** - Structured logging with correlation IDs
2. **Metrics** - Service-level indicators (latency, errors, saturation)
3. **Traces** - Distributed tracing across service boundaries

---

## Key Takeaways

1. Start with a well-designed monolith - you can always decompose later
2. Use bounded contexts to identify service boundaries
3. Prefer asynchronous communication for loose coupling
4. Implement circuit breakers and retries for resilience
5. Invest heavily in observability from day one

---

*Continue your architecture journey with our [Kubernetes DevOps Pipeline](/blog/kubernetes-devops-pipeline) guide.*
    `,
    category: 'architecture',
    author: authors[1], // Alex Chen
    publishedAt: '2026-01-08T12:00:00Z',
    modifiedAt: '2026-01-11T09:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Microservices', 'Architecture', 'Distributed Systems', 'DDD'],
    readTime: 20,
  },
  {
    id: '3',
    slug: 'java-spring-boot-production-checklist',
    title: 'Java Spring Boot Production Readiness Checklist',
    description: 'Essential checklist for deploying Spring Boot applications to production. Covers security, performance, monitoring, and operational excellence.',
    content: `
# Java Spring Boot Production Readiness Checklist

Before deploying your Spring Boot application to production, use this comprehensive checklist to ensure you've covered all the essential bases.

## Security Checklist

### Authentication & Authorization
- [ ] Implement proper authentication (OAuth2, JWT, or session-based)
- [ ] Use HTTPS everywhere
- [ ] Implement rate limiting
- [ ] Add CORS configuration
- [ ] Use security headers (HSTS, CSP, X-Frame-Options)

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
            .headers(headers -> headers
                .frameOptions(frame -> frame.deny())
                .contentSecurityPolicy(csp -> csp.policyDirectives("default-src 'self'")))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated());
        return http.build();
    }
}
\`\`\`

### Secrets Management
- [ ] Never commit secrets to version control
- [ ] Use environment variables or secret managers
- [ ] Rotate credentials regularly

\`\`\`yaml
# application.yml
spring:
  datasource:
    url: \${DATABASE_URL}
    username: \${DATABASE_USER}
    password: \${DATABASE_PASSWORD}
\`\`\`

---

## Performance Checklist

### Connection Pooling
- [ ] Configure HikariCP appropriately
- [ ] Set proper timeout values
- [ ] Monitor connection pool metrics

\`\`\`yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
\`\`\`

### Caching
- [ ] Implement appropriate caching strategies
- [ ] Use Redis for distributed caching
- [ ] Set cache TTLs

\`\`\`java
@Cacheable(value = "users", key = "#userId")
public User getUserById(Long userId) {
    return userRepository.findById(userId).orElse(null);
}
\`\`\`

### JVM Tuning
- [ ] Set appropriate heap sizes
- [ ] Choose the right garbage collector
- [ ] Enable GC logging

\`\`\`bash
JAVA_OPTS="-Xms2g -Xmx2g -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError"
\`\`\`

---

## Monitoring Checklist

### Health Checks
- [ ] Enable actuator health endpoints
- [ ] Add custom health indicators
- [ ] Configure liveness and readiness probes

\`\`\`java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        if (isDatabaseHealthy()) {
            return Health.up().withDetail("database", "connected").build();
        }
        return Health.down().withDetail("database", "disconnected").build();
    }
}
\`\`\`

### Metrics
- [ ] Export metrics to Prometheus
- [ ] Set up Grafana dashboards
- [ ] Configure alerting rules

### Logging
- [ ] Use structured logging (JSON format)
- [ ] Include correlation IDs
- [ ] Set appropriate log levels

\`\`\`xml
<configuration>
    <appender name="JSON" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
    </appender>
</configuration>
\`\`\`

---

## Operational Checklist

### Graceful Shutdown
- [ ] Enable graceful shutdown
- [ ] Set appropriate timeout

\`\`\`yaml
server:
  shutdown: graceful
spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
\`\`\`

### Configuration
- [ ] Externalize all configuration
- [ ] Support configuration refresh
- [ ] Document all configuration options

---

## Key Takeaways

1. Security is not optional - implement defense in depth
2. Performance tuning should be data-driven
3. Comprehensive monitoring prevents production surprises
4. Graceful shutdown prevents data loss
5. Document your operational procedures

---

*Looking to containerize your Spring Boot app? Check out our [Kubernetes DevOps Pipeline](/blog/kubernetes-devops-pipeline) guide.*
    `,
    category: 'java',
    author: authors[1], // Alex Chen
    publishedAt: '2026-01-06T14:00:00Z',
    modifiedAt: '2026-01-10T11:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Java', 'Spring Boot', 'Production', 'JVM', 'Performance'],
    readTime: 18,
  },
  {
    id: '4',
    slug: 'kubernetes-devops-pipeline',
    title: 'Building a Complete Kubernetes DevOps Pipeline',
    description: 'End-to-end guide for creating robust CI/CD pipelines with Kubernetes. GitOps, Helm, ArgoCD, and progressive delivery strategies.',
    content: `
# Building a Complete Kubernetes DevOps Pipeline

A well-designed CI/CD pipeline is the backbone of modern software delivery. This guide walks you through building a production-grade pipeline using GitOps principles.

## Architecture Overview

\`\`\`
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   GitHub    │───▶│   CI/CD     │───▶│  Container  │───▶│  Kubernetes │
│   Repo      │    │  Pipeline   │    │  Registry   │    │   Cluster   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                          │                                     ▲
                          └─────────────────────────────────────┘
                                      ArgoCD (GitOps)
\`\`\`

---

## CI Pipeline with GitHub Actions

\`\`\`yaml
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Go
        uses: actions/setup-go@v5
        with:
          go-version: '1.21'
      
      - name: Run Tests
        run: go test -v -coverprofile=coverage.out ./...
      
      - name: Build
        run: go build -o app ./cmd/server

  build-image:
    needs: build-and-test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/myorg/myapp:${{ github.sha }}
\`\`\`

---

## Helm Charts for Kubernetes

\`\`\`yaml
# values.yaml
replicaCount: 3

image:
  repository: ghcr.io/myorg/myapp
  pullPolicy: IfNotPresent
  tag: "latest"

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilization: 70
\`\`\`

---

## GitOps with ArgoCD

\`\`\`yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myorg/kubernetes-manifests
    targetRevision: HEAD
    path: apps/myapp
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
\`\`\`

---

## Progressive Delivery with Argo Rollouts

\`\`\`yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: myapp
spec:
  replicas: 5
  strategy:
    canary:
      steps:
        - setWeight: 10
        - pause: {duration: 5m}
        - setWeight: 30
        - pause: {duration: 5m}
        - setWeight: 60
        - pause: {duration: 5m}
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
\`\`\`

---

## Monitoring Your Pipeline

### Key Metrics to Track

1. **Deployment Frequency** - How often you deploy
2. **Lead Time** - Time from commit to production
3. **Mean Time to Recovery** - Time to fix production issues
4. **Change Failure Rate** - Percentage of failed deployments

---

## Key Takeaways

1. GitOps provides auditability and reproducibility
2. Canary deployments reduce blast radius
3. Automated rollbacks prevent prolonged outages
4. Monitor your four key metrics

---

*Need to scale your observability? Check our [AWS Cloud Architecture](/blog/aws-cloud-architecture-best-practices) guide.*
    `,
    category: 'devops',
    author: authors[3], // David Kim
    publishedAt: '2026-01-04T09:00:00Z',
    modifiedAt: '2026-01-09T15:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Kubernetes', 'DevOps', 'CI/CD', 'GitOps', 'Helm'],
    readTime: 22,
  },
  {
    id: '5',
    slug: 'aws-cloud-architecture-best-practices',
    title: 'AWS Cloud Architecture Best Practices',
    description: 'Comprehensive guide to building well-architected solutions on AWS. Covers security, reliability, performance, cost optimization, and operational excellence.',
    content: `
# AWS Cloud Architecture Best Practices

Building on AWS requires understanding the Well-Architected Framework. This guide covers practical patterns for each pillar.

## The Five Pillars

1. **Operational Excellence** - Run and monitor systems
2. **Security** - Protect information and systems
3. **Reliability** - Recover from failures
4. **Performance Efficiency** - Use resources efficiently
5. **Cost Optimization** - Avoid unnecessary costs

---

## Security Best Practices

### IAM Configuration

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*",
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "true"
        }
      }
    }
  ]
}
\`\`\`

### VPC Design

\`\`\`
┌────────────────────────────────────────────────────────┐
│                        VPC                              │
│  ┌──────────────────┐    ┌──────────────────┐          │
│  │  Public Subnet   │    │  Public Subnet   │          │
│  │   (us-east-1a)   │    │   (us-east-1b)   │          │
│  │   ┌──────────┐   │    │   ┌──────────┐   │          │
│  │   │   ALB    │   │    │   │   NAT    │   │          │
│  │   └──────────┘   │    │   └──────────┘   │          │
│  └──────────────────┘    └──────────────────┘          │
│                                                         │
│  ┌──────────────────┐    ┌──────────────────┐          │
│  │ Private Subnet   │    │ Private Subnet   │          │
│  │   (us-east-1a)   │    │   (us-east-1b)   │          │
│  │   ┌──────────┐   │    │   ┌──────────┐   │          │
│  │   │   EC2    │   │    │   │   EC2    │   │          │
│  │   └──────────┘   │    │   └──────────┘   │          │
│  └──────────────────┘    └──────────────────┘          │
└────────────────────────────────────────────────────────┘
\`\`\`

---

## Reliability Patterns

### Multi-AZ Architecture

Always deploy across multiple Availability Zones:

\`\`\`yaml
Resources:
  AutoScalingGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      MinSize: 2
      MaxSize: 10
      DesiredCapacity: 4
      AvailabilityZones:
        - us-east-1a
        - us-east-1b
        - us-east-1c
\`\`\`

### Disaster Recovery

| Strategy | RTO | RPO | Cost |
|----------|-----|-----|------|
| Backup & Restore | Hours | Hours | $ |
| Pilot Light | Minutes | Minutes | $$ |
| Warm Standby | Seconds | Seconds | $$$ |
| Multi-Site Active | Near Zero | Near Zero | $$$$ |

---

## Performance Optimization

### Caching Strategy

\`\`\`
Client ──▶ CloudFront ──▶ ALB ──▶ EC2 ──▶ ElastiCache ──▶ RDS
  └──────────────────────────────────────────────────────────┘
           Cache hits reduce database load
\`\`\`

### Right-Sizing

Use AWS Compute Optimizer to analyze your workloads and get recommendations.

---

## Cost Optimization

### Reserved Instances vs Savings Plans

| Option | Flexibility | Savings |
|--------|-------------|---------|
| On-Demand | Maximum | 0% |
| Savings Plans | High | Up to 72% |
| Reserved Instances | Low | Up to 75% |
| Spot Instances | Variable | Up to 90% |

---

## Key Takeaways

1. Design for failure - assume components will fail
2. Implement defense in depth for security
3. Use multiple AZs for high availability
4. Optimize costs through right-sizing and reservations
5. Automate everything with Infrastructure as Code

---

*Ready to add AI to your AWS architecture? Check our [LLM Integration Patterns](/blog/llm-integration-patterns) guide.*
    `,
    category: 'cloud',
    author: authors[3], // David Kim
    publishedAt: '2026-01-02T11:00:00Z',
    modifiedAt: '2026-01-08T13:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['AWS', 'Cloud', 'Architecture', 'Serverless', 'Well-Architected'],
    readTime: 25,
  },
  {
    id: '6',
    slug: 'llm-integration-patterns',
    title: 'LLM Integration Patterns for Production Systems',
    description: 'Practical patterns for integrating Large Language Models into production applications. Covers prompt engineering, RAG, fine-tuning, and cost optimization.',
    content: `
# LLM Integration Patterns for Production Systems

Integrating LLMs into production systems requires careful consideration of latency, cost, accuracy, and reliability. This guide covers proven patterns for successful LLM integration.

## Integration Architecture

\`\`\`
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Client    │───▶│   Gateway   │───▶│  LLM Router │
│   Request   │    │   + Cache   │    │             │
└─────────────┘    └─────────────┘    └──────┬──────┘
                                              │
                   ┌──────────────────────────┼──────────────────────────┐
                   │                          │                          │
                   ▼                          ▼                          ▼
            ┌──────────────┐           ┌──────────────┐           ┌──────────────┐
            │   GPT-4o     │           │   Claude 3   │           │   Gemini     │
            │   (Complex)  │           │   (Analysis) │           │   (Fast)     │
            └──────────────┘           └──────────────┘           └──────────────┘
\`\`\`

---

## Retrieval-Augmented Generation (RAG)

RAG enhances LLM responses with domain-specific knowledge:

\`\`\`typescript
async function ragQuery(userQuery: string): Promise<string> {
  // 1. Generate embedding for the query
  const queryEmbedding = await generateEmbedding(userQuery);
  
  // 2. Search vector database for relevant documents
  const relevantDocs = await vectorDB.search(queryEmbedding, { limit: 5 });
  
  // 3. Build context from retrieved documents
  const context = relevantDocs.map(doc => doc.content).join('\\n\\n');
  
  // 4. Generate response with context
  const response = await llm.complete({
    messages: [
      { role: 'system', content: \`Answer based on: \${context}\` },
      { role: 'user', content: userQuery }
    ]
  });
  
  return response;
}
\`\`\`

---

## Prompt Engineering Best Practices

### Structured Prompts

\`\`\`typescript
const systemPrompt = \`
You are a technical support assistant for StackCraft.

## Rules
1. Only answer questions about our products
2. If unsure, say "I don't know"
3. Always cite documentation when possible

## Response Format
- Be concise (max 3 paragraphs)
- Use bullet points for lists
- Include code examples when helpful
\`;
\`\`\`

### Few-Shot Learning

\`\`\`typescript
const fewShotPrompt = \`
Classify the following support tickets:

Example 1: "My API calls are returning 500 errors"
Category: Technical Issue

Example 2: "How do I upgrade my subscription?"
Category: Billing

Example 3: "When will the new feature be released?"
Category: Feature Request

Now classify: "\${userMessage}"
Category:
\`;
\`\`\`

---

## Caching Strategies

### Semantic Caching

\`\`\`typescript
async function semanticCache(query: string): Promise<string | null> {
  const queryEmbedding = await generateEmbedding(query);
  
  // Find similar cached queries
  const cached = await cacheDB.findSimilar(queryEmbedding, {
    threshold: 0.95, // High similarity required
    limit: 1
  });
  
  if (cached.length > 0) {
    return cached[0].response;
  }
  
  return null; // Cache miss
}
\`\`\`

---

## Cost Optimization

### Token Management

| Strategy | Savings | Trade-off |
|----------|---------|-----------|
| Prompt compression | 20-40% | Slight accuracy drop |
| Model tiering | 50-70% | Latency variation |
| Aggressive caching | 60-80% | Staleness risk |
| Batch processing | 30-50% | Increased latency |

### Model Selection Logic

\`\`\`typescript
function selectModel(request: LLMRequest): string {
  if (request.complexity === 'simple') {
    return 'gpt-3.5-turbo'; // Fast and cheap
  }
  if (request.requiresReasoning) {
    return 'gpt-4o'; // Best reasoning
  }
  if (request.context.length > 100000) {
    return 'claude-3-sonnet'; // Long context
  }
  return 'gpt-4o-mini'; // Default balanced
}
\`\`\`

---

## Monitoring & Evaluation

### Key Metrics

1. **Latency** - P50, P95, P99 response times
2. **Token Usage** - Input and output tokens per request
3. **Error Rate** - API failures, timeouts, rate limits
4. **Quality Score** - User feedback, automated evaluation

---

## Key Takeaways

1. Use RAG for domain-specific accuracy
2. Implement semantic caching for cost reduction
3. Choose models based on task complexity
4. Monitor quality metrics continuously
5. Have fallback strategies for API failures

---

*Want to serve your LLM application at scale? Check our [Kubernetes DevOps Pipeline](/blog/kubernetes-devops-pipeline) guide.*
    `,
    category: 'ai',
    author: authors[0], // StackCraft Team
    publishedAt: '2025-12-28T10:00:00Z',
    modifiedAt: '2026-01-07T16:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['AI', 'LLM', 'Machine Learning', 'RAG', 'GPT'],
    readTime: 19,
  },
  {
    id: '7',
    slug: 'comprehensive-testing-strategy',
    title: 'Comprehensive Testing Strategy for Modern Applications',
    description: 'Build a robust testing pyramid with unit, integration, and E2E tests. Covers TDD, BDD, contract testing, and performance testing.',
    content: `
# Comprehensive Testing Strategy for Modern Applications

A robust testing strategy is essential for delivering quality software. This guide covers the testing pyramid and practical implementation patterns.

## The Testing Pyramid

\`\`\`
                    ┌───────────┐
                    │   E2E     │  Slow, Expensive
                    │   Tests   │  (10%)
                   ─┴───────────┴─
                  ┌───────────────┐
                  │  Integration  │  Medium Speed
                  │    Tests      │  (20%)
                 ─┴───────────────┴─
                ┌───────────────────┐
                │     Unit Tests    │  Fast, Cheap
                │                   │  (70%)
               ─┴───────────────────┴─
\`\`\`

---

## Unit Testing

### Test Structure (AAA Pattern)

\`\`\`typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a user with valid data', async () => {
      // Arrange
      const userData = { email: 'test@example.com', name: 'Test User' };
      const mockRepo = { save: jest.fn().mockResolvedValue({ id: 1, ...userData }) };
      const service = new UserService(mockRepo);

      // Act
      const result = await service.createUser(userData);

      // Assert
      expect(result.id).toBe(1);
      expect(result.email).toBe(userData.email);
      expect(mockRepo.save).toHaveBeenCalledWith(userData);
    });

    it('should throw error for invalid email', async () => {
      // Arrange
      const userData = { email: 'invalid', name: 'Test' };
      const service = new UserService({});

      // Act & Assert
      await expect(service.createUser(userData))
        .rejects
        .toThrow('Invalid email format');
    });
  });
});
\`\`\`

---

## Integration Testing

### Database Integration Tests

\`\`\`typescript
describe('UserRepository', () => {
  let db: TestDatabase;
  let repository: UserRepository;

  beforeAll(async () => {
    db = await TestDatabase.create();
    repository = new UserRepository(db);
  });

  afterAll(async () => {
    await db.destroy();
  });

  beforeEach(async () => {
    await db.clear();
  });

  it('should persist and retrieve a user', async () => {
    const user = await repository.create({
      email: 'test@example.com',
      name: 'Test User'
    });

    const found = await repository.findById(user.id);

    expect(found).toEqual(user);
  });
});
\`\`\`

---

## Contract Testing

### Pact Consumer Test

\`\`\`typescript
describe('UserAPI Consumer', () => {
  const provider = new Pact({
    consumer: 'Frontend',
    provider: 'UserService',
  });

  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  it('should get user by id', async () => {
    await provider.addInteraction({
      state: 'a user with id 1 exists',
      uponReceiving: 'a request for user 1',
      withRequest: {
        method: 'GET',
        path: '/users/1',
      },
      willRespondWith: {
        status: 200,
        body: {
          id: 1,
          email: like('user@example.com'),
          name: like('John Doe'),
        },
      },
    });

    const user = await userClient.getUser(1);
    expect(user.id).toBe(1);
  });
});
\`\`\`

---

## E2E Testing

### Playwright Test

\`\`\`typescript
test.describe('User Registration', () => {
  test('should register a new user', async ({ page }) => {
    await page.goto('/register');
    
    await page.fill('[data-testid="email"]', 'new@example.com');
    await page.fill('[data-testid="password"]', 'SecurePassword123!');
    await page.fill('[data-testid="name"]', 'New User');
    
    await page.click('[data-testid="submit"]');
    
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="welcome"]'))
      .toContainText('Welcome, New User');
  });
});
\`\`\`

---

## Performance Testing

### k6 Load Test

\`\`\`javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed: ['rate<0.01'],   // Error rate under 1%
  },
};

export default function () {
  const res = http.get('https://api.example.com/users');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
\`\`\`

---

## Key Takeaways

1. Follow the testing pyramid - more unit tests, fewer E2E
2. Use the AAA pattern for clear test structure
3. Implement contract testing for microservices
4. Run performance tests in CI/CD
5. Measure and maintain test coverage

---

*Ready to automate your testing pipeline? Check our [Kubernetes DevOps Pipeline](/blog/kubernetes-devops-pipeline) guide.*
    `,
    category: 'testing',
    author: authors[2], // Sarah Martinez
    publishedAt: '2025-12-25T08:00:00Z',
    modifiedAt: '2026-01-05T10:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Testing', 'TDD', 'BDD', 'Quality', 'Automation'],
    readTime: 16,
  },
  {
    id: '8',
    slug: 'graphql-api-design-guide',
    title: 'GraphQL API Design: The Complete Guide',
    description: 'Design and implement production-ready GraphQL APIs. Covers schema design, resolvers, authentication, subscriptions, and performance optimization.',
    content: `
# GraphQL API Design: The Complete Guide

GraphQL offers flexibility that REST can't match, but with great power comes great responsibility. This guide covers patterns for building production-grade GraphQL APIs.

## Schema Design Principles

### Type-First Design

\`\`\`graphql
type User {
  id: ID!
  email: String!
  name: String!
  avatar: String
  posts(first: Int = 10, after: String): PostConnection!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  tags: [Tag!]!
  publishedAt: DateTime
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PostEdge {
  node: Post!
  cursor: String!
}
\`\`\`

### Input Types

\`\`\`graphql
input CreatePostInput {
  title: String!
  content: String!
  tagIds: [ID!]
  publishNow: Boolean = false
}

type Mutation {
  createPost(input: CreatePostInput!): CreatePostPayload!
}

type CreatePostPayload {
  post: Post
  errors: [Error!]!
}
\`\`\`

---

## Resolver Patterns

### DataLoader for N+1 Prevention

\`\`\`typescript
const userLoader = new DataLoader<string, User>(async (userIds) => {
  const users = await User.findByIds(userIds);
  const userMap = new Map(users.map(u => [u.id, u]));
  return userIds.map(id => userMap.get(id));
});

const resolvers = {
  Post: {
    author: (post, _, { loaders }) => {
      return loaders.userLoader.load(post.authorId);
    },
  },
};
\`\`\`

### Field-Level Authorization

\`\`\`typescript
const resolvers = {
  User: {
    email: (user, _, { currentUser }) => {
      if (currentUser?.id !== user.id && !currentUser?.isAdmin) {
        throw new ForbiddenError('Cannot access email');
      }
      return user.email;
    },
  },
};
\`\`\`

---

## Subscriptions

\`\`\`typescript
const typeDefs = gql\`
  type Subscription {
    postCreated: Post!
    commentAdded(postId: ID!): Comment!
  }
\`;

const resolvers = {
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    },
    commentAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(['COMMENT_ADDED']),
        (payload, variables) => {
          return payload.commentAdded.postId === variables.postId;
        }
      ),
    },
  },
};
\`\`\`

---

## Error Handling

\`\`\`typescript
class ValidationError extends ApolloError {
  constructor(message: string, field: string) {
    super(message, 'VALIDATION_ERROR', { field });
  }
}

const resolvers = {
  Mutation: {
    createPost: async (_, { input }, { currentUser }) => {
      if (!currentUser) {
        throw new AuthenticationError('Must be logged in');
      }
      
      if (input.title.length < 5) {
        throw new ValidationError(
          'Title must be at least 5 characters',
          'title'
        );
      }
      
      const post = await Post.create({ ...input, authorId: currentUser.id });
      return { post, errors: [] };
    },
  },
};
\`\`\`

---

## Performance Optimization

### Query Complexity Limiting

\`\`\`typescript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginQueryComplexity({
      maximumComplexity: 1000,
      scalarCost: 1,
      objectCost: 10,
      listFactor: 10,
    }),
  ],
});
\`\`\`

### Persisted Queries

\`\`\`typescript
const server = new ApolloServer({
  persistedQueries: {
    cache: new RedisCache({
      host: 'localhost',
      port: 6379,
    }),
  },
});
\`\`\`

---

## Key Takeaways

1. Design your schema as a contract
2. Use DataLoader to prevent N+1 queries
3. Implement field-level authorization
4. Limit query complexity to prevent abuse
5. Use persisted queries in production

---

*Need to version your GraphQL API? Check our [.NET API Design](/blog/production-grade-dotnet-api-design) guide for patterns.*
    `,
    category: 'api',
    author: authors[1], // Alex Chen
    publishedAt: '2025-12-20T14:00:00Z',
    modifiedAt: '2026-01-03T12:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['GraphQL', 'API', 'Schema', 'Apollo', 'Federation'],
    readTime: 21,
  },
];

// Helper functions
export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getCategoryInfo = (category: BlogCategory): CategoryInfo | undefined => {
  return categories.find(c => c.id === category);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.category.toLowerCase().includes(lowerQuery)
  );
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

export const getAuthorByName = (name: string): Author | undefined => {
  return authors.find(a => a.name === name);
};