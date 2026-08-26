# FitBuddy Core Services

## 👤 Student Information
* **Student Name:** R.K. Sachintha Prabashana
* **Student ID:** 241722032
* **GCP Project ID:** `fitbuddy-505618`

## 📝 Description
This directory houses the core business services. They communicate using Spring RestClient and integrate with Google Cloud Storage for media assets.

### 🛠️ Common Services Stack
- **Programming Language**: Java 25
- **Core Framework**: Spring Boot 4.0.1 / 4.1.0
- **Service Coordination**: Spring Cloud 2025.1.2 & Spring RestClient
- **Cloud Storage SDK**: Google Cloud Storage (GCS) Libraries BOM (`26.86.0`)
- **Build System**: Maven

---

## 📦 Domain Service Child Repositories

### 1. Member Service (`member-service`)
- **Role**: Profile management, Auth database, and Avatar uploads.
- **Port**: Dynamic (Internal Routing Map: `8082`)
- **Database**: PostgreSQL (JPA / Hibernate)
- **Key Operations**:
  - Handles member and trainer profiles, credentials, security validations, and assigned roles.
  - Implements image uploading, saving profile pictures to GCS bucket (`bc-fitbuddy`) root.
  - Exposes profiles to other microservices via REST endpoints.

### 2. Fitness Service (`fitness-service`)
- **Role**: Progress reporting, PDF compiler, and cloud report uploads.
- **Port**: Dynamic (Internal Routing Map: `8081`)
- **Database**: PostgreSQL (Production), MySQL (Dev)
- **Key Operations**:
  - Fetches member records from Member Service and workout rates from Workout Service using **Spring RestClient** (via load-balanced HTTP requests).
  - Uses **OpenPDF** to construct progress graphs and reports directly in-memory (returning a raw byte stream).
  - Uploads generated PDF files to the bucket under the GCS virtual folder `fitness-report/`.
  - Downloads and streams the PDFs as a standard spring `Resource`.

### 3. Workout Service (`workout-service`)
- **Role**: routine definition, set records, and progress trackers.
- **Port**: Dynamic (Internal Routing Map: `8083`)
- **Database**: MongoDB (via Spring Data MongoDB document repository)
- **Key Operations**:
  - Manages Routine routines, exercises, difficulties, set sizes, and target muscles.
  - Tracks routine completion rates and logs individual member history metrics.
