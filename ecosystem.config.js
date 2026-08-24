module.exports = {
    apps: [
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