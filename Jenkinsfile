pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/cinnamon-miracle-frontend"
        APP_NAME = "cinnamon-frontend"
        PORT = "3001"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                sh '''
                mkdir -p $DEPLOY_DIR
                rm -rf $DEPLOY_DIR/dist
                cp -r dist $DEPLOY_DIR/
                '''
            }
        }

        stage('Start Application (PM2)') {
            steps {
                sh '''
                pm2 delete $APP_NAME || true

                pm2 start "serve -s $DEPLOY_DIR/dist -l $PORT" --name $APP_NAME

                pm2 save
                '''
            }
        }

    }

    post {
        success {
            echo "Frontend running on port 3001 via PM2"
        }
        failure {
            echo "Deployment failed"
        }
    }
}
