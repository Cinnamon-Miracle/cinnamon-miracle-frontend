pipeline {
    agent any
    environment {
        DEPLOY_DIR = "/var/www/cinnamon-miracle-frontend"
        APP_NAME = "cinnamon-frontend"
        PORT = "3001"
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin"
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
                    npm install
                '''
            }
        }
        stage('Build React App') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
                    npm run build
                '''
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
                    export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
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
