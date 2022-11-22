pipeline {
    agent any

    tools {
       nodejs 'Node-19.1.0' 
    }

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/LennyDennis/gallery'
            }
        }
        stage('NPM Install'){
            steps {
                sh 'npm install'
            }
        }
//         stage('Run tests'){
//             steps {
//             sh 'npm test'
//             }
//         }
        stage('Deploy To Heroku'){
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/arcane-tundra-48108.git master'
                } 
            }
        }
    }
    post {
        success {
            slackSend color: "good", message: "Success build for ${BUILD_ID} \
            Heroku link : https://arcane-tundra-48108.herokuapp.com/ \
            GitHub link : https://github.com/LennyDennis/gallery"

            emailext attachLog: true,
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p>
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'",
                to: 'YOUREMAIL@gmail.com'
        }
         failure {
            slackSend color: "danger", message: "Build for ${BUILD_ID} failed"
        }
    }

 }