module.exports = {
    apps: [
        {
            name: "cloud-sql-auth-proxy",
            script: "./cloud-sql-proxy",
            args: "fitbuddy-505618:asia-south1:mysql-ins fitbuddy-505618:asia-south1:postgres-ins --private-ip",
            log_file: "./logs/cloud-sql-proxy.log",
        },
        {
            name: "member-service",
            script: "java",
            args: "-jar ./member-service/target/member-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/member-service.log",
            instances: 2,
        },
        {
            name: "workout-service",
            script: "java",
            args: "-jar ./workout-service/target/workout-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/workout-service.log",
            instances: 2,
        },
        {
            name: "fitness-service",
            script: "java",
            args: "-jar ./fitness-service/target/fitness-service-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/fitness-service.log",
            instances: 2,
        }
    ]
};