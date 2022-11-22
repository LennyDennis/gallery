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
        stage('Run tests'){
            steps {
            sh 'npm test'
            }
        }
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
                      <p>Success build for ${BUILD_ID}</p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'",
                to: 'lennydennis@gmail.com'
        }
         failure {
            slackSend color: "danger", message: "Build for ${BUILD_ID} failed"

            emailext attachLog: true,
                     body:
                         """
                           <p>Build for ${BUILD_ID} failed</p>

                         """,
                     subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'",
                     to: 'lennydennis@gmail.com'

        }
    }

 }