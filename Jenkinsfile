pipeline {
    agent any

    tools {
       nodejs 'Node-19.1.0' 
    }

    stages {
        stage('Clone repository') {
            steps {
                echo 'Cloning repository'
                git 'https://github.com/LennyDennis/gallery'
            }
        }
        stage('NPM Install'){
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy To Heroku'){
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/arcane-tundra-48108.git master'
                } 
            }
        }
        stage('Run the application'){
            steps {
                sh 'node server'
                } 
        }
        stage('Run tests'){
            steps {
                sh 'npm test'
              }
            }
    }
 }